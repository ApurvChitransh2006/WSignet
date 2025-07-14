const express = require('express')
const router = express.Router()
const product = require('../models/product.models')
const {csvParseProduct} = require('../controllers/csv.controllers')
const {upload} = require('../utils/files.utils')



router.post('/update/:code', upload.single('file'), async (req, res) => {
  try {
    await product.deleteMany({ firmCode: req.params.code });

    const extension = req.file.originalname.split('.').pop();
    const fileName = req.file.fieldname + '.' + extension;

    const arr = await csvParseProduct(fileName, req.params.code);
    
    const chunkSize = 1000;
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      const result = await product.insertMany(chunk);
      console.log(`Inserted chunk: ${i} - ${i + chunk.length}`);
    }

    res.status(200).json('Uploaded Successfully');
  } catch (error) {
    console.error("CSV Parse Error:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/getlist/:code', async (req, res)=>{
  const results = await product.find({firmCode: req.params.code})
  res.status(200).json(results)
})


router.get('/search', async (req, res) => {
  try {
    const { code, query } = req.query;
    console.log(code, query)
    if (!code || !query) {
      return res.status(400).json({ error: "Missing code or query" });
    }


    const results = await product.find({
      firmCode: code,
      productName: { $regex: query, $options: 'i' } // case-insensitive
    });

    res.status(200).json(results);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Server error" });
  }
});



module.exports = router
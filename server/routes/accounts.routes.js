const express = require('express')
const router = express.Router()
const accounts = require('../models/accounts.models')
const {csvParseAccount} = require('../controllers/csv.controllers')
const {upload} = require('../utils/files.utils')



router.post('/update/:code', upload.single('file'), async (req, res) => {
  try {
    await accounts.deleteMany({ firmCode: req.params.code });

    const extension = req.file.originalname.split('.').pop();
    const fileName = req.file.fieldname + '.' + extension;

    const arr = await csvParseAccount(fileName, req.params.code);
    
    const chunkSize = 1000;
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      const result = await accounts.insertMany(chunk);
      console.log(`Inserted chunk: ${i} - ${i + chunk.length}`);
    }

    res.status(200).json('Uploaded Successfully');
  } catch (error) {
    console.error("CSV Parse Error:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/getList/:code', async (req, res)=>{
  try {
    const firmCode = req.params.code
    const result = await accounts.find({firmCode: firmCode})
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({error:error.message})
  }
})


module.exports = router
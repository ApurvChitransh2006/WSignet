const express = require('express')
const router = express.Router()
const ledger = require('../models/ledger.models')
const {csvParseLedger} = require('../controllers/csv.controllers')
const {upload} = require('../utils/files.utils')
const Accounts = require('../models/accounts.models')



router.post('/update/:code', upload.single('file'), async (req, res) => {
  try {
    await ledger.deleteMany({ firmCode: req.params.code });

    const extension = req.file.originalname.split('.').pop();
    const fileName = req.file.fieldname + '.' + extension;

    const arr = await csvParseLedger(fileName, req.params.code);
    const chunkSize = 1000;
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      const result = await ledger.insertMany(chunk);
      console.log(`Inserted chunk: ${i} - ${i + chunk.length}`);
    }

    res.status(200).json('Uploaded Successfully');
  } catch (error) {
    console.error("CSV Parse Error:", error);
    res.status(500).json({ error: error.message });
  }
});

const account = require("../models/accounts.models"); // <-- Make sure you import your account model

router.post("/getledger/:code", async (req, res) => {
  try {
    const firmcode = req.params.code;
    const { Acno, Sdate, Edate } = req.body;

    // 1. Get the account to find initial balance and mode
    const acc = await account.findOne({ firmCode: firmcode, accountNo: Acno });

    if (!acc) {
      return res.status(404).json({ error: "Account not found" });
    }
    
    const baseBalance = parseFloat(acc.balance || 0);
    const baseMode = acc.balMode; // "Credit" or "Debit"

    // 2. Fetch entries before start date
    const previousEntries = await ledger.find({
      firmCode: firmcode,
      accountNo: Acno,
      vdate: { $lt: new Date(Sdate) },
    });


    let totalCredits = 0;
    let totalDebits = 0;

    previousEntries.forEach((entry) => {
      if (entry.vmode === "Credit") totalCredits += entry.amount;
      else if (entry.vmode === "Debit") totalDebits += entry.amount;
    });

    // 3. Compute the effective balance
    let openingBalance = 0;

    if (baseMode === "Credit") {
      openingBalance = baseBalance + totalCredits - totalDebits;
    } else if (baseMode === "Debit") {
      openingBalance = baseBalance + totalDebits - totalCredits;
      openingBalance *= -1; // store Debit as negative for clarity
    }

    const openingBalMode = openingBalance >= 0 ? "Credit" : "Debit";

    // Send absolute value to avoid confusion
    const finalOpeningBalance = Math.abs(openingBalance);
    
    // 4. Fetch ledger data within range
    const ledgerEntries = await ledger.find({
      firmCode: firmcode,
      accountNo: Acno,
      vdate: { $gte: new Date(Sdate), $lte: new Date(Edate) },
    });

    const formattedData = ledgerEntries.map((entry) => ({
      vtype: entry.vtype,
      vdate: entry.vdate,
      vdis: entry.vdis,
      drAmount: entry.vmode === "Debit" ? entry.amount : null,
      crAmount: entry.vmode === "Credit" ? entry.amount : null,
    }));

    res.json({
      openingBalance: finalOpeningBalance,
      openingBalMode: openingBalMode,
      ledgerData: formattedData,
    });
  } catch (error) {
    console.error("Error in /getledger:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

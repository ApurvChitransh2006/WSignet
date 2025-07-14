import fs from 'fs';
import csv from 'csv-parser';

export const csvParseProduct = async (fileName, firmCode) => {
  return new Promise((resolve, reject) => {
    const results = [];
    const filePath = `./uploads/${fileName}`;

    if (!fs.existsSync(filePath)) {
      return reject(new Error('File is Not Uploaded Yet'));
    }

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        let info = {
          firmCode: firmCode,
          productName: data.Item_Name,
          mfgName: data.Mfg_Name,
          salesRate: data.Sale_Rate || 0,
          dharaRate: data.Dhara_Rate || 0,
          superRate: data.Supper_Rate || 0
        }
        results.push(info)
      })
      .on('end', () => {
        fs.rmSync(filePath);
        resolve(results);   // ✅ Correct way to return results
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

export const csvParseAccount = async (fileName, firmCode) => {
  return new Promise((resolve, reject) => {
    const results = [];
    const filePath = `./uploads/${fileName}`;

    if (!fs.existsSync(filePath)) {
      return reject(new Error('File is Not Uploaded Yet'));
    }

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        let info = {
          firmCode: firmCode,
          accountName: data.Ac_Name,
          accountNo: data.Acno,
          balance: data.Bal1,
          balMode: data.Bal1_Mode,
          area: data.Area_Name
        }
        results.push(info)
      })
      .on('end', () => {
        fs.rmSync(filePath);
        resolve(results);  
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

export const csvParseLedger = async (fileName, firmCode) => {
  return new Promise((resolve, reject) => {
    const results = [];
    const filePath = `./uploads/${fileName}`;

    if (!fs.existsSync(filePath)) {
      return reject(new Error('File is Not Uploaded Yet'));
    }

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        let info = {
          firmCode: firmCode,
          vtype: data.Vtype,
          vdate: new Date(data.Vdate.replace(/(\d{2})-(\d{2})-(\d{4})/, '$3-$2-$1')),
          accountNo: data.Acno,
          vmode: data.Vmode,
          vdis: data.Vdis,
          amount: data.Amt
        }
        results.push(info)
      })
      .on('end', () => {
        fs.rmSync(filePath);
        resolve(results);   // ✅ Correct way to return results
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};


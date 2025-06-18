import React, { useEffect, useState } from 'react'
import html2pdf from 'html2pdf.js'

const ReportPDF = () => {

  const datas = [
  {
    "vdate": "01-04-24",
    "narration": "Opening Balance",
    "drAmount": 90424.00,
    "crAmount": null
  },
  {
    "vdate": "07-04-24",
    "narration": "Bill No.: SVC-000230",
    "drAmount": 119248.00,
    "crAmount": null
  },
  {
    "vdate": "03-05-24",
    "narration": "TRANS.PNB.",
    "drAmount": null,
    "crAmount": 30000.00
  },
  {
    "vdate": "08-05-24",
    "narration": "Bill No.: SVC-001230",
    "drAmount": 7980.00,
    "crAmount": null
  },
  {
    "vdate": "19-05-24",
    "narration": "TRANS.PNB.",
    "drAmount": null,
    "crAmount": 30000.00
  },
  {
    "vdate": "24-05-24",
    "narration": "Bill No.: SVC-001639",
    "drAmount": 46239.00,
    "crAmount": null
  },
  {
    "vdate": "04-06-24",
    "narration": "TRANS.PNB.",
    "drAmount": null,
    "crAmount": 30424.00
  },
  {
    "vdate": "19-06-24",
    "narration": "Bill No.: SVC-002141",
    "drAmount": 38622.00,
    "crAmount": null
  },
  {
    "vdate": "26-06-24",
    "narration": "TRANS.PNB.",
    "drAmount": null,
    "crAmount": 30000.00
  },
  {
    "vdate": "10-07-24",
    "narration": "TRANSPNB",
    "drAmount": null,
    "crAmount": 30000.00
  },
  {
    "vdate": "24-07-24",
    "narration": "TRANS.PNB.",
    "drAmount": null,
    "crAmount": 29248.00
  },
  {
    "vdate": "04-08-24",
    "narration": "Bill No.: SVC-003433",
    "drAmount": 111517.00,
    "crAmount": null
  },
  {
    "vdate": "13-08-24",
    "narration": "TRANS.PNB.",
    "drAmount": null,
    "crAmount": 7980.00
  },
  {
    "vdate": "14-08-24",
    "narration": "Bill No.: SVC-003712",
    "drAmount": 33642.00,
    "crAmount": null
  }
]

  const handlePdf = ()=>{

  }

  const [balance, setBalance] = useState([]);

  useEffect(() => {
    let runningBalance = 0;
    const updatedBalance = [];

    for (let i = 0; i < datas.length; i++) {
      if (datas[i].drAmount) {
        runningBalance -= datas[i].drAmount;
      }
      if (datas[i].crAmount) {
        runningBalance += datas[i].crAmount;
      }
      updatedBalance.push(runningBalance);
    }

    setBalance(updatedBalance);
  }, []);

  

  return (
    <div className='text-black bg-white fixed inset-0 text-center '>
      <div className='text-2xl'>ReportPDF</div>
      <div className='text-sm'>Mobile No. : 9918102015</div>
      <div className='text-sm'>Account No.: <span className='font-bold'>Ganesh Trading Company</span></div>
      <div className='text-sm'>Periods : 01-04-2024 To 31-03-2025</div>
      <div className='grid grid-cols-12 border-b-2 border-t-2 mt-3 px-2'>
        <div className='col-span-1 border-r-2 border-gray-400'>V.Date</div>
        <div className='col-span-5 border-r-2 border-gray-400'>Naration</div>
        <div className='col-span-2 border-r-2 border-gray-400'>Dr Amount</div>
        <div className='col-span-2 border-r-2 border-gray-400'>Cr Amount</div>
        <div className='col-span-2 '>Running Balance</div>
      </div>
        {datas.map((x, index)=>(
          <div key={x.vdate} className='grid grid-cols-12 px-2'>
            <div className='col-span-1 border-r-2 border-gray-400'>{x.vdate}</div>
            <div className='col-span-5 border-r-2 border-gray-400 text-start'>{x.narration}</div>
            <div className='col-span-2 border-r-2 border-gray-400 text-end'>{x.drAmount? x.drAmount:''}</div>
            <div className='col-span-2 border-r-2 border-gray-400 text-end'>{x.crAmount? x.crAmount:''}</div>
            <div className='col-span-2 text-end'>{balance[index]>0? `${Math.abs(balance[index])} Cr`:`${Math.abs(balance[index])} Dr`}</div>
          </div>
        ))}
        
    </div>
  )
}

export default ReportPDF
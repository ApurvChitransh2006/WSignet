import React, { useEffect, useState } from "react";

const ReportPDF = ({
  ledgerData,
  accountName,
  startDate,
  endDate,
  openingBalance,
  openingBalMode,
  onClose,
}) => {
  const [sortedData, setSortedData] = useState([]);
  const [balanceList, setBalanceList] = useState([]);
  const [totalDr, setTotalDr] = useState(0);
  const [totalCr, setTotalCr] = useState(0);

  // Format date as dd-mm-yyyy
  const formatDate = (input) => {
    const date = new Date(input);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    const sorted = [...ledgerData].sort((a, b) => new Date(a.vdate) - new Date(b.vdate));
    setSortedData(sorted);

    let runningBalance =
      openingBalMode === "Debit" ? -openingBalance :
      openingBalMode === "Credit" ? openingBalance : 0;

    let drSum = 0;
    let crSum = 0;
    const tempBalances = [runningBalance];

    sorted.forEach((entry) => {
      if (entry.drAmount) {
        runningBalance -= entry.drAmount;
        drSum += entry.drAmount;
      }
      if (entry.crAmount) {
        runningBalance += entry.crAmount;
        crSum += entry.crAmount;
      }
      tempBalances.push(runningBalance);
    });

    setTotalDr(drSum);
    setTotalCr(crSum);
    setBalanceList(tempBalances);
  }, [ledgerData, openingBalance, openingBalMode]);

  const finalBalance = balanceList[balanceList.length - 1] || 0;

  return (
    <div className="fixed inset-0 bg-white text-black overflow-y-auto px-6 py-6 z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Ledger Report</h2>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>

      {/* Account Info */}
      <div className="mb-1 text-sm">
        <strong>Account:</strong> {accountName}
      </div>
      <div className="mb-4 text-sm">
        <strong>Period:</strong> {formatDate(startDate)} to {formatDate(endDate)}
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-18 font-semibold text-sm bg-gray-100 py-2 border-y-2">
        <div className="col-span-1 border-r text-center">V</div>
        <div className="col-span-3 border-r text-center">V.Date</div>
        <div className="col-span-5 border-r">Narration</div>
        <div className="col-span-3 border-r text-right">Dr Amount</div>
        <div className="col-span-3 border-r text-right">Cr Amount</div>
        <div className="col-span-3 text-right">Balance</div>
      </div>

      {/* Opening Balance */}
      <div className="grid grid-cols-18 text-sm py-2 bg-yellow-50 font-semibold border-b">
        <div className="col-span-1 border-r text-center">--</div>
        <div className="col-span-3 border-r text-center">--</div>
        <div className="col-span-5 border-r">Opening Balance</div>
        <div className="col-span-3 border-r text-right">
          {openingBalMode === "Debit" ? openingBalance.toFixed(2) : ""}
        </div>
        <div className="col-span-3 border-r text-right">
          {openingBalMode === "Credit" ? openingBalance.toFixed(2) : ""}
        </div>
        <div className="col-span-3 text-right">
          {Math.abs(balanceList[0]).toFixed(2)} {balanceList[0] >= 0 ? "Cr" : "Dr"}
        </div>
      </div>

      {/* Ledger Entries */}
      {sortedData.map((entry, index) => (
        <div key={index} className="grid grid-cols-18 text-sm py-2 border-b">
          <div className="col-span-1 border-r text-center">{entry.vtype}</div>
          <div className="col-span-3 border-r text-center">{formatDate(entry.vdate)}</div>
          <div className="col-span-5 border-r">{entry.vdis || "N/A"}</div>
          <div className="col-span-3 border-r text-right break-words min-w-0 whitespace-pre-wrap">
            {entry.drAmount ? entry.drAmount.toFixed(2) : ""}
          </div>
          <div className="col-span-3 border-r text-right break-words min-w-0 whitespace-pre-wrap">
            {entry.crAmount ? entry.crAmount.toFixed(2) : ""}
          </div>
          <div className="col-span-3 text-right break-words min-w-0 whitespace-pre-wrap">
            {Math.abs(balanceList[index + 1]).toFixed(2)}{" "}
            {balanceList[index + 1] >= 0 ? "Cr" : "Dr"}
          </div>
        </div>
      ))}

      {/* Totals */}
      <div className="grid grid-cols-18 text-sm py-3 font-semibold border-t-2 mt-2">
        <div className="col-span-9 text-right pr-4">Total:</div>
        <div className="col-span-3 text-right border-r">
          {totalDr.toFixed(2)}
        </div>
        <div className="col-span-3 text-right border-r">
          {totalCr.toFixed(2)}
        </div>
        <div className="col-span-3 text-right font-bold">
          {Math.abs(finalBalance).toFixed(2)} {finalBalance >= 0 ? "Cr" : "Dr"}
        </div>
      </div>

      {/* Closing Balance */}
      <div className="text-right font-bold text-lg mt-3">
        Closing Balance: {Math.abs(finalBalance).toFixed(2)}{" "}
        {finalBalance >= 0 ? "Cr" : "Dr"}
      </div>
    </div>
  );
};

export default ReportPDF;

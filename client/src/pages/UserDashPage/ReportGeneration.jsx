import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAccountList from "../../hooks/useAccountList";
import instance from "../../api/axiosInstance";
import ReportPDF from "../../components/UserDashPage/ReportPDF/ReportPDF";
import Navbar from "../../components/UserDashPage/MainPage/Navbar";

const ReportGeneration = () => {
  const { user } = useAuth();
  const { accountList } = useAccountList();

  const [searchValue, setSearchValue] = useState(""); // merged input: Name (Area)
  const [accountNo, setAccountNo] = useState("");
  const today = new Date().toISOString().split("T")[0]; // format: YYYY-MM-DD
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today); 
  const [status, setStatus] = useState("");

  const [ledgerData, setLedgerData] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [openingBalance, setOpeningBalance] = useState(0);
  const [openingBalMode, setOpeningBalMode] = useState("");

  // Create display labels: "Account Name (Area)"
  const accountOptions = accountList.map(acc => ({
    label: `${acc.accountName} (${acc.area})`,
    value: acc.accountNo,
  }));

  useEffect(() => {
    const match = accountOptions.find(opt => opt.label.toLowerCase() === searchValue.toLowerCase());
    setAccountNo(match ? match.value : "");
  }, [searchValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accountNo || !startDate || !endDate) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      const response = await instance.post(`/ledger/getledger/${user.firmcode}`, {
        Acno: accountNo,
        Sdate: startDate,
        Edate: endDate,
      });

      setLedgerData(response.data.ledgerData);
      setOpeningBalance(response.data.openingBalance);
      setOpeningBalMode(response.data.openingBalMode);
      setShowReport(true);
      setStatus("");
    } catch (error) {
      console.error(error);
      setStatus("Error fetching ledger data.");
    }
  };

  const handleCloseReport = () => {
    setShowReport(false);
    setLedgerData([]);
    setOpeningBalance(0);
    setOpeningBalMode("");
    setSearchValue("");
    setAccountNo("");
  };

  return (
    <>
      {!showReport && (
        <div className="text-white h-screen flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-[#181818] rounded-xl p-6 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4">Generate Ledger Report</h2>

            {/* Account Input with Name + Area */}
            <div className="mb-3">
              <label className="text-gray-400 text-sm">Account:</label>
              <input
                type="text"
                list="accountList"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full h-10 px-2 rounded-lg text-black bg-white"
                placeholder="Apurv Chitransh (Gorakhpur)"
              />
              <datalist id="accountList">
                {accountOptions.map((opt, idx) => (
                  <option key={idx} value={opt.label} />
                ))}
              </datalist>
            </div>

            {/* Show Account No if available */}
            {accountNo && (
              <p className="text-green-400 text-sm mb-2">
                Selected Account No: {accountNo}
              </p>
            )}

            {/* Start Date */}
            <div className="mb-3">
              <label className="text-gray-400 text-sm">Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full h-10 px-2 rounded-lg text-black bg-white"
              />
            </div>

            {/* End Date */}
            <div className="mb-3">
              <label className="text-gray-400 text-sm">End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full h-10 px-2 rounded-lg text-black bg-white"
              />
            </div>

            {/* Status */}
            {status && <p className="text-yellow-400 text-sm">{status}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-emerald-600 rounded-lg py-2 mt-4 text-xl"
            >
              Generate Report
            </button>
          </form>
        </div>
      )}

      {showReport && (
        <ReportPDF
          ledgerData={ledgerData}
          accountName={searchValue}  // <-- Add this
          startDate={startDate}
          endDate={endDate}
          openingBalance={openingBalance}
          openingBalMode={openingBalMode}
          onClose={handleCloseReport}
        />
      )}

      {!showReport && <Navbar />}
    </>
  );
};

export default ReportGeneration;

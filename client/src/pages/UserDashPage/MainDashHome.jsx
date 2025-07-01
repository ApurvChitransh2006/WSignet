import React, { useState, useEffect } from "react";
import Navbar from "../../components/UserDashPage/MainPage/Navbar";
import useList from "../../hooks/useList";

// ✅ Custom Debounce Hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const MainDashHome = () => {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 600); // ✅ 300ms debounce

  const { list } = useList();

  // ✅ Filter only after debounce delay
  const filteredList = debouncedInput
    ? list.filter((x) =>
        x.productName.toLowerCase().includes(debouncedInput.toLowerCase())
      )
    : [];

  return (
    <>
      <div className="h-screen w-full text-white flex flex-col justify-center items-center bg-black">
        {/* Input Section */}
        <div className="w-11/12 md:w-2/6 p-4 flex flex-col mt-10">
          <label htmlFor="ino" className="text-gray-400 mb-1 text-lg">
            Enter the Product Name:
          </label>
          <input
            type="text"
            name="ino"
            placeholder="Search products..."
            className={`${
              list ? "bg-white" : "bg-gray-500"
            } w-full rounded-lg h-12 text-black px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!list}
          />
        </div>

        {/* Product Grid */}
        <div
          className={`h-8/12 w-11/12 md:4/5 lg:w-3/5 bg-[#212121] px-1 py-4 rounded-2xl ${
            debouncedInput.length > 0 ? "" : "hidden"
          } flex flex-col items-center`}
        >
          <div className="w-full grid grid-cols-12 gap-4 font-bold md:text-lg mb-3 px-2">
            <div className="col-span-3">Product Name</div>
            <div className="col-span-3">Manufacturer</div>
            <div className="col-span-2 text-end">N.Rate</div>
            <div className="col-span-2 text-end">D.Rate</div>
            <div className="col-span-2 text-end">S.Rate</div>
          </div>

          <div className="overflow-y-auto hide-scrollbar w-full">
            {filteredList.map((x) => (
              <div
                key={x.id}
                className="w-full min-w-full grid grid-cols-12 gap-1 text-sm md:text-lg hover:bg-[#353535] my-1 px-1 rounded border-b-2 border-gray-500 h-10 items-center"
              >
                <div className="col-span-3 truncate overflow-hidden whitespace-nowrap min-w-0">
                  {x.productName.replaceAll("-", " ")}
                </div>
                <div className="col-span-3 truncate overflow-hidden whitespace-nowrap min-w-0">
                  {x.mfgName.replaceAll("-", " ")}
                </div>
                <div className="col-span-2 text-end truncate overflow-hidden whitespace-nowrap min-w-0">
                  {x.salesRate}
                </div>
                <div className="col-span-2 text-end truncate overflow-hidden whitespace-nowrap min-w-0">
                  {x.dharaRate}
                </div>
                <div className="col-span-2 text-end truncate overflow-hidden whitespace-nowrap min-w-0">
                  {x.superRate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default MainDashHome;

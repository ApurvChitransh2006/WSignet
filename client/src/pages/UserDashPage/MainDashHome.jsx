import React, { useState } from "react";
import Navbar from "../../components/UserDashPage/MainPage/Navbar";

const MainDashHome = () => {
  const [input, setInput] = useState("");
  const product = [
  { "id": 10526, "name": "RITYA-ANTIQUE-RICH-PALLU", "manufacturer": "SHREE SAGAR HERITAGE", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 10523, "name": "NAWRATAN-RICH-PALLU", "manufacturer": "SHREE SAGAR HERITAGE", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 6974, "name": "D.NO.6,10,9,4,17,19,13,2,16,20", "manufacturer": "MAA-SUIT", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 6335, "name": "HERO HONDA", "manufacturer": "SHREE-SHYAM-PRABHU-CREATION", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 6326, "name": "KNJU-KATLI", "manufacturer": "SHREE-SHYAM-PRABHU-CREATION", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 6324, "name": "KANAKA KATHA", "manufacturer": "SHREE-SHYAM-PRABHU-CREATION", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 6323, "name": "NAGIN-KANAKA", "manufacturer": "SHREE-SHYAM-PRABHU-CREATION", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 6232, "name": "NARMADA SHANKAR", "manufacturer": "KALA-NIKETAN-FASHION", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 6074, "name": "SUPER-HIT-ABHA-PRINT", "manufacturer": "KHUSHBOO-SILK-MILLS", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 6073, "name": "MINAKSHI-ZIGZAG-PRINT", "manufacturer": "KHUSHBOO-SILK-MILLS", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 6033, "name": "KUNAL DESIGNER", "manufacturer": "KUNAL-DESIGNER", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 5953, "name": "KUNAL-RADHIKA", "manufacturer": "KUNAL-DESIGNER", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 5952, "name": "GHUNGHAT-EMBROIDERY", "manufacturer": "KUNAL-DESIGNER", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 5796, "name": "TRADITIONAL DESIGNER", "manufacturer": "KALA-NIKETAN-FASHION", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 5737, "name": "MINAKSHI DESIGNER", "manufacturer": "KHUSHBOO-SILK-MILLS", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 5695, "name": "DULHAN SPECIAL", "manufacturer": "KALA-NIKETAN-FASHION", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 5672, "name": "ASHIRWAD KALAKAAR", "manufacturer": "KHUSHBOO-SILK-MILLS", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 5551, "name": "SUMANGAL ZARI DESIGN", "manufacturer": "KALA-NIKETAN-FASHION", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 5523, "name": "KASTURI DESIGNER", "manufacturer": "KALA-NIKETAN-FASHION", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
  { "id": 5426, "name": "AAKRITI-PURE-ZARI", "manufacturer": "KHUSHBOO-SILK-MILLS", "salesrate": 1999, "dhararate": 2299, "supperrate": 2499 },
]



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
            className="bg-white w-full rounded-lg h-12 text-black px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <div className={`h-8/12 w-11/12 md:4/5 lg:w-3/5 bg-[#212121] px-1 py-4 rounded-2xl ${input.length > 0?'':'hidden'} flex flex-col items-center`}>
          <div className="w-full grid grid-cols-12 gap-4 font-bold  md:text-lg mb-3 px-2">
            <div className="col-span-3">Product Name</div>
            <div className="col-span-3">Mfg Name</div>
            <div className="col-span-2 text-end">SRate</div>
            <div className="col-span-2 text-end">DRate</div>
            <div className="col-span-2 text-end">URate</div>
          </div>
          <div className="overflow-y-auto hide-scrollbar">
            {input && product.filter(x=>x.name.toLowerCase().includes(input.toLowerCase()))?.map(x=>(
              <div key={x.id} className="w-full grid grid-cols-12 gap-1 md:gap-4 text-sm md:text-lg hover:bg-[#353535] my-1 px-1 rounded border-b-2 border-gray-500">
                <div className="col-span-3 ">{x.name.replaceAll('-', ' ')}</div>
                <div className="col-span-3 ">{x.manufacturer.replaceAll('-', ' ')}</div>
                <div className="col-span-2 text-end">{x.salesrate}</div>
                <div className="col-span-2 text-end">{x.dhararate}</div>
                <div className="col-span-2 text-end">{x.supperrate}</div>
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
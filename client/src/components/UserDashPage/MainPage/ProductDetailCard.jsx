import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const ProductDetailCard = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className='fixed inset-0 bg-[#000000a0] grid place-items-center px-4 z-50'>
      <div className='bg-black border-2 border-white rounded-2xl lg-w-sm w-full max-w-md md:max-w-2xl flex flex-col justify-center items-start px-4 md:px-6 py-5 md:py-6 relative text-white'>
        {/* Header */}
        <div className='text-xl md:text-3xl font-bold self-center mb-4'>
          Product Details
        </div>
        <hr className='block w-full mb-4'/>
        {/* Content */}
        <div className='flex flex-row justify-between items-start w-full gap-3 md:gap-8'>
          {/* Left - Name & Manufacturer */}
          <div className='flex flex-col gap-1 w-full md:w-3/5'>
            <p className='text-lg md:text-2xl font-semibold break-words'>
              {product.productName.replaceAll("-", " ")}
            </p>
            <p className='text-sm md:text-lg text-gray-400 break-words'>
              {product.mfgName.replaceAll("-", " ")}
            </p>
          </div>

          {/* Right - Rates */}
          <div className='flex flex-col items-start md:items-end gap-1 w-full md:w-2/5 text-right'>
            <p className='text-sm md:text-lg'><strong>N:</strong> {product.salesRate}</p>
            <p className='text-sm md:text-lg'><strong>D:</strong> {product.dharaRate}</p>
            <p className='text-sm md:text-lg'><strong>S:</strong> {product.superRate}</p>
          </div>
        </div>

        {/* Close Button */}
        <div
          className='absolute top-2 right-2 cursor-pointer'
          onClick={onClose}
        >
          <RxCross2 className='text-xl md:text-2xl' />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;

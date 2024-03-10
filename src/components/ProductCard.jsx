import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const ProductCard = () => {
  return (
    <div className='border border-gray-300 shadow-sm container mx-auto rounded-md'>

  <div className='m-2'>
    <div className='relative'>
       <img  src="/house.webp" alt="" />
              <div className='rounded-full bg-white absolute right-2 top-2 h-10 w-10 '>
                  <FaRegHeart className='mt-[11px] ml-[11px]' size={20} />
              </div>
              </div>
          <div className='my-3 mx-2'>
              <h1 className='font-bold text-2xl'>₹ 9500</h1>
              <p className='text-gray-500 mb-2'>Iphone 11 sale</p>
              <p className='text-xs text-gray-500'>OMANOOR,MALAPPURAM</p>
              </div>
          </div>

    </div>
  )
}

export default ProductCard
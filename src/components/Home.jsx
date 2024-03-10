import React from 'react'
import ProductCard from './ProductCard'

const Home = () => {
  
  return (
   <>
    <div className='bg-gray-50 shadow-md py-2'>
    <div className='container mx-auto'>
        <div className='flex items-end justify-around text-[#002f34]'>
          <div className='font-semibold'>ALL CATEGORIES</div>
          <div className='text-sm'>Cars</div>
          <div className='text-sm'>Motorcycles</div>
          <div className='text-sm'>Mobile Phones</div>
          <div className='text-sm'>For Sale: Houses & Apartments</div>
          <div className='text-sm'>Scooters</div>
          <div className='text-sm'>Commercial & Other Vehicles</div>
          <div className='text-sm'>For Rent: Houses & Apartments</div>
        </div>
    </div>
    </div>
      <div className=' container mx-auto mb-14'>
      <h1 className='text-2xl my-6'>Fresh recommendations</h1>
          
         <div className='grid grid-cols-4 gap-4'>
          <ProductCard/>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />


         </div>

      </div>
    </>
     
  )
}

export default Home
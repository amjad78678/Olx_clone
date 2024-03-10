import React from 'react'
import { Link } from 'react-router-dom'

const SellProduct = () => {
  return (
      <div className='bg-gray-100 grid grid-cols-12 pb-5'>

          <span className='col-span-4'></span>
          <div className='col-span-4 m-10 bg-white rounded-xl'>

              <Link to={'/'}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-7 w-7 h-7 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg></Link>
              <div className='mx-auto text-center'>
                  <img className='p-2 w-24 mx-auto' src="/olx-logo.png" alt="" />

                  <h1 className='font-bold text-xl mt-6'>Sell your Product</h1>

                  <input className='py-2 px-2 border-2 w-3/4 rounded-lg mt-10 border-black' type="text" placeholder='Product Name' />
                  <input className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Category' />
                  <input className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Price' />
                  <input className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Location' />
                 <div>
                      <label className='text-start ms-16 rounded-lg mt-5 block' htmlFor="">Choose a Picture</label>
                      <input className='py-2 px-2 border-2 w-3/4 rounded-lg mt-1 border-black' type="file" placeholder='Choose' />

                 </div>
               

                  <button className='w-3/4 bg-black text-white font-bold text-center text-lg rounded-md py-3 mt-10 mb-16'>Login</button>


              </div>


          </div>
          <span className='col-span-4'></span>


      </div>
  )
}

export default SellProduct
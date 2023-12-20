import React from 'react'
import { Link } from 'react-router-dom'

const TotalOrders = () => {

  return (
    <div className='mt-10 bg-white p-3 rounded-lg'>
      <div className='w-full flex justify-between items-center'>
        <div>
            <h3 className='text-md text-blue-800 font-bold'>Total Orders</h3>
            <span className='text-[11px] text-gray-500'>A summery of your orders</span>
        </div>
        <Link to={"/order"} className='bg-blue-700 px-4 py-1 rounded-md text-sm text-white'>VIew All</Link>
      </div>

      <div className='mt-3 border-l-4 border-blue-800 px-2'>
        <h3 className='text-sm font-extrabold'>IR Sensor</h3>
        <p className='text-xs text-gray-500'>Product Description here this one is really long and it goes over maybe?</p>
        <span className='text-xs'>Qualtity: <span className='text-blue-800 font-extrabold'>{140}</span> pieces</span>
      </div>

      <div className='mt-3 border-l-4 border-blue-800 px-2'>
        <h3 className='text-sm font-extrabold'>Metal Sensor</h3>
        <p className='text-xs text-gray-500'>Task Description here this one is really long  and it goes over maybe? And goes to two lines.</p>
        <span className='text-xs'>Qualtity: <span className='text-blue-800 font-extrabold'>{120}</span> pieces</span>
      </div>
    </div>
  )
}

export default TotalOrders

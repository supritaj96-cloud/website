import React from 'react'

export default function Header() {
  return (
    <div>
    <ul className='flex justify-end gap-4 p-4'>
        <img src='https://blinkit.com/' alt="profile" className='w-8 rounded-full' />

        <li>
            my location
        </li>
        <li>
            <input value="search" ClassName='border border-gray-300 rounded-md px-2 py-1 focus: ring-2 focus: ring-blue-500'/>

        </li>
        <li>
           <button ClassName='border border-gray-300 rounded-md px-2 py-1 focus: ring-2 focus: ring-blue-500'>
            Login
        </button>
        </li>
        <li>
         <button className='bg-green-500 text-white px-4 py-2'>
            My Cart
          </button>
        </li>
      
    </ul>
    </div>
  )
}

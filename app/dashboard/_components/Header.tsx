import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-3 shadow-sm border-b-2 flex justify-between items-center bg-white'>
        <div className='flex gap-4 items-center p-2 max-w-md bg-white'>
            {/* <Search/>
            <input type='text' placeholder='Search....'
            className='outline-none'/> */}
        </div>
        <div className='pr-5 items-center'>
          <UserButton/>
        </div>
    </div>
  )
}

export default Header
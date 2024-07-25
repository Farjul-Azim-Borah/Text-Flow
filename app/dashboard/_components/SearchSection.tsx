import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-7 bg-gradient-to-br from-purple-500 via bg-purple-900 to to-blue-700 flex flex-col justify-center items-center text-white'>
        <h2 className='text-2xl font-bold'>Browse All Templates</h2>
        <p>What would you like to create today?</p>

        <div className='w-full | flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md my-5 w-[50%]'>
                <Search/>
                <input type='text' placeholder='Search'
                onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full outline-none'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection
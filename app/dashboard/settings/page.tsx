import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex items-center justify-center mb-4 pt-5 pb-5 h-full'>
        <UserProfile/>
    </div>
  )
}

export default Settings
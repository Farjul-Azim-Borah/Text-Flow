"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {

  const [userSearchInput , setUserSeachInput] = useState<string>()

  return (
    <div>
        {/* search section */}
        <SearchSection onSearchInput={(value:string)=>setUserSeachInput(value)}/>

        {/* template section */}
        <TemplateListSection userSearchInput = {userSearchInput}/>
    </div>
  )
}

export default Dashboard
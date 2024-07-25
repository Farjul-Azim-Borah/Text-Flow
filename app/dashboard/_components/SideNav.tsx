"use client"
import { FileClock, Home, Link2, Settings, Wallet, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import path from 'path'
import React, { useEffect } from 'react'

function SideNav() {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ]

    const path = usePathname();
    useEffect(()=>{
        console.log(path);
    },[])

  return (
    <div className='h-screen p-5 pt-2 shadow-sm border bg-white'>
        <div className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={70} height={100}/>
        </div>
        <hr className='mt-2 border'/>
        <div className='mt-4'>
            {MenuList.map((menu,index)=>(
                <Link href={menu.path}>
                    <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path == menu.path && 'bg-primary text-white'}`}>
                    <menu.icon className='h-6 w-5'/>
                    <h2>{menu.name}</h2>
                    </div>
                </Link> 
            ))}
        </div>
    </div>
  )
}

export default SideNav
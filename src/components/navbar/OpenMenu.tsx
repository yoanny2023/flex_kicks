import { forum } from '@/styles/font'
import { IconArrowLeftRhombusFilled, IconArrowRightRhombusFilled, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

type MenuBarProps = {
  onClick: () => void
}

function OpenMenu(props:MenuBarProps) {
  return (
    <div className='gsap_open_menu h-screen w-full bg-[#0a0b0a] p-12 sm:px-16 lg:px-40'>
      <div className={`relative flex justify-center items-center bg-[#111]
      border border-zinc-500 text-3xl sm:text-5xl h-full rounded-lg text-[#EFE7D2] ${forum.className}`} >
        
      <div className={`absolute top-4 left-4 rounded-md border border-[#EFE7D2]
        hover:cursor-pointer
        `}> 
          <IconX size={32} stroke={1} onClick={props.onClick}/>
      </div>

        <ul className='flex flex-col justify-center items-center gap-4 p-5'>
          <li><IconArrowLeftRhombusFilled size={32} stroke={1} /></li> 
          <li className='px-4 py-2 transition-all duration-300 rounded-md hover:bg-zinc-700 hover:text-purple-300' onClick={props.onClick}><Link href="/">HOME</Link></li>
          <li className='px-4 py-2 transition-all duration-300 rounded-md hover:bg-zinc-700 hover:text-purple-300' onClick={props.onClick}><Link href="/about">ABOUT US</Link></li>
          <li className='px-4 py-2 transition-all duration-300 rounded-md hover:bg-zinc-700 hover:text-purple-300' onClick={props.onClick}><Link href="/products">PRODUCTS</Link></li>
          <li className='px-4 py-2 transition-all duration-300 rounded-md hover:bg-zinc-700 hover:text-purple-300' onClick={props.onClick}><Link href="/feedBack">FEEDBACKS</Link></li>
          <li className='px-4 py-2 transition-all duration-300 rounded-md hover:bg-zinc-700 hover:text-purple-300' onClick={props.onClick}><Link href="/contact">CONTACT US</Link></li>
          <li><IconArrowRightRhombusFilled size={32} stroke={1} /></li>  
        </ul>
      </div>
    </div>
  )
}

export default OpenMenu

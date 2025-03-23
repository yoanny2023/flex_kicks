"use client"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

function Footer() { 
  return (
    <div className={`border-t border-zinc-800 shadow-lg shadow-zinc-950 flex items-center justify-between
    px-4 py-2
    `}>
      <span className='text-sm text-zinc-300 font-serif'>Allrights&copy;yoanny_{new Date().getFullYear()}</span>
      <div className='flex gap-3 '>
        <a href="https://www.linkedin.com/in/yoanny-vasco-358399132/" target="_blank">
          <IconBrandLinkedin className='w-8 h-8 p-1 rounded-full 
          border border-purple-500 hover:text-yellow-400 transition-all duration-500' 
          size={24} stroke={1}
         />
        </a>
        <a href="https://www.instagram.com/yoanny_vaal/" target="_blank">
          <IconBrandInstagram className='w-8 h-8 p-1 rounded-full 
          border border-purple-500 hover:text-yellow-400 transition-all duration-500' 
          size={24}  stroke={1} 
        />
        </a>
        <a href="https://www.facebook.com/yoannyvaal.vasco" target="_blank">
          <IconBrandFacebook className='w-8 h-8 p-1 rounded-full 
          border border-purple-500 hover:text-yellow-400 transition-all duration-500' 
          size={24}  stroke={1}
         />
        </a>
      </div>
    </div>
  )
}

export default Footer


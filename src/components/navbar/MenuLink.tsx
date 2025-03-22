"use client"
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { forum } from "@/styles/font"; // import poppins from font.ts file
import gsap from 'gsap'

interface MenuLinkProps {
  url?:string
  text:string
  fontPoppins?:boolean
  className?:string
}

function MenuLink(props:MenuLinkProps) {
  const router = useRouter();

  useEffect(()=>{
      gsap.timeline()
               .fromTo(".gsap_navLink", 
                {y:-300,opacity:0,delay:0},
                {y:0,duration:0.8,opacity:1,stagger:0.3,ease:"linear"})
    },[])
   
  return (
    <Link href={`/${props.url}`}
    className={`
      ${(router.pathname === `/${props.url}`) ?
       `text-purple-500 underline decoration-purple-500 decoration-2 underline-offset-4 
       transition-all duration-300` 
       :"text-zinc-400"
      }
      ${forum.className} 
      px-4 py-2 md:text-xl lg:text-2xl rounded-md font-medium 
      hover:bg-zinc-700 hover:text-purple-200 transition-all duration-500
      gsap_navLink hidden md:block 
    `}
    >
      {props.text}
    </Link>
  )
}

export default MenuLink;

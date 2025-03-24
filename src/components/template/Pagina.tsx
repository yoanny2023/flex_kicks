"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useRef } from "react";
import Logo from "../navbar/Logo";
import Navbar from "../navbar/Navbar";
import { IconMenu3, IconShoppingCart } from "@tabler/icons-react";
import Footer from "../footer/Footer";
import Content from "./Content";
import Filter from "../navbar/Filter";
import CartContext from "@/data/context/CartContext";
import Link from "next/link";
import gsap from "gsap";
import contextNavBar from "@/data/context/MenuBarContext";
import OpenMenu from "../navbar/OpenMenu";

interface PaginaProps {
  children: any;
  onAnimationComplete?: () => void; //Receive callback from Home
  className?:string
}

function Pagina(props: PaginaProps) {
  const{itens} =useContext(CartContext);
  const logoRef = useRef(null)
  const navRef = useRef(null)
  const{menuOpen,openMenuHandler} = useContext(contextNavBar);

  useEffect(()=>{
   const logoEl = logoRef.current;
   const navEl = navRef.current;

 // Ensure elements are hidden before animation starts
   gsap.set(logoEl,{x:-150,opacity:0}); // reset position before animation starts;
   gsap.set(".gsap_fcart",{x:200,opacity:0}); 
   gsap.set(navEl,{y:-400,opacity:0}); 
  
   gsap.timeline({
    onComplete: () => {
      if (props.onAnimationComplete) props.onAnimationComplete(); // Notify Home when animation completes
    }
  })
       .fromTo(logoEl,{x:-150,opacity:0},{x:0,opacity:1,duration:1})
       .fromTo(".gsap_fcart",{x:200,opacity:0},{x:0,opacity:1,duration:0.7},"<")
       .fromTo(navEl,{y:-400,opacity:0},{y:0,opacity:1,duration:1},"<0.4") 
  },[])

  return (
    <>
    {!menuOpen ? (
      <div className={`flex flex-col gap-3 bg-zinc-900 min-h-screen 
      `}>
      <header
        className={`fixed top-0 z-10 w-full flex justify-between items-center gap:2 sm:gap-3 px-5 py-2 h-16
      bg-zinc-900/70 backdrop-blur-2xl border-b border-zinc-800 shadow-md shadow-zinc-950
      `}
      >
        <Logo ref={logoRef} />
        <Navbar ref={navRef} />
        <div className="flex gap-4 justify-center items-center">
          <Filter className="gsap_fcart max-w-20 h-10" />
          <div className="gsap_fcart flex flex-col text-sm  items-center gap-1">
            <span className="flex justify-center items-center bg-purple-600 w-7 h-7 rounded-full">
              {itens.length}
            </span>
            <Link href="/products">
              <IconShoppingCart />
            </Link>
          </div>
            <div className='rounded-md p-[2px] md:hidden border border-[#EFE7D2]
            hover:cursor-pointer'>
            {<IconMenu3 onClick={openMenuHandler} className="cursor-pointer hover:text-purple-500 transition-all duration-300" size={20} stroke={1}/>}
          </div>
        </div>  
      </header>
      <div className="pt-16 flex-grow">
        <Content>
          {props.children}
        </Content>
      </div>
      <Footer />   
    </div>
    ) : 
    <OpenMenu onClick={openMenuHandler} />
    }
    </>
  );
}

export default Pagina;

"use client"
import Pagina from '@/components/template/Pagina'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import { image_men } from '@/assets/images'
import Button from '@/components/template/Button'
import { forum } from '@/styles/font'
import gsap from 'gsap'
import contextNavBar from '@/data/context/MenuBarContext'
import { useRouter } from 'next/router';

function About() {
  const router = useRouter();
  const{menuOpen} = useContext(contextNavBar);

  useEffect(()=>{
    gsap.set(".gsap_img",{x:-600,autoAlpha:0})
    gsap.set(".gsap_h1",{x:800,autoAlpha:0})
    gsap.set(".gsap_p",{y:800,autoAlpha:0})
    gsap.set(".gsap_btn",{y:800,autoAlpha:0})

    gsap.timeline()
                .fromTo(".gsap_img",{x:-600,opacity:0},{x:0,autoAlpha:1,duration:1.8})
                .fromTo(".gsap_h1",{x:800,opacity:0},{x:0,autoAlpha:1,duration:1.5},"<")
                .fromTo(".gsap_p",{y:800,opacity:0},{y:0,autoAlpha:1,duration:1.2},">-0.5")
                .fromTo(".gsap_btn",{y:800,opacity:0},{y:0,autoAlpha:1,ease:"power1.out",duration:1},">-0.5")

  },[router.pathname,menuOpen]);

  return (
    <Pagina>
      <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-7 p-3 sm:py-5 overflow-hidden
       bg-black/80 backdrop-blur-lg h-full'>
        <div className='gsap_img sm:w-1/2 h-[300px] order-2 sm:order-none sm:h-[420px] flex justify-center items-center 
          opacity-0 invisible'>
          <Image 
          src={image_men.image.sneaker6}
          alt='Image about'
          height={1664}
          width={2304}
          className='lg:w-[70%] h-full object-contain sm:object-cover rounded-2xl'
          />
        </div>
        <div className='flex flex-col gap-3 ml-5 order-1 sm:w-1/2 sm:order-none'>
          <p className='mt-3 font-sans text-lg'>About Us</p>
          <h1 className={`${forum.className} gsap_h1 opacity-0 invisible text-4xl lg:text-6xl bg-gradient-to-r from-purple-700 via-violet-500 to-white
           font-bold text-transparent bg-clip-text
          `}>
            Descover High-Quality <br/> <span className='text-3xl sm:text-3xl lg:text-4xl'>Shoes at FkexKicks</span> 
          </h1>
          <p className='gsap_p opacity-0 invisible text-sm text-zinc-400 font-sans'>
          FlexKicks is a stylish, easy-to-use online shoe store designed for a smooth shopping experience. Fast and convenient, it makes finding the perfect pair effortless.
          </p>
          <span className='gsap_btn opacity-0 invisible mt-5'><Button className='text-sm' text='Explore more' url='products' /></span>
        </div>
      </div>
    </Pagina>
  )
}

export default About

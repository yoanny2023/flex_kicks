"use-client"
import Pagina from '@/components/template/Pagina'
import React, { useContext,useLayoutEffect, useRef, useState } from 'react'
import { customers } from '@/assets/images'
import Testimonial from '@/components/feedback/Testimonial'
import { forum } from '@/styles/font'
import gsap from 'gsap'
import contextNavBar from '@/data/context/MenuBarContext'
import { useRouter } from 'next/router';

function FeedBack() {
  const[paginaDone,setPaginaDone] = useState(false);
  const router = useRouter();
  const h1Ref = useRef(null);
  const{menuOpen} = useContext(contextNavBar)

  function handlePaginaDone(){    
    setPaginaDone(true)
  }

  useLayoutEffect(()=>{
    if(!paginaDone) return;
    if(!h1Ref.current) return;

    const tl_feed = gsap.timeline();
    tl_feed.from(h1Ref.current,{x:-200,autoAlpha:0,ease:"back.out(1.7)",duration:1})
  },[paginaDone,menuOpen,router.pathname])

  return (
    <Pagina onAnimationComplete={handlePaginaDone}>
      <div className='flex flex-col gap-3 py-4 px-7 h-full' >
      <h1 ref={h1Ref} className={`${forum.className} text-5xl invisible`}>Customer <span className='bg-gradient-to-r from-purple-700 via-violet-600 to-white
      font-bold text-transparent bg-clip-text '>
        Feedbacks
      </span>
      </h1>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5'>
      <Testimonial  
        img={customers.image.cust1}
        statement="Feels like home! A top-notch experience every time."
        position='CEO of techDev'
        name='Kaloko Nguana'
     />
     <Testimonial 
      img={customers.image.cust2}
      statement="Outstanding quality and service! I'm beyond satisfied."
      position='Marketing Manager at BrandX'
      name='Siria Nathisu'
     />
     <Testimonial  
      img={customers.image.cust3}
      statement='Great experience! The comfort and style are unmatched.'
      position='Fashion Consultant'
      name='James Oduor'
     />
      </div>
      </div>
    </Pagina>
  )
}

export default FeedBack

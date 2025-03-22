"use client"
import { IconStarFilled } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import { forum } from '@/styles/font'
import gsap from 'gsap';

interface TestimonialProps{ 
img:any
statement:string
name:string
position:string
}

function Testimonial(props:TestimonialProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(()=>{
    if(!cardRef.current) return;

    gsap.set(cardRef.current,{
      scale:0,
      autoAlpha:0,
      borderColor: "transparent" 
    });
    gsap.timeline()
                  .to(cardRef.current,{
                    scale:1,
                    autoAlpha:1,
                    duration:2.5,
                    ease:"power1.out",
                    onComplete: () => {
                    cardRef.current?.classList.add("hoverable"); // Add a class to let Tailwind hover effects work
                    }
                  });
  },[]);

  return (
    <div ref={cardRef} className='opacity-0 scale-0 invisible flex flex-col justify-center items-center gap-2
    bg-zinc-900/80 backdrop-blur-md shadow-lg hover:bg-black/60 rounded-lg px-6 py-4 
     transition-all duration-500 ease-in-out'>
      <Image src={props.img} alt='Customer image'
       width={150} height={150} priority
       className='rounded-full border-2 border-yellow-500'
       />
      <p className='font-sans text-zinc-400'>{props.statement}</p>
      <span className='flex justify-center items-center'>
        {Array(5).fill(null).map((_,index) => {
          return <IconStarFilled key={index} size={20} color='yellow' />
        })
        }
      </span>
      <span className={`${forum.className} text-xl`}>{props.name}</span>
      <span className='font-sans text-sm text-zinc-400'>{props.position}</span>
    </div>
  )
}

export default Testimonial

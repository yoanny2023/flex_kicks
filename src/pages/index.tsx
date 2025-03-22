"use client"
import Pagina from "@/components/template/Pagina";
import Image from "next/image";
import home_sneaker from "@/assets/home/main_3.png";
import { forum } from "@/styles/font";
import Button from "@/components/template/Button";
import gsap from "gsap";
import {useContext, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import contextNavBar from "@/data/context/MenuBarContext";

export default function Home() {
  const imgRef = useRef(null);
  const router = useRouter();
  const [paginaDone, setPaginaDone] = useState(false); // Track when Pagina animation is done
  const{menuOpen} = useContext(contextNavBar)

  useLayoutEffect(()=>{
   if (!paginaDone) return; // Wait for Pagina to finish before running Home animations.
   if (!imgRef.current) return;
   const imgEl = imgRef.current;
    
    // Ensure elements are hidden before animation starts
    gsap.set(imgEl,{y:500,x:0,autoAlpha:0}) // autoAlpha hides + sets opacity to 0
    gsap.set(".gsap_h1",{x:-200,autoAlpha:0}) // reset position before animation starts;
    gsap.set([".gsap_p",".gsap_disc",".gsap_btn"],{y:400,x:0,autoAlpha:0}) 
    
    const home_tl = gsap.timeline();
    home_tl.fromTo(".gsap_h1",{x:-200,opacity:0},{x:0,autoAlpha:1,duration:1.2},"<0.5")
            .fromTo(".gsap_p",{y:250,opacity:0},{y:0,autoAlpha:1,duration:1,ease:"linear"})
            .fromTo(".gsap_disc",{y:350,opacity:0,rotate:0},{y:0,rotate:360,autoAlpha:1,duration:1,ease:"linear"},">-0.4")
            .fromTo(".gsap_btn",{y:400,opacity:0},{y:0,autoAlpha:1,duration:1,ease:"back(2.5)"},"<")
            .to(imgEl,{y:0,autoAlpha:1,duration:1.7,scale:0.2,ease:"power1.out"},"2")
            .to(imgEl,{x:-100,autoAlpha:1,duration:1.5,scale:0.7,ease:"back"})
            .to(imgEl,{x:0,autoAlpha:1,duration:1.2,scale:1,ease:"power1.out"})
  
            gsap.to(".gsap_disc", { 
              rotate: 360, 
              duration: 4, 
              ease: "none", 
              repeat: -1 
            });          

  },[router.pathname,paginaDone,menuOpen]); 

  return (
      <Pagina
       onAnimationComplete={() => setPaginaDone(true)}
       >
      
      <section className="flex flex-col sm:flex sm:flex-row gap-3 w-full h-full
       bg-zinc-900/30 border border-purple-500/30 backdrop-blur-2xl shadow-lg overflow-hidden">
        <div className="relative inline-flex flex-col sm:w-1/2 h-auto p-5">
          <h1 className={`${forum.className} gsap_h1 xsmall small sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
            font-black mb-3 opacity-0 invisible
            `}>
            Step Into <span className="text-purple-500">Comfort </span> <br />Walk with Confidence
          </h1>
          <p className="gsap_p text-justify font-sans text-sm text-zinc-400 max-w-96 opacity-0 invisible">
            At FlexKicks, every step is a statement. From timeless classics to
            the latest trends, find the perfect sneakers to match your style and
            confidence.
          </p>
          <Button url="products" fitcont className={`${forum.className} gsap_btn mt-5 opacity-0 invisible`} text="Shop Now" />   
          <div
            className="gsap_disc self-center md:absolute md:bottom-6 md:right-6 flex justify-center items-center
             w-36 h-36 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-5 border-4 border-dashed border-gray-400 rounded-full opacity-0 invisible
             "
          >
            <span className="absolute text-3xl font-bold text-yellow-400">40% off </span>
          </div>
        </div>
        <div className="sm:w-1/2 h-auto sm:h-[450px] flex justify-center items-center overflow-hiden">
         { <Image
            ref ={imgRef}
            src={home_sneaker}
            width={1664}
            height={2304}
            alt="Sneaker_model"
            priority
            className="sm:w-full md:w-full sm:h-full mt-3 object-contain opacity-0 invisible"
          />}
        </div>
      </section> 
    </Pagina> 
);
}





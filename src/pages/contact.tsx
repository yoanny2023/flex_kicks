"use-client";
import Input from "@/components/contact/Input";
import TextArea from "@/components/contact/TextArea";
import Button from "@/components/template/Button";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import contextNavBar from "@/data/context/MenuBarContext";
import { forum } from "@/styles/font";
import gsap from "gsap";
import React, { useContext, useEffect } from "react";
import { useRouter } from 'next/router';

function Contact() {
  const router = useRouter();
   const{menuOpen} = useContext(contextNavBar)

  useEffect(() => {
    gsap.set([".gsap_h1",".gsap_p"],{x:-400,autoAlpha:0});
    gsap.set([".gsap_input",".gsap_textArea",".gsap_btn"],{y:400,autoAlpha:0})
    
    gsap.timeline()
     .fromTo([".gsap_h1",".gsap_p"],{x:-400,autoAlpha:0},{x:0,autoAlpha:1,ease:"back",duration:1.5})
     .fromTo([".gsap_input",".gsap_textArea"], {y:400,opacity:0}, {y:0,autoAlpha:1,stagger:0.5,ease:"power1.out",duration:1},"<0.5")
     .fromTo([".gsap_btn"], {y:400,opacity:0}, {y:0,autoAlpha:1})
  }, [menuOpen,router.pathname]);

  function onSubmitHandle() {}

  return (
    <Pagina>
      <div className="flex flex-col gap-3 p-3 h-full overflow-hidden">
        <h1
          className={`${forum.className} gsap_h1 px-5 opacity-0 invisible 
        bg-gradient-to-r from-purple-700 via-violet-500 to-white text-transparent bg-clip-text
         text-4xl sm:text-7xl
      `}
        >
          Join forces with us
        </h1>
        <p className="gsap_p px-5 opacity-0 invisible text-sm font-sans text-zinc-400">
        Have questions or need help finding the perfect pair? Contact us—we’re here to assist you every step of the way!
        </p>
        <Flex center className="flex-1 ">
          <form
            className="bg-black/50 backdrop-blur-lg rounded-md py-3 px-6 w-full sm:w-10/12 md:w-3/4 lg:w-[40%]"
            onSubmit={onSubmitHandle}
          >
            <Flex col className="w-full">
              <Flex mainCenter className="w-full" >
                <Input
                  type="text"
                  placeHolder="First name"
                  className="opacity-0 invisible gsap_input w-full"
                />
                <Input
                  type="text"
                  placeHolder="Last name"
                  className="opacity-0 invisible gsap_input w-full"
                />
              </Flex>
              <Input
                type="email"
                placeHolder="Email address"
                className="opacity-0 invisible gsap_input"
              />
              <TextArea className="opacity-0 invisible gsap_textArea" />
              <Button text="Send now" url="" className="opacity-0 invisible gsap_btn w-full" />
            </Flex>
          </form>
        </Flex>
      </div>
    </Pagina>
  );
}

export default Contact;

"use-client";
import Product from "@/data/model/Produto";
import { IconBrandWindows, IconShoppingCartX } from "@tabler/icons-react";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import US from "@/utils/US";
import CartContext from "@/data/context/CartContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/router";

//gsap.registerPlugin(ScrollTrigger);

interface ProductCardProps {
  product: Product;
}

function ProductCard(props: ProductCardProps) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const[isMobile,setIsMobile] = useState(false);

  const { addItem } = useContext(CartContext);
  const { product } = props;

  useEffect(()=>{
    function handleDescLength(){
        setIsMobile(window.innerWidth < 640)
    }

    handleDescLength();
    window.addEventListener("resize",handleDescLength);

    return ()=> {
      window.removeEventListener("resize",handleDescLength);
    }
  })

  useEffect(() => {
    const cardEl = cardRef.current;
    gsap.set(
      [
        cardEl,
        imgRef.current,
        textRef.current,
        descRef.current,
        buttonRef.current,
      ],
      { autoAlpha: 0.6, scale: 0.6 }
    );

    gsap
      .timeline()
      .to(cardEl, { autoAlpha: 1, scale: 1, duration: 1 })
      .to(imgRef.current, { autoAlpha: 1, scale: 1, duration: 0.8 }, "-=0.8")
      .to(
        textRef.current,
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.6 },
        "-=0.6"
      )
      .to(
        descRef.current,
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.6 },
        "-=0.5"
      )
      .to(
        buttonRef.current,
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
  }, []);

  return (
    <div
      className="opacity-0 invisible flex flex-col gap-2 p-3 rounded-md overflow-hidden 
    bg-zinc-900/40 backdrop-blur-lg border border-zinc-700 shadow-md
    transition-all duration-300
    hover:shadow-lg hover:ring-2 hover:ring-purple-500 hover:ring-opacity-50 
    hover:border-transparent 
    "
      ref={cardRef}
    >
      <div ref={imgRef} className="opacity-0 invisible overflow-hidden">
        <Image
          src={product.image}
          width={300}
          height={100}
          alt="sneaker_image"
          priority
          className="rounded-md object-cover"
        />
      </div>
      <div
        ref={textRef}
        className="opacity-0 invisible flex flex-col sm:flex-row items-center justify-between"
      >
        <span className="font-black text-[12px] self-start sm:text-lg">{product.name}</span>
        <span className="text-purple-500 self-start text-sm sm:text-lg font-medium">
          {US.format(product.price)}
        </span>
      </div>
      <p
        ref={descRef}
        className="opacity-0 invisible flex-1 text-xs text-zinc-400"
      >
        {isMobile ? product.shortDescription : product.longDescription}
      </p>
      <button
        ref={buttonRef}
        className="opacity-0 invisible flex justify-center items-center gap-1 md:gap-2 text-xs w-full rounded-lg px-2 py-1 md:px-4 md:py-2
        bg-purple-600 hover:bg-purple-700 transition-all duration-500"
        onClick={() => addItem(product)}
      >
        {<IconShoppingCartX />}
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;

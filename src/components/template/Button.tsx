"use client";
import Link from "next/link";
import React from "react";
interface ButtomProps {
  url?: string;
  text: string;
  fitcont?:boolean
  onClick?: () => void;
  className?: string;
}

function Button(props: ButtomProps) {
  return (
    <Link href={`/${props.url}`} className={props.fitcont? "w-fit" : ""}  >
      <button
        className={`text-lg px-4 py-2 rounded-md bg-purple-600 text-white 
      hover:bg-purple-700 hover:text-zinc-200 transition-all duration-500
       ${props.className ?? ""}
    `}>
      {props.text}
      </button>
    </Link>
  );
}

export default Button;

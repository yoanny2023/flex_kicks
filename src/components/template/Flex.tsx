"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface FlexProps{
col?:boolean
center?:boolean
mainCenter?:boolean
crossCenter?:boolean
gap?:number
className?:string
children:any
}

function Flex(props:FlexProps) {
  return (
    <div className={`flex
      ${props.col ? 'flex-col' : ''} 
      ${props.gap != null ? `gap-${props.gap}` : 'gap-3'}
      ${props.center ? "justify-center items-center" : ""} 
      ${props.mainCenter ? "justify-center" : ""} 
      ${props.crossCenter ? "items-center" : ""} 
      ${props.className ?? ""}
    `}>
      {props.children}
    </div>
  )
}

export default Flex

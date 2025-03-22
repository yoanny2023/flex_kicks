"use client"
import React from 'react'

interface ContentProps{
  children:any
}

function Content(props:ContentProps) {
  return (
    <div className="flex-grow h-full bg-zinc-800">
      {props.children}
    </div>
  )
}

export default Content

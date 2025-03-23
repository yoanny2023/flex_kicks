"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { IconShoe } from '@tabler/icons-react'
import React from 'react'
import Flex from '../template/Flex'
import Link from 'next/link'

interface LogoProps{
  ref?:any
}

function Logo(props:LogoProps) {
  return ( 
    <Link href="/" ref={props.ref}>
    <Flex center gap={1} className=''>      
      {<IconShoe color='white' stroke={1} size={28} />} 
      <span className='bg-gradient-to-r from-purple-700 via-violet-500  to-white
        font-bold text-transparent bg-clip-text'
        >
         FLEXKICKS
      </span>
    </Flex>
    </Link>
  )
}

export default Logo

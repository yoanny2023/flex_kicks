"use client"
import { IconShoppingCart } from '@tabler/icons-react'
import React from 'react'

function EmptyCart() {
  return (
    <div className='flex flex-col items-center opacity-60'>
    <IconShoppingCart size={60} stroke={1}/>
    <span className='text-lg font-sans'>No Product added! Cart is Empty.</span>
  </div>
  )
}

export default EmptyCart

"use client"
import CartContext from '@/data/context/CartContext'
import CartItem from '@/data/model/CartItem'
import US from '@/utils/US'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import React, { useContext } from 'react'

interface CartItemCardProps{
  item:CartItem
}
function CartItemCard(props:CartItemCardProps) {
  const{addItem,removeItem} = useContext(CartContext)
  const{item} = props;

  return (
    <div className='bg-purple-600/70 backdrop-blur-lg shadow-lg rounded-md text-sm sm:text-lg md:text-xl px-4 py-2
     flex flex-col gap-2 sm:gap-3'>
      <span>{item.product.name}</span>
      <div className='flex items-center justify-center gap-2'>
        <button className='flex justify-center items-center h-5 w-5
        bg-gray-600 hover:bg-gray-700 transition-all duration-300 rounded-sm
        '
        onClick={() => removeItem(item.product)}
        >
          <IconMinus />
        </button>
        <span>{item.quantity}</span>
        <button className='flex justify-center items-center h-5 w-5
        bg-purple-600 hover:bg-purple-900 transition-all duration-300 rounded-sm
        '
        
        onClick={() => addItem(item.product)}
        >
          <IconPlus />
        </button>
      </div>
      <div className='bg-zinc-800/50 font-medium px-2 text-center rounded-sm'>
        {US.format(item.product.price * item.quantity)}
      </div>
    </div>
  )
}

export default CartItemCard

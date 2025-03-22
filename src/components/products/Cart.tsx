"use client"
import React, { useContext } from 'react'
import EmptyCart from './EmptyCart'
import US from '@/utils/US'
import CartContext from '@/data/context/CartContext'
import CartItemCard from './CartItemCard'
import { IconX } from '@tabler/icons-react'

function Cart() {
  const{itens,totalValue,cleanCart} = useContext(CartContext)
  return (
    <div className='flex flex-col gap-3 bg-black m-4 pb-3 text-2xl rounded-md'>
      <div className='bg-zinc-800/40 flex items-center justify-between
      px-4 py-2'
      >
       <span className='font-sans text-sm sm:text-lg md:text-xl'>Shopping Basket</span> 
       <span className='bg-purple-600 text-sm sm:text-lg md:text-xl px-2 py-1 sm:px-4 sm:py-2 rounded-md'>{US.format(totalValue)}</span>
      </div>
      <div className='flex justify-center flex-wrap gap-3'>
      {itens.length ===  0 
        ? <EmptyCart /> 
        :(
            itens.map((item)=>{
              return <CartItemCard key={item.product.id} item={item} />
            })
          
        )
      }
      </div>
      { itens.length > 0 && ( 
          <button className={`flex gap-2 items-center justify-center px-2 py-1 sm:px-4 sm:py-2 text-sm mx-auto rounded-md w-28
           bg-zinc-700 transition-all duration-500 ease-in-out hover:bg-zinc-600`}
          onClick={cleanCart}>
            <IconX stroke={2} size={20} className='w-6 h-6 rounded-full bg-red-600
            flex justify-center items-center' 
            />
            Delete
          </button>)
        }
    </div>
  )
}

export default Cart

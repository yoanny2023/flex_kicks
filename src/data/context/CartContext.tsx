import React, { createContext, useEffect, useState } from 'react'
import CartItem from '../model/CartItem'
import Product from '../model/Produto'

interface CartContextProps{
  itens: CartItem[]
  totalValue: number
  addItem: (item:Product) => void
  removeItem: (item:Product) => void
  cleanCart: () => void
}

const CartContext = createContext<CartContextProps>({} as any)

export function CartContextProvider(props:any) {
  const[itens,setItens] = useState<CartItem[]>([]);

  useEffect(()=>{
    console.log("carinho:",itens);
  },[itens])

  function calculateTotalValue(){
   return itens.reduce((total:number,item:CartItem) => {
      return total + (item.quantity * item.product.price)
   },0)
  }

  function addItem(product:Product){ 
    const item = itens.find( card => card.product.id === product.id) ?? {product, quantity:0}
    const newItem = {...item, quantity: item.quantity +1} // formar um new card object

    const otherItem = itens.filter(card => card.product.id !== product.id);
    setItens([...otherItem,newItem].sort(ordernarItem)) // update cardItemList 
  }

  function removeItem(product:Product){
    const newItens = itens.map((item)=>{
      return item.product.id === product.id ?
             {...item,quantity: item.quantity -1}
             : item
    }).filter( item => item.quantity > 0)
    setItens(newItens.sort(ordernarItem))
  }

  function cleanCart(){
    const confirmDeletion = window.confirm("Are you sure you want to delete all Products");
    if(confirmDeletion){
     setItens([]); 
    }
    
  }

  function ordernarItem(a:CartItem,b:CartItem){
    return a.product.name > b.product.name ? 1 : -1
   }

 const ctx = {
  itens,
  get totalValue(){
    return calculateTotalValue()
  },
  addItem,removeItem,cleanCart
 }

  return (
    <CartContext.Provider value={ctx}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext

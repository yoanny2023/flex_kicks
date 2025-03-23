"use-client"
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { createContext, useState } from 'react'
import Product from '../model/Produto'
import products from '../constant/products'

interface ProductContextProps{
  newProductList:Product[]
  categoryValue:string
  onFilterdValue: (value:string) => void
 filteredProductList:Product[]
}

const ProductContext = createContext<ProductContextProps>({} as any)

export function ProductProvider(props:any) {
  const[newProductList,setNewProductList] = useState<Product[]>(products)
  const[categoryValue,setCategoryValue] = useState("all");

  const filteredProductList = newProductList.filter((product)=>{
    if(categoryValue === "men"){
      return product.category === "men"
    }else if(categoryValue === "women"){
      return product.category === "women"
    }else if(categoryValue === "all"){
      return product;
    }
  });

  function onFilterdValue(categoryValue:string){
    setCategoryValue(categoryValue);
  }

  const ctx = {newProductList,categoryValue,onFilterdValue,
              filteredProductList}
  return (
    <ProductContext.Provider value={ctx}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContext;

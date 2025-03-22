"use client"
import ProductContext from '@/data/context/ProductContext'
import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import { forum } from '@/styles/font';

interface ProductSectionProps{
category?:string
title:string
}

function ProductSection(props:ProductSectionProps) {
  const{filteredProductList} = useContext(ProductContext);

  function renderProducts(){
    return filteredProductList.map( product => {
      return <ProductCard key={product.id} product={product} />
      });
  }
  
  return (
     <section className='flex flex-col items-center gap-3 px-4 py-6 m-4 rounded-md bg-black' id='men'>
        <h2 className={`text-xl font-bold w-full px-4 py-2 mb-4 rounded-md text-center bg-zinc-800/40 backdrop-blur-lg shadow-lg bg-opacity-90 ${forum.className}`}>
        {props.title}
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
          {renderProducts()}
        </div>
      </section>
  )
}

export default ProductSection

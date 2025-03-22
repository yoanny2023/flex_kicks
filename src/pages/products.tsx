"use client"
import React from 'react'
import Pagina from '@/components/template/Pagina';
import ProductCatalogue from '@/components/products/ProductCatalogue';
import Cart from '@/components/products/Cart';

function Products() {
  return (
    <Pagina>
      <Cart />
      <ProductCatalogue />
    </Pagina>
  )
}

export default Products

"use client"
import { useContext } from "react"
import ProductSection from "./ProductSection"
import ProductContext from "@/data/context/ProductContext"


function ProductCatalogue() {
  const{categoryValue} = useContext(ProductContext)
  if(categoryValue === "men" ){
    return(<>
    <ProductSection title="Men's Sneakers"/>
    </>)
  }else if(categoryValue === "women"){
    return(<>
      <ProductSection title="Women's Sneakers"/>
      </>)
  }else{
    return (
      <>
        <ProductSection title="All Sneakers"/>
      </>
      )
  }
}

export default ProductCatalogue

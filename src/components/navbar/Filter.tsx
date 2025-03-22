"use client"
import ProductContext from "@/data/context/ProductContext"
import { useContext} from "react"

interface FilterProps{
  className?:string
}
export default function Filter(props:FilterProps){
  const{onFilterdValue} = useContext(ProductContext);

  function filterdValueChanged(e:any){
      onFilterdValue(e.target.value)
  }

  return(
    <select name="category" className={`bg-zinc-800 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500 
      ${props.className ?? ""}
      `}
    onChange={filterdValueChanged}
    >
    <option value="all">All</option>
    <option value="men">Men</option>
    <option value="women">Women</option>
    </select>
  )
}
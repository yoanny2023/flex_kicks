import { StaticImageData } from "next/image"

interface Product{
  id:number
  name:string
  longDescription:string
  shortDescription:string
  price:number
  image:string | StaticImageData
  category:string
}
export default Product;
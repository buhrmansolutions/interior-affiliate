import { createContext } from "react"
import { Product } from "../components/product"

type ContextType = {
  products: Array<Product>
  setProducts: (a: Array<Product>) => void
}

export const ShopContext = createContext<ContextType>({
  setProducts: () => {},
  products: [] as Array<Product>,
})

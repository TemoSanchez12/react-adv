import { ReactElement, createContext } from 'react'
import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { ProductButtons, ProductImage, ProductTitle } from '../components'
import { Product, ProductContextProps } from '../interfaces/interfaces'

interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)

const ProductCard = ({ children, product, className }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <div className={`${styles.productCard} ${className || ''}`}>
      <ProductContext.Provider value={{ product, counter, increaseBy }}>{children}</ProductContext.Provider>
    </div>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons

export default ProductCard

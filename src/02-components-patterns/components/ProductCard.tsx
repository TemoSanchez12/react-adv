import { ReactElement, createContext } from 'react'
import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { ProductButtons, ProductImage, ProductTitle } from '../components'
import { Product, ProductContextProps } from '../interfaces/interfaces'

interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[]
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)

const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <div className={styles.productCard}>
      <ProductContext.Provider value={{ product, counter, increaseBy }}>{children}</ProductContext.Provider>
    </div>
  )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons

export default ProductCard

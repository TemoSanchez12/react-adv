import { ReactElement, createContext, CSSProperties } from 'react'
import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { ProductButtons, ProductImage, ProductTitle } from '../components'
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces'

interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)

const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value,
  })

  return (
    <div className={`${styles.productCard} ${className || ''}`} style={style}>
      <ProductContext.Provider value={{ product, counter, increaseBy }}>{children}</ProductContext.Provider>
    </div>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons

export default ProductCard

import { createContext, CSSProperties } from 'react'
import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { ProductButtons, ProductImage, ProductTitle } from '../components'
import { onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces'

export interface InitialValues {
  count?: number
  maxCount?: number
}

interface ProductCardProps {
  product: Product
  // children?: ReactElement | ReactElement[]
  children?: (args: ProductCardHandlers) => JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)

const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  })

  return (
    <div className={`${styles.productCard} ${className || ''}`} style={style}>
      <ProductContext.Provider value={{ product, counter, increaseBy, maxCount }}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            increaseBy,
            reset,
            product,
            maxCount,
          })}
      </ProductContext.Provider>
    </div>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons

export default ProductCard

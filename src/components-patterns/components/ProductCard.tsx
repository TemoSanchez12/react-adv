// from react
import { createContext } from 'react'

// custom hooks
import useProduct from '../hooks/useProduct'

// styles
import styles from '../styles/styles.module.css'

// interfaces
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
} from '../interfaces/interfaces'
import { ReactElement } from 'react'

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: React.CSSProperties
  onChange: (args: OnChangeArgs) => void
  value?: number
}

// product context
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

// Principal component
export const ProductCard = ({
  onChange,
  value,
  product,
  className,
  style,
  children,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value })

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product: product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}

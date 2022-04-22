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
  InitialValues,
  ProductCartHandlers,
} from '../interfaces/interfaces'

export interface Props {
  product: Product
  // children?: ReactElement | ReactElement[]
  children: (args: ProductCartHandlers) => JSX.Element
  className?: string
  style?: React.CSSProperties
  value?: number
  initialValues?: InitialValues
}

// product context
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

// Principal component
export const ProductCard = ({
  value,
  product,
  className,
  style,
  children,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      product,
      value,
      initialValues,
    })

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          reset,
          increaseBy,
        })}
      </div>
    </Provider>
  )
}

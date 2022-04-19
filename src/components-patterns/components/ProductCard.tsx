// from react
import { createContext } from 'react'

// custom hooks
import useProduct from '../hooks/useProduct'

// styles
import styles from '../styles/styles.module.css'

// interfaces
import { ProductContextProps, Product } from '../interfaces/interfaces'
import { ReactElement } from 'react'

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: React.CSSProperties
}

// product context
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

// Principal component
export const ProductCard = (props: Props) => {
  const [counter, increaseBy] = useProduct()

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product: props.product,
      }}
    >
      <div
        className={`${styles.productCard} ${props.className}`}
        style={props.style}
      >
        {props.children}
      </div>
    </Provider>
  )
}

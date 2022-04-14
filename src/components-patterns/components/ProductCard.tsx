// from react
import { createContext } from 'react'

// interfaces
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'

// custom hooks
import useProduct from '../hooks/useProduct'

// styles
import styles from '../styles/styles.module.css'

// product context
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

// Principal component
export const ProductCard = (props: ProductCardProps) => {
  const [counter, increaseBy] = useProduct()

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product: props.product,
      }}
    >
      <div className={styles.productCard}>{props.children}</div>
    </Provider>
  )
}

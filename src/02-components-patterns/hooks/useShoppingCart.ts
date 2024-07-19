import { useState } from 'react'
import { onChangeArgs } from '../interfaces/interfaces'
import { Product } from '../interfaces/interfaces'

interface ProductInCart extends Product {
  count: number
}

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

  const onProductCountChange = ({ counter, product }: onChangeArgs) => {
    setShoppingCart(prevShoppingCart => {
      // if (counter == 0) {
      //   const newShoppingCart = { ...prevShoppingCart }
      //   delete newShoppingCart[product.id]
      //   return newShoppingCart
      // }

      // return {
      //   ...prevShoppingCart,
      //   [product.id]: { ...product, count: counter },
      // }

      const productInCart: ProductInCart = prevShoppingCart[product.id] || { ...product, count: 0 }

      if (Math.max(productInCart.count + counter, 0) > 0) {
        productInCart.count += counter

        return {
          ...prevShoppingCart,
          [product.id]: productInCart,
        }
      } else {
        const newShoppingCart = { ...prevShoppingCart }
        delete newShoppingCart[product.id]
        return newShoppingCart
      }
    })
  }

  return { shoppingCart, onProductCountChange }
}

export default useShoppingCart

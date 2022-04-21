import { useState } from 'react'
import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components'

import { OnChangeArgs, Product } from '../interfaces/interfaces'

import '../styles/custom_styles.css'

const products: Product[] = [
  {
    id: '1',
    title: 'Coffee Mug',
    img: 'coffee-mug.png',
  },
  {
    id: '2',
    title: 'Coffee Meme',
    img: 'coffee-mug-2.jpg',
  },
]

interface ProductInCart extends Product {
  count: number
}

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({ product, counter }: OnChangeArgs) => {
    setShoppingCart((prev) => {
      if (counter === 0) {
        const { [product.id]: toDelete, ...rest } = prev
        return rest
      }

      return {
        ...prev,
        [product.id]: { ...product, count: counter },
      }
    })
  }

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: '20px',
          columnGap: '20px',
        }}
      >
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            className='bg-dark text-white'
            onChange={onProductCountChange}
            value={shoppingCart[prod.id]?.count}
          >
            <ProductImage className='custom-image' />
            <ProductTitle />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, prod]) => (
          <ProductCard
            key={key}
            product={prod}
            onChange={onProductCountChange}
            className='bg-dark text-white'
            style={{
              width: '120px',
            }}
            value={prod.count}
          >
            <ProductImage className='custom-image' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}

export default ShoppingPage

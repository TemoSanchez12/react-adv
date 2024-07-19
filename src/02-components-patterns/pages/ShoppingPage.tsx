import ProductCard from '../components/ProductCard'
import { ProductButtons, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'

import '../styles/custom-styles.css'
import useShoppingCart from '../hooks/useShoppingCart'

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <section>
      <h1>Shopping Store</h1>

      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark'
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-light' />
            <ProductButtons className='text-light custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-car'>
        {Object.values(shoppingCart).map(product => (
          <ProductCard
            key={product.id}
            product={product}
            style={{ width: '100px' }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>
    </section>
  )
}
export default ShoppingPage

import { ProductButtons, ProductImage, ProductTitle } from '../components'
import ProductCard from '../components/ProductCard'

import '../styles/custom-styles.css'

const products = [
  {
    id: '1',
    title: 'Coffee Mug - Dev',
    image: './coffee-mug.png',
  },
  {
    id: '2',
    title: 'Coffee Mug - Process',
  },
  {
    id: '3',
    title: 'Coffee Mug - Code',
    image: './coffee-mug.png',
  },
]

const ShoppingPage = () => {
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
          <ProductCard key={product.id} product={product} className='bg-dark'>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>
    </section>
  )
}
export default ShoppingPage

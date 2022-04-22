import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components'

import { Product } from '../interfaces/interfaces'

import '../styles/custom_styles.css'

const product: Product = {
  id: '1',
  title: 'Coffee Mug',
  img: 'coffee-mug.png',
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <ProductCard
        product={product}
        className='bg-dark text-white'
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {(args) => (
          <>
            <ProductImage className='custom-image' />
            <ProductTitle />
            <ProductButtons className='custom-buttons' />
            <button onClick={args.reset}>Reset</button>

            <button onClick={() => args.increaseBy(-2)}> -2</button>
            {args.isMaxCountReached && (
              <button onClick={() => args.increaseBy(2)}> 2</button>
            )}

            <span>{args.count}</span>
          </>
        )}
      </ProductCard>
    </div>
  )
}

export default ShoppingPage

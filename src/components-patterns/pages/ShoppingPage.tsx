import {} from '../components/ProductCard'
import '../styles/custom_styles.css'

import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components'

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: 'coffee-mug.png',
}

const ShoppingPage = () => {
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
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='custom-image' />
          <ProductTitle title='Taza de cafe' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#444',
            color: 'white',
          }}
        >
          <ProductImage
            style={{
              padding: '10px',
              width: 'calc(100% - 20px)',
              borderRadius: '20px',
            }}
          />
          <ProductTitle />
          <ProductButtons
            style={{
              backgroundColor: '#666',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '8px',
            }}
          />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage

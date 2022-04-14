import {} from '../components/ProductCard'

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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title='hola mundo' />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage

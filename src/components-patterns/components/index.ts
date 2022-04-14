import { ProductCardSign } from '../interfaces/interfaces'
import { ProductButtons } from './ProductButtons'
import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'

export { ProductTitle } from './ProductTitle'
export { ProductImage } from './ProductImage'
export { ProductButtons } from './ProductButtons'

const ProductCard: ProductCardSign = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Buttons: ProductButtons,
  Image: ProductImage,
})

export default ProductCard

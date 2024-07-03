import noImage from '../../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'

interface ProductImageProps {
  image?: string
  title?: string
  className?: string
  style?: CSSProperties
}

export const ProductImage = ({ className, image, style, title }: ProductImageProps) => {
  const { product } = useContext(ProductContext)

  return (
    <img
      src={image || product.image || noImage}
      alt={title || product.title}
      style={style}
      className={`${styles.productImg} ${className || ''}`}
    />
  )
}

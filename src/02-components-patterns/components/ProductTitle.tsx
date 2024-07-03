import styles from '../styles/styles.module.css'
import { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'

interface ProductTiltleProps {
  title?: string
  className?: string
  style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: ProductTiltleProps) => {
  const { product } = useContext(ProductContext)
  return (
    <span className={`${styles.productDescription} ${className || ''}`} style={style}>
      {title || product.title}
    </span>
  )
}

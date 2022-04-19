import { useContext } from 'react'
import { ProductContext } from './ProductCard'

import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
  img?: string
  className?: string
  style?: React.CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext)

  const imgToShow: string = img ? img : product.img ? product.img : noImage

  return (
    <img
      src={imgToShow}
      alt='Product'
      style={style}
      className={`${styles.productImg} ${className}`}
    />
  )
}

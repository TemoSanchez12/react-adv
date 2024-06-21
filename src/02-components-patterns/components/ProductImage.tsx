import noImage from '../../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { useContext } from 'react'
import { ProductContext } from './ProductCard'

export const ProductImage = ({ image = '', title = '' }) => {
  const { product } = useContext(ProductContext)

  return (
    <img src={image || product.image || noImage} alt={title || product.title} className={styles.productImg} />
  )
}

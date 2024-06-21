import styles from '../styles/styles.module.css'
import { useContext } from 'react'
import { ProductContext } from './ProductCard'

export const ProductTitle = ({ title = '' }) => {
  const { product } = useContext(ProductContext)
  return <span className={styles.productDescription}>{title || product.title}</span>
}

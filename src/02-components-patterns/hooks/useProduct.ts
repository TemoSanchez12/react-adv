import { useEffect, useRef, useState } from 'react'
import { onChangeArgs } from '../interfaces/interfaces'
import { Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
}

const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(0)

  const isControlled = useRef(!!onChange)

  const increaseBy = (value: number): void => {
    if (isControlled.current) {
      return onChange!({ counter: value, product })
    }

    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
    onChange && onChange({ product, counter: newValue })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return { counter, increaseBy }
}

export default useProduct

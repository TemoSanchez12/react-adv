import { useEffect, useRef, useState } from 'react'
import { onChangeArgs } from '../interfaces/interfaces'
import { Product } from '../interfaces/interfaces'
import { InitialValues } from '../components/ProductCard'

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || 0)
  const isMounted = useRef(false)
  const isControlled = useRef(!!onChange)

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  const increaseBy = (value: number): void => {
    if (isControlled.current) {
      return onChange!({ counter: value, product })
    }

    const newValue =
      initialValues?.maxCount && counter + value > initialValues.maxCount
        ? initialValues.maxCount
        : Math.max(counter + value, 0)

    setCounter(newValue)
    onChange && onChange({ product, counter: newValue })
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    increaseBy,
    reset,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount == counter,
  }
}

export default useProduct

import { useEffect, useState, useRef } from 'react'
import { InitialValues, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  value?: number
  initialValues?: InitialValues
}

const useProduct = ({ value = 0, initialValues }: useProductArgs) => {
  const isMounted = useRef<boolean>(false)
  const [counter, setCounter] = useState<number>(initialValues?.count || value)

  const increaseBy = (number: number) => {
    const newValue: number = Math.max(counter + number, 0)
    setCounter(
      initialValues?.maxCount
        ? Math.min(initialValues.maxCount, newValue)
        : newValue
    )
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (isMounted.current) {
      setCounter(value)
    }
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues?.maxCount === counter,
    reset,
    increaseBy,
  }
}

export default useProduct

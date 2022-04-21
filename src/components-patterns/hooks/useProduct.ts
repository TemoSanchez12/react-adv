import { useEffect, useState } from 'react'
import { OnChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  onChange: (args: OnChangeArgs) => void
  value?: number
}

const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value)

  const increaseBy = (number: number) => {
    const newValue: number = Math.max(counter + number, 0)

    setCounter(newValue)
    onChange({ counter: newValue, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return { counter, increaseBy }
}

export default useProduct

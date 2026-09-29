import React, {  useState } from 'react'

const functionCounter = new Set()

function CallBackEx() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const increment2 = () => {
    setCount2(count2 + 1)
  }

  // const increment = useCallback(() => {
  // setCount(count + 1)
  // }, [count])

  // const decrement = useCallback(() => {
  // setCount(count - 1)
  // }, [count])

  // const increment2 = useCallback(() => {
  // setCount2(count2 + 1)
  // }, [count2])

  // const decrement = useCallback(() => {
  // setCount(count - 1)
  // }, [count])

  // const increment2 = useCallback(() => {
  // setCount2(count2 + 1)
  // }, [count2])

    functionCounter.add(increment)
  functionCounter.add(decrement)
  functionCounter.add(increment)

console.log(functionCounter)
  return (
    <div>
      First count: {count}
      <br />
      second count: {count2}
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={increment2}>increment2</button>
    </div>
  )
}

export default CallBackEx

import React, {useState} from 'react'

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>counter</h1>
        <p>count:{count}</p>
        <button onClick={()=> setCount(count + 1)}>increment</button>
        <button onClick={()=> setCount(count - 1)}>decrement</button>
        <button onClick={()=> setCount(0)}>reset</button>
      </div>
  )
}

export default UseStateHook

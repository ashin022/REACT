import react, { usestate } from "react"

const UseEffectCount = () => {
    const [count, setCount] = usestate(0)

    useEffect(() => {
        console.log("count")
    }, [count])

    return (
      <div> Count: {count} 
     <button onClick={() => setCount(count + 1)}>Add</button>  
      </div>  
    )
}

export default UseEffectCount 
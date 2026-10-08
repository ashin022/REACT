import React from 'react'
import { increment } from './CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

const CounterRtk = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            count: {count}
            <button onClick={() => dispatch(increment())}>Add</button>
        </div>
    )
}

export default CounterRtk
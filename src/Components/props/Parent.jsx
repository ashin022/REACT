import React from 'react'
import Child from './Child'

const Parent = () => {

        const student ={
            name:"viki",
            age:20,
            email:"viki@gmail.com"
        
    }
    return (
        <div>
            <Child student = {student}/>
            </div>
    )
    }


export default Parent
import React, { useState } from 'react'


const Form = () => {
    const [name,setName] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name);

    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label1 htmlform="">name:</label1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        
        <button>submit</button>
      </form>
    </div>
  )
}

export default Form

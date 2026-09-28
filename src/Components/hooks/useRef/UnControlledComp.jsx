import React, {useRef} from 'react'

const UnControlledComp = () => {
    const nameRef = useRef()

    const handleSubmit =(e)=>{
        e.preventDefault()
        alert(nameRef.current.value)
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' ref={nameRef}/>
        <button>submit</button>
      </form>
    </div>
    
  )
}

export default UnControlledComp

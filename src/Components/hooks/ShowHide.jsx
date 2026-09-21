import React, { useState } from 'react'

const ShowHide = () => {
    const [show,setShow]=useState(false)
  return (
    <div>
        <button onClick={()=>setShow(!show)}>
            {show ? "Hide":"show"}
        </button>
        {show && <h2>Hello Students</h2>}
    </div>
  )
}

export default ShowHide
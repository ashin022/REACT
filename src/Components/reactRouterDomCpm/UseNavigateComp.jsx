import React from 'react'
import { useNavigate } from 'react-router-dom';
const UseNavigateComp = () => {

  const navigate = useNavigate()

  const gotohome = () => {
    navigate('/home')
  }
  return (
    <div>
      <button onClick={gotohome}>Go to Home</button>
    </div>
  )
}

export default UseNavigateComp

import React from 'react'
import { useParams } from 'react-router-dom';

const UseParamComp = () => {
  const params = useParams();
  return (
    <div>
      UseParamComp
          product id :{params.id}
    </div>
  )
}

export default UseParamComp

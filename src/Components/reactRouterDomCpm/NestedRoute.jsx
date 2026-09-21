import React from 'react'
import { Outlet } from 'react-router-dom';

const NestedRoute = () => {
  return (
    <div>
        NestedRoute
      <Outlet />

    </div>
  )
}

export default NestedRoute

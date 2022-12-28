import React from 'react'
import { Outlet } from 'react-router'

function SharedLayout() {
  return (
      <>
    <div>SharedLayout</div>
    <Outlet/>
    </>
  )
}

export default SharedLayout
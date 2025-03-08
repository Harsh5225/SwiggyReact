import React from 'react'
import ResHeader from './ResHeader'
import { Outlet } from 'react-router'
const SecondaryHome = () => {
  return (
    <>
    <ResHeader></ResHeader>
    <Outlet></Outlet>
    </>
  )
}

export default SecondaryHome
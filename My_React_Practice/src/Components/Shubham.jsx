import React from 'react'
import { Outlet } from 'react-router-dom'

const Shubham = () => {
  const logout = () => {
    localStorage.clear();
    window.location.clear();
  }
  return (
    <>
    <div>Shubham</div>
    <button onClick={logout}>Log Out</button>
    </>
  )
}

export default Shubham
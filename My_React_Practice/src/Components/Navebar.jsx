import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <>
        <Link to="/">Home</Link><br></br>
        <Link to="/signup">Sign up</Link><br></br>
        <Link to="/shyam">Shyam</Link>
    </>
  )
}

export default Navebar
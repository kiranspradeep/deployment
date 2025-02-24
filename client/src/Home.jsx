import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
   <>
    <h2>Home</h2>
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Signup</Link>
   </>
  )
}

export default Home
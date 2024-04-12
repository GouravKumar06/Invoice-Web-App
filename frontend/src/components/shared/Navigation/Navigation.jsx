import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
  return (
    <nav className='container navbar'>
      <Link style={{
          textDecoration: 'none',
          color: 'inherit',
          fontWeight: 'bold',
          fontSize: '22px',
          display: 'flex',
          alignItems: 'center'
        }} to='/'
      >
        <img src="/images/logo.png" alt="logo"/>
        <span style={{marginLeft: '10px'}}>Codershouse</span>
      </Link>
    </nav>
  )
}

export default Navigation
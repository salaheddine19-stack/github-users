import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <>
      <nav className='nav-section'>
        <Link
          to='/'
          className={pathname === '/' ? 'nav-btn is-active' : 'nav-btn'}
        >
          Home
        </Link>
        <Link
          to='/favorite'
          className={pathname === '/favorite' ? 'nav-btn is-active' : 'nav-btn'}
        >
          Favorite
        </Link>
      </nav>
    </>
  )
}

export default Navbar

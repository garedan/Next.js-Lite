import React from 'react'
import { Navbar } from '@components/navbar'

const Layout = ({children}) => {
  return (
    <div className='container'>
        <Navbar />
        {children}
        <footer>Este es el footer</footer>
    </div>
  )
}

export default Layout
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-30 opacity-95'>
      <div className='flex justify-center p-6'>
        <Link to='/' className='text-white no-underline'>
        <h1 className='text-3xl font-bold text-[#FBE9D0] tracking-tight'>Background Remover</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Nav 
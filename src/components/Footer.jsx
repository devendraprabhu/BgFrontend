import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8 border-t border-gray-800 z-10 relative'>
        <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0 text-center md:text-left'>
                <h2 className='text-xl font-bold text-[#FBE9D0]'>Background Remover</h2>
                <p className='text-gray-400 text-sm mt-1'>AI-powered background removal tool.</p>
            </div>
            <div className='flex gap-6 text-sm'>
                <a href="/privacy" className='text-gray-400 hover:text-[#FBE9D0] transition-colors'>Privacy</a>
                <a href="/terms" className='text-gray-400 hover:text-[#FBE9D0] transition-colors'>Terms</a>
                <a href="#" className='text-gray-400 hover:text-[#FBE9D0] transition-colors'>Contact</a>
            </div>
        </div>
        <div className='text-center text-gray-600 text-xs mt-8'>
            &copy; {new Date().getFullYear()} Background Remover. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer
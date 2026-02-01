import React from 'react'
import { Link } from 'react-router-dom';

const Bodytext = () => {
  return (
    <div className='pt-10 pb-20 relative min-h-[600px] overflow-hidden'>
        <main>
            <section>
        <div className='max-w-6xl mx-auto px-4 flex flex-col justify-center items-center'>
            <h2 className='text-center font-extrabold mt-10 mb-6 text-6xl md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-tight pb-2'>Remove Background from Image Online for Free</h2>
            <h3 className='text-center font-medium text-xl md:text-2xl text-gray-500 mt-4'>Easily remove backgrounds from images for free</h3>
            <Link to='/upload'>
            <button className='bg-black p-3 font-bold border-r-4 text-2xl text-white mt-2
            rounded-2xl  hover:bg-white hover:text-black'>Start Now</button>
            </Link>
        </div>
        </section>
        </main>
        
    </div>
  )
}
export default Bodytext
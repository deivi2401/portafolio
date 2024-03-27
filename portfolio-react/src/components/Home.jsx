import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {HiArrowNarrowRight} from 'react-icons/hi'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
     {/*Todo: Implementar las burbujas flotantes de sociales*/}
      ////<div className='bubble'/>
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600'>Hello</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Deiviiii</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Lorem ipsum</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, non id. Officia similique eius, deleniti, cupiditate aperiam autem doloribus nesciunt deserunt tenetur beatae inventore nisi! Ratione fugit ullam laudantium veritatis?</p>
    <div>
      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
        View Work 
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3'/>
        </span>
        </button>
    </div>
    </div>
    </div>
  )
}

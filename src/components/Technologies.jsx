// eslint-disable-next-line no-unused-vars
import React from 'react'
import { RiReactjsLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl text-neutral-300'>TECH<span className='text-neutral-500'>NOLOGIES</span></h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <div className='rounded-full border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </div>
          <div className='rounded-full border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </div>
          <div className='rounded-full border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </div>
          <div className='rounded-full border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </div>
          <div className='rounded-full border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </div>
          <div className='rounded-full border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </div>
        </div>
    </div>
  )
}

export default Technologies
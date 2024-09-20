import React from 'react'
import Button from './Button'

export default function Introduction() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6l lg:text-7xl'>swole<span className='text-blue-400'>normous</span></h1>
        <p className='text-sm md:text-base font-light'>I hereby acknowledge that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local monstrosity, afflicted with sever body dismorphia and unable to fit doors.</p>
        <Button func={()=>{window.location.href="#generate"}} text='Accept & Begin'/>
    </div>
  )
}

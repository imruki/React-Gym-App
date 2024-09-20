import React from 'react'
import Button from './Button'

export default function Introduction() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
        <p>IT'S TIME TO GO</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6l lg:text-7xl'><span className='text-blue-400'>beast</span>mode</h1>
        <p className='text-sm md:text-base font-light'>Achieve your fitness goals with <span className='text-blue-400 font-medium'>personalized workouts</span> tailored to your needs and preferences. Whether you're aiming to build muscle, improve endurance, or stay active, this app provides customized workout plans designed just for you.</p>
        <Button func={()=>{window.location.href="#generate"}} text='Accept & Begin'/>
    </div>
  )
}

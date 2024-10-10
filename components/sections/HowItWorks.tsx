'use client';
import React from 'react'

export const HowItWorks = () => {
  return (
    <section className='px-6 py-16 text-center'>
      <h2 className='text-3xl font-bold text-gray-800 mb-8'>How It Works</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <Step title='Choose a Lesson' description='Select from a library of interaction audio lessons'/>
        <Step title='Adjust to Your Pace' description='Customize playback speed and narration style'/>
        <Step title='Track Progress' description='Monitor learning through detailed analytics and reports'/>
      </div>
    </section>
  )
}
const Step = ({title,description}:{title:string,description:string}) => {
    return (
        <div className='p-6 bg-white rounded-lg shadow-md transition hover:scale-110 hover:cursor-pointer'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h3>
            <p className='text-gray-600'>{description}</p>
        </div>
    )
}


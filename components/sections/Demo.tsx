'use client';
import React from 'react'

export const Demo = () => {
  return (
    <section className='px-6 py-16 text-center'>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">See Voicebox in Action</h2>
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="bg-black aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.youtube.com/embed/demo_video_id" // Replace with your video link
            title="Voicebox Demo"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  )
}


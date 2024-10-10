'use client';

import Image from "next/image";
import Link from "next/link";
import logo from "@/app/logo.png"

export const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center px-6 py-16 md:py-24 bg-blue-50">
      <div className="flex-1 text-center md:text-left md:pr-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Bringing Learning to Life with AI-Driven Audio
        </h1>
        <p className="text-lg text-gray-600 mb-6">

        </p>
        <div className="flex justify-center md:justify-start">
            <Link href={'/'} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200">
                Get Started
            </Link>
            <Link href={'/'} className="ml-4 inline-block bg-transparent border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
                Learn More
            </Link>
        </div>
      </div>
      <div className="flex-1 mb-8 md:mb-0">
        <Image
        src={logo}
        alt="illustration"
        width={500}
        height={500}
        className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}


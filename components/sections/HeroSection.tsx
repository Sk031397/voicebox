'use client';

import Image from "next/image";
import Link from "next/link";
import logo from "@/app/logo.png"
import {useRouter} from "next/navigation";

export default function HeroSection(){
  const router = useRouter();
  return (
    <main className="flex flex-col items-center text-center mt-16 space-y-8 px-2 py-12 md:px-4 md:py-14 lg:px-6 lg:py-16">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Bringing Learning to Life Through AI-Driven Audio
        </h1>
        <p className="max-w-md md:max-w-lg text-lg md:text-xl lg:text-2xl text-gray-300">
          Voicebox enables students and educators to interact with curriculum content dynamically, offering personalized audio experiences.
        </p>
        <button className="px-4 py-2 text-black font-semibold rounded-lg border-2 border-green-800 hover:bg-green-600 transition duration-300">
            Get Started
        </button>        
      </main>
  )
}


'use client'
import { NAVLINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-blue-800 font-bold text-2xl">
          <Link href="/">
            <Image
            src={'/images/logo.png'}
            alt='logo'
            width={50}
            height={50}
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {NAVLINKS.map((link,idx) => (
            <Link href={link.href} className="text-gray-600 hover:text-teal-500 transition duration-300">
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href="/signup">
          <button className="px-4 py-2 text-black font-semibold rounded-lg border-2 border-green-800 hover:bg-green-600 transition duration-300">
            Sign Up
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

'use client';
import Link from 'next/link';
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from 'react-icons/ci';

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold">Voicebox</h4>
            <p className="text-gray-300">
              Transforming education through audio innovation.
            </p>
          </div>
          <div className="flex space-x-4 mb-6 md:mb-0">
            <Link href="#" className="text-gray-300 hover:text-white transition duration-300">
              <CiFacebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition duration-300">
              <CiTwitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition duration-300">
              <CiInstagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition duration-300">
              <CiLinkedin className="h-6 w-6" />
            </Link>
          </div>
          <div>
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Voicebox. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

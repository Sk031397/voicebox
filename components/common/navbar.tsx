'use client';

import { NAVLINKS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/app/logo.png"
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CiUser } from "react-icons/ci"
export const Navbar = () => {
  const [header,setHeader] = useState(false);
  const scrollHeader = () => {
    if(window.scrollY >= 20){
      setHeader(true);
    }else{
      setHeader(false);
    }
}
  useEffect(() => {
    window.addEventListener('scroll',scrollHeader);
    return () => {
      window.addEventListener('scroll',scrollHeader);
    }
  })
  return (
      <header className="flex items-center justify-between p-4 shadow-xl">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={50} height={50}/>
        </Link>
        <nav className="flex items-center gap-8">
          {NAVLINKS.map(link => (
            <Link href={link.href} key={link.id} className="text-xl no-underline">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="relative">
          <Input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
        </div>
        <Button className="cursor-pointer" variant={"outline"}>
          <CiUser size={20}/>
        </Button>
      </header>
  )
}


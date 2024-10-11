'use client';

import { NAVLINKS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/app/logo.png"
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CiUser } from "react-icons/ci"
import { Switch } from "../ui/switch";
import { useRouter } from "next/navigation";
export const Navbar = () => {
  const router = useRouter();
  const [isPlayground,setIsPlayground] = useState(false);
  const handleToggle = () => {
    setIsPlayground(!isPlayground);
    router.push(isPlayground ? '/':'/playground');
  }
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
        <span className="text-sm text-gray-300">{isPlayground ? "Playground":""}</span>
        <Switch
        checked={isPlayground}
        onCheckedChange={handleToggle}
        className="bg-blue-500"
        />
      </header>
  )
}


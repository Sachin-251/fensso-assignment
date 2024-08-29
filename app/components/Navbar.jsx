"use client";
import Link from 'next/link'
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='flex justify-between items-center md:px-8 py-3'>
        <div className='flex items-center gap-4'>
            <Image src='/assets/Vector.png' alt='logo' width={30} height={30} />
            <h1 className='text-2xl font-bold'>Positivus</h1>
        </div>

        <nav className='md:flex gap-10 items-center hidden'>
            <Link href="/">About us</Link>
            <Link href="/">Services</Link>
            <Link href="/">Use Cases</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Blog</Link>
            <button className='border-2 border-black rounded-md py-2 px-4'>Request a quote</button>
        </nav>

        <div className='border border-slate-600 rounded-full p-3 md:hidden block'>
            <GiHamburgerMenu size={20} onClick={() => setNavOpen(true)} className='cursor-pointer' />
        </div>

        {navOpen && (
            <div className='absolute top-0 left-0 w-full z-40 bg-white opacity-95 p-6 space-y-8'>
                <div className='flex justify-end items-center'><FaWindowClose size={30} onClick={() => setNavOpen(false)} /></div>
                <nav className='flex flex-col gap-10 items-center justify-center text-lg font-semibold'>
                    <Link href="/">About us</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Use Cases</Link>
                    <Link href="/">Pricing</Link>
                    <Link href="/">Blog</Link>
                    <button className='border-2 border-black rounded-md py-2 px-4'>Request a quote</button>
                </nav>
            </div>   
        )}
    </div>
  )
}

export default Navbar
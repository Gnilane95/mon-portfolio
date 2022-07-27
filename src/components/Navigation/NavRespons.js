import React from 'react'
import NavItems from './NavItems';
import { FaWindowClose } from "react-icons/fa";

export default function NavRespons({showMenu,active}) {
  return (
    
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-2/4 text-white bg-black/50 backdrop-blur-lg gap-6 text-xl z-10 justify-center md:hidden' : 'hidden'}>
            <FaWindowClose onClick={showMenu} className="cursor-pointer"/>
            <NavItems linkItem="/" titleItem="About"/>
            <NavItems linkItem="/skills" titleItem="Skills"/>
            <NavItems linkItem="/services" titleItem="Services"/>
            <NavItems linkItem="/portfolio" titleItem="Portfolio"/>
            <NavItems linkItem="/testimonials" titleItem="Testimonials"/>
            <NavItems linkItem="/contact" titleItem="Contact"/>
        </ul>
    
  )
}

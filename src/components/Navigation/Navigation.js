import React from 'react'
import { Link } from "react-router-dom";
import NavItems from './NavItems';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navigation() {
  return (
    <nav className="">
      <div className="flex md:flex my-7 md:mb-0 items-center md:mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center ">
            <span className="text-3xl md:text-4xl text-primary-dark font-black">
              Agathe<span className="text-primary-light">.</span>
              <span className="uppercase">cv</span>
            </span>
          </Link>
          <span className='md:hidden text-3xl cursor-pointer block pl-72' onClick="Menu(this)">
            <GiHamburgerMenu/>
          </span>
        </div>
        <div className="mt-5 md:mt-0 lg:block md:w-auto" id="mobile-menu">
          <ul className="w-full flex flex-col mt-4 md:flex-row md:space-x-0 md:font-light md:mt-0 md:text-md text-lg md:ml-20  z-30 md:z-auto absolute md:static left-0 md:w-auto md:opacity-100 opacity-0 transition-all ease-in duration-500 top-[-400px]">
            <NavItems linkItem="/" titleItem="About"/>
            <NavItems linkItem="/skills" titleItem="Skills" />
            <NavItems linkItem="/services" titleItem="Services" />
            <NavItems linkItem="/portfolio" titleItem="Portfolio" />
            <NavItems linkItem="/testimonials" titleItem="Testimonials" />
            <NavItems linkItem="/contact" titleItem="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React, {useState} from 'react'
import { Link } from "react-router-dom";
import NavItems from './NavItems';
import { GiHamburgerMenu } from "react-icons/gi";
import NavRespons from './NavRespons';

export default function Navigation() {
  const [active,setActive] = useState(false)
  const showMenu = () => {
    setActive(!active)
  }

  return (
    <nav className="">
      <div className="flex justify-between md:justify-start md:flex my-7 md:items-center md:mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center ">
            <span className="text-3xl md:text-4xl text-primary-dark font-black">
              Agathe<span className="text-primary-light">.</span>
              <span className="uppercase">cv</span>
            </span>
          </Link>
          
        </div>
        <div className="lg:block md:w-auto">
          <div className='md:hidden text-3xl cursor-pointer absolute right-12'>
            <GiHamburgerMenu onClick={showMenu}/>
          </div>
          <div>
            <ul className="hidden md:flex md:space-x-0 md:font-light md:mt-0 md:text-md md:ml-20 md:w-auto ">
              <NavItems linkItem="/" titleItem="About"/>
              <NavItems linkItem="/skills" titleItem="Skills"/>
              <NavItems linkItem="/services" titleItem="Services"/>
              <NavItems linkItem="/portfolio" titleItem="Portfolio"/>
              <NavItems linkItem="/testimonials" titleItem="Testimonials"/>
              <NavItems linkItem="/contact" titleItem="Contact"/>
            </ul>
          </div>
          <NavRespons showMenu={showMenu} active={active}/>
        </div>
      </div>
    </nav>
  );
}

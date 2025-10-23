import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ovo } from "@/app/fonts";

const Navbar = () => {
  const [isScroll , setIsScroll] = useState(false)

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full"></Image>
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex
         items-center justify-between backdrop-blur-md z-50 `}>
        <a href="#top">
          <Image
            src={assets.ahmedlogo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className="hidden md:flex  items-center text-color-brand gap-6 lg:gap-8 rounded-full px-12 py-3
        bg-white shadow-sm bg-opacity-50"
        >
          <li>
            <a href="#top" className={`text-color-brand ${ovo.className}`}>
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={ovo.className}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className={ovo.className}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className={ovo.className}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className={ovo.className}>
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            className={`hidden lg:flex items-center gap-3 px-10 
            py-2.5 border-2 rounded-full ml-4 ${ovo.className}`}
            href="#contact"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>
          <button onClick={openMenu} className="block md:hidden ml-3 cursor-pointer">
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu  */}
        <ul ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li>
            <a href="#top" onClick={closeMenu} className={`text-color-brand ${ovo.className}`}>
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className={ovo.className}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu} className={ovo.className}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu} className={ovo.className}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className={ovo.className}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

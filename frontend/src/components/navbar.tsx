"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { SiLeetcode } from "react-icons/si";

export default function NavBar() {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white/70 backdrop-blur-md shadow">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href={"/#home"}>
          <Image
            src={"/assets/NavLogo.png"}
            alt={"/"}
            width={125}
            height={50}
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>

            <Link href={"/#about"}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>

            <Link href={"/#skills"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>

            <Link href={"/#projects"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>

            <Link href={"/#education"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Education
              </li>
            </Link>

            <Link href={"/#contact"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:2-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href={"/#home"}>
                <Image
                  src={"/assets/NavLogo.png"}
                  alt="/"
                  width={87}
                  height={35}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col ">
            <ul className="uppercase ">
              <Link href={"/"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href={"/#about"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href={"/#skills"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href={"/#projects"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href={"/#education"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Education
                </li>
              </Link>
              <Link href={"/#contact"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20 ">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
                <a
                  href={
                    "https://www.linkedin.com/in/al-amin-hossain-nahid-876858193/"
                  }
                  target="_blank"
                  rel="nooppener noreferrer"
                >
                  <div className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/AlAminNahid"
                  target="_blank"
                  rel="nooppener noreferrer"
                >
                  <div className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="https://leetcode.com/u/al_aminnahid11/"
                  target="_blank"
                  rel="nooppener noreferrer"
                >
                  <div className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <SiLeetcode />
                  </div>
                </a>
                <a href="mailto:robin.nahid123@gmail.com">
                  <div className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

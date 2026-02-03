import Image from "next/image";
import Link from "next/link";
import ProjectOne from "../../public/assets/projects/one.png";
import ProjectTwo from "../../public/assets/projects/property.jpg";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative w-full h-[300px] shadow-xl shadow-gray-400 rounded-xl overflow-hidden group">
            <Image
              src={ProjectOne}
              alt="Project"
              fill
              className="object-cover group-hover:opacity-10 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-2xl text-black tracking-wider text-center">
                MessMaster
              </h3>
              <p className="pb-4 pt-2 text-black text-center">
                ReactJS, NextJS, NestJS, PostgreSQL
              </p>
              <Link href="/">
                <p className="text-center py-3 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative w-full h-[300px] shadow-xl shadow-gray-400 rounded-xl overflow-hidden group">
            <Image
              src={ProjectTwo}
              alt="Project"
              fill
              className="object-cover group-hover:opacity-10 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-2xl text-black tracking-wider text-center">
                Clinic Management System
              </h3>
              <p className="pb-4 pt-2 text-black text-center">
                HTML, CSS, JavaScript, Php
              </p>
              <Link href="/">
                <p className="text-center py-3 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

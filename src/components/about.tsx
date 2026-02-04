import Image from "next/image";
import about from "../../public/assets/about-me.jpg";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-4 text-gray-600">
            I’m a computer science student and early-career full-stack developer
            who learns best by building projects. I enjoy creating complete web
            applications by combining front-end technologies with back-end
            services and databases. Through academic and personal projects, I’m
            developing a strong foundation in software development and modern
            web technologies.
          </p>
          <p className="py-4 text-gray-600">
            I’m currently focused on strengthening my fundamentals and gaining
            practical experience through continuous learning and hands-on
            development. My goal is to grow into a well-rounded software
            developer by working on meaningful projects and real-world
            applications.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={about} alt="/" />
        </div>
      </div>
    </div>
  );
}

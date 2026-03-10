import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Al Amin</span>
          </h1>
          <h1 className="py-2 text-gray-700 ">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I’m a full-stack web developer passionate about building complete
            web applications—from intuitive front-end interfaces to reliable
            back-end systems. I enjoy learning new technologies and applying
            them to solve real-world problems through clean and maintainable
            code.
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
  );
}

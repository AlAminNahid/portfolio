"use client";
import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import { contactSchema } from "@/validation/contactSchema";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../public/assets/contact-us.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function ContactUS() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [messageBox, setMessageBox] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const result = contactSchema.safeParse({
      name,
      phone,
      email,
      subject,
      messageBox,
    });

    if (!result.success) {
      const firstError = result.error.issues[0].message;
      setError(firstError);
      console.log("Validation Error:", firstError);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/contact", {
        name,
        phone,
        email,
        subject,
        messageBox,
      });

      console.log("Server Response:", response.data);
      setSuccess(true);

      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessageBox("");
    } catch (error: any) {
      console.log(error);
      setSuccess(false);

      const errorMessage =
        error.message || "Something went wrong. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-white/70 shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={Contact}
                  alt="contact-me abastract image"
                />
              </div>
              <div>
                <h2 className="py-2">Al Amin Hossain Nahid</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for Freelancer or full-time positions. Contact
                  me and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Contact With Me</p>
                <div className="flex items-center justify-center py-4">
                  <div className="flex items-center gap-6 max-w-[420px] mx-auto py-4 ">
                    <a
                      href={
                        "https://www.linkedin.com/in/al-amin-hossain-nahid-876858193/"
                      }
                      target="_blank"
                      rel="nooppener noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer transition-transform duration-300 hover:scale-110">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/AlAminNahid"
                      target="_blank"
                      rel="nooppener noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer transition-transform duration-300 hover:scale-110">
                        <FaGithub />
                      </div>
                    </a>
                    <a href="mailto:robin.nahid123@gmail.com">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer transition-transform duration-300 hover:scale-110">
                        <AiOutlineMail />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-5 lg:col-span-3 w-full h-auto shadow-xl bg-white/70 shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                {success && (
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-200 text-green-900 px-6 py-3 rounded-lg">
                      Message sent successfully!
                    </div>
                  </div>
                )}

                {error && (
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-200 text-red-900 px-6 py-3 rounded-lg">
                      {error}
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    placeholder="Enter your subject here"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    placeholder="Enter your message here"
                    value={messageBox}
                    onChange={(e) => setMessageBox(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href={"/"}>
            <div className="rounded-full shadow-lg bg-white/70 shadow-gray-400 p-4 cursor-pointer transition-transform duration-300 hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-[#5651e5] " size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

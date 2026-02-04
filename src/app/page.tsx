import About from "@/components/about";
import ContactUS from "@/components/contact";
import Education from "@/components/education";
import Main from "@/components/main";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Education />
      <ContactUS />
    </>
  );
}

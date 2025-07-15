import { IoIosArrowDropdown } from "react-icons/io";
import "./styles.css";

function Hero() {
  return (
    <section
      id="hero"
      className="hero relative w-full h-svh flex items-center justify-center flex-col text-xl px-2"
    >
      <div className="hero-text flex flex-col items-center justify-center gap-8 text-center h-full text-white ">
        <div className="hello-wrapper flex gap-0.5 text-xs">
          <p className="hello italic">writeln('</p>
          <p className="hello-world font-bold text-white mx-1.5">
            Hello, World!
          </p>
          <p className="hello italic">');</p>
        </div>
        <h1 className="name text-4xl">
          Hey! I'm <span className="full-name">Diego Bastos</span>
        </h1>
        <h2 className="presentation">
          Full Stack Developer with a Bachelor's in Computer Science
        </h2>
        <p className="introduction">Game developer in my free time.</p>
      </div>
      <a href="#education" className="arrow-down" title="Education Anchor">
        <IoIosArrowDropdown fill="white" />
      </a>
    </section>
  );
}

export default Hero;

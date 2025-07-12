import { FiDownload } from "react-icons/fi";
import "./styles.css";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent flex flex-col md:flex-row justify-between items-center px-8 py-4 text-white">
      <a href="#" className="link-logo">
        <div className="logo-wrapper flex">
          <p className="logo">DB</p>
          <p className="website-name">&nbsp; | Diego Bastos</p>
        </div>
      </a>
      <nav className="flex items-center">
        <ul className="flex flex-row max-sm:gap-4 max-sm:mt-4 space-x-4 nav-links text-xs">
          <li>
            <a className="menu-item" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="menu-item" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="menu-item" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a
              className="menu-item flex items-center gap-1"
              href="./Diego_Lima_Bastos_-_Resume.pdf"
              download="Diego-Bastos-Resume.pdf"
            >
              <FiDownload /> Resume
            </a>
          </li>
          <li>
            <a className="menu-item" href="mailto:bastosdiegol@gmail.com">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import "./styles.css";

function Footer() {
  return (
    <footer className="footer w-full h-16 flex items-center justify-center text-xs text-white">
      <p className="text-center">
        Developed by Diego Bastos. Portfolio source code is available on{" "}
        <a
          href="https://github.com/bastosdiegol/portfolio"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . This website is built with React and Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;

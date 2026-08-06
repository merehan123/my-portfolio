import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import navigation from "../../data/navigation";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 hover:scale-105 transition-all duration-300"
        >
          Merehan
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${
                  active === item.id
                    ? "text-cyan-400 font-semibold after:w-full"
                    : "text-slate-300 hover:text-cyan-400 after:w-0 hover:after:w-full"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume */}
        <a
          href="/CV.pdf"
          download
          className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-6 py-6">

          <ul className="flex flex-col gap-6">

            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition-all duration-300 ${
                    active === item.id
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}

          </ul>

          <a
            href="/CV.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="mt-8 block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Resume
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
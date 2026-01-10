import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0f19]/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
            {"AS"}
          </div>
          <span className="text-lg font-bold text-white">ANSH</span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-gray-300 text-sm">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                className="hover:text-white transition relative group"
              >
                {item.name}

                {/* underline on hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTON */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600
                     text-white font-semibold transition-all duration-300
                     hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
        >
          Get in Touch
        </a>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0b0f19] border-t border-gray-800">
          <ul className="flex flex-col px-8 py-6 gap-5 text-gray-300 text-sm">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Mobile Button */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600
                         text-white font-semibold transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            >
              Get in Touch
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

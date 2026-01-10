import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-14">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT: BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              Ansh<span className="text-blue-500">Srivastava</span>
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-sm">
              Full-stack developer passionate about building clean UI experiences and scalable backend systems.
            </p>
          </div>

          {/* MIDDLE: QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT: SOCIALS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Socials</h4>

            <div className="flex gap-4">
              <a
                href="https://github.com/Ansh-1401"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300
                           transition-all duration-300
                           hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400
                           hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/ansh-srivastava-b8b057292"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300
                           transition-all duration-300
                           hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400
                           hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="mailto:srivastavaansh1408@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300
                           transition-all duration-300
                           hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400
                           hover:shadow-lg hover:shadow-blue-500/20"
              >
                <MdEmail size={18} />
              </a>

              
            </div>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ansh Srivastava. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with <span className="text-white">React</span> &{" "}
            <span className="text-white">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

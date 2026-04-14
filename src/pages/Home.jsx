import profile from "../assets/profile.jpg";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const titles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Java Backend Developer",
  "Software Developer",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0b0f19] flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center space-y-5">
          <p className="text-xs tracking-widest text-gray-400">HELLO, I’M</p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-snug">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ANSH
            </span>{" "}
            <span className="text-white">SRIVASTAVA</span>
          </h1>

          {/* ROLE */}
          <h2 className="text-lg text-gray-300 h-8">
            {titles[currentIndex]}
            <span className="text-blue-500 font-bold"> </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 max-w-lg leading-relaxed">
            Full-stack developer with a strong foundation in{" "}
            <span className="text-white font-semibold hover:text-blue-400 transition">
              backend development
            </span>{" "}
            and a passion for creating{" "}
            <span className="text-white font-semibold hover:text-purple-400 transition">
              clean, responsive
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold hover:text-blue-400 transition">
              user-friendly frontend applications
            </span>{" "}
            using modern web technologies.
          </p>

          {/* CTA GROUP */}
          <div className="pt-4 space-y-4">
            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-semibold
                           bg-gradient-to-r from-blue-600 to-purple-600 text-white
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:scale-[1.03]
                           hover:shadow-lg hover:shadow-blue-500/30
                           active:scale-95"
              >
                Let’s Talk
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-semibold
                           border border-gray-600 text-gray-300
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:border-blue-500
                           hover:text-white hover:bg-blue-500/10
                           hover:shadow-md hover:shadow-blue-500/20
                           active:scale-95"
              >
                View Work
              </a>

              <a
                href="https://drive.google.com/file/d/1yYNolX71VCuhsw0xAI1Z4fzEYqwsvDnl/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold
                           border border-gray-600 text-gray-300
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:border-blue-500
                           hover:text-white hover:bg-blue-500/10
                           hover:shadow-md hover:shadow-blue-500/20
                           active:scale-95"
              >
                Resume
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-4 pt-3">
              {/* GitHub */}
              <a
                href="https://github.com/Ansh-1401"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           border border-gray-600 text-gray-300
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:scale-110
                           hover:border-blue-500 hover:text-blue-400
                           hover:shadow-lg hover:shadow-blue-500/40
                           active:scale-95"
              >
                <FaGithub size={17} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ansh-srivastava-b8b057292"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           border border-gray-600 text-gray-300
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:scale-110
                           hover:border-blue-500 hover:text-blue-400
                           hover:shadow-lg hover:shadow-blue-500/40
                           active:scale-95"
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* Email */}
              <a
                href="mailto:srivastavaansh1408@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           border border-gray-600 text-gray-300
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:scale-110
                           hover:border-blue-500 hover:text-blue-400
                           hover:shadow-lg hover:shadow-blue-500/40
                           active:scale-95"
              >
                <MdEmail size={17} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/_ansh_1401/?next=%2Fansh_1401%2F" // ✅ replace
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           border border-gray-600 text-gray-300
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:scale-110
                           hover:border-pink-500 hover:text-pink-400
                           hover:shadow-lg hover:shadow-pink-500/40
                           active:scale-95"
              >
                <FaInstagram size={17} />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Ansh1408/" // ✅ replace
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           border border-gray-600 text-gray-300
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:scale-110
                           hover:border-yellow-500 hover:text-yellow-400
                           hover:shadow-lg hover:shadow-yellow-500/40
                           active:scale-95"
              >
                <SiLeetcode size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-xl opacity-40 transition duration-500 group-hover:opacity-70"></div>

            <img
              src={profile}
              alt="Ansh"
              className="relative w-72 h-72 rounded-full object-cover border-4 border-gray-700
                         transition duration-500 ease-out
                         group-hover:scale-105 group-hover:border-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

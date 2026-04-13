import { useEffect, useState } from "react";
import AcademicJourney from "../components/AcademicJourney";
import { FaGraduationCap, FaMapMarkerAlt, FaCode } from "react-icons/fa";

const About = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowText(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="bg-[#0b0f19] py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p
            className={`mt-4 text-gray-400 max-w-2xl mx-auto transition-all duration-700 ease-out
            ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            A passionate full-stack developer with a strong foundation in
            computer science and hands-on experience in modern web technologies.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8 text-gray-300">
            {/* Animated Paragraph 1 */}
            <p
              className={`leading-relaxed transition-all duration-700 ease-out delay-100
              ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              I’m a passionate Full-Stack Web Developer and a Computer Science
              undergraduate currently pursuing my B.Tech from IMS Engineering
              College, Ghaziabad. I love turning ideas into functional and
              user-friendly web applications, with core expertise in React and
              Java.
            </p>

            {/* Animated Paragraph 2 */}
            <p
              className={`leading-relaxed text-gray-400 transition-all duration-700 ease-out delay-200
              ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              I’ve built and deployed full-stack projects from scratch, managing
              everything from UI design to backend logic and database handling.
              I enjoy solving real-world problems, learning new technologies, and
              improving application performance and user experience.
            </p>

            {/* Animated Paragraph 3 */}
            <p
              className={`leading-relaxed text-gray-400 transition-all duration-700 ease-out delay-300
              ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Currently, I’m seeking opportunities to work on real-world
              projects where I can sharpen my skills and grow as a professional
              developer.
            </p>

            {/* INFO CARDS */}
            <div className="space-y-4 pt-6">
              {/* EDUCATION */}
              <div
                className="group flex items-start gap-4 p-5 rounded-xl border border-gray-700
                           transition-all duration-300
                           hover:border-blue-500 hover:-translate-y-1
                           hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaGraduationCap className="text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">
                    B.Tech (Computer Science & Engineering)
                  </h4>
                  <p className="text-sm text-gray-400">
                    IMS Engineering College, Ghaziabad • Final Year • CGPA 7.0
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div
                className="group flex items-start gap-4 p-5 rounded-xl border border-gray-700
                           transition-all duration-300
                           hover:border-blue-500 hover:-translate-y-1
                           hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Based in India</h4>
                  <p className="text-sm text-gray-400">
                    Open to remote opportunities
                  </p>
                </div>
              </div>

              {/* ROLE */}
              <div
                className="group flex items-start gap-4 p-5 rounded-xl border border-gray-700
                           transition-all duration-300
                           hover:border-blue-500 hover:-translate-y-1
                           hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaCode className="text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">
                    Full Stack Developer
                  </h4>
                  <p className="text-sm text-gray-400">
                    Java, Spring Boot, React, PostgreSQL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – STATS */}
          <div className="grid grid-cols-2 gap-6">
            <div
              className="group p-8 rounded-xl border border-gray-700 text-center
                         transition-all duration-300
                         hover:border-blue-500 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-blue-500/30"
            >
              <h3 className="text-4xl font-bold text-blue-500">3+</h3>
              <p className="mt-2 text-gray-400 text-sm">Years Learning</p>
            </div>

            <div
              className="group p-8 rounded-xl border border-gray-700 text-center
                         transition-all duration-300
                         hover:border-blue-500 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-blue-500/30"
            >
              <h3 className="text-4xl font-bold text-blue-500">5+</h3>
              <p className="mt-2 text-gray-400 text-sm">Projects Completed</p>
            </div>

            <div
              className="group p-8 rounded-xl border border-gray-700 text-center
                         transition-all duration-300
                         hover:border-blue-500 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-blue-500/30"
            >
              <h3 className="text-4xl font-bold text-blue-500">10+</h3>
              <p className="mt-2 text-gray-400 text-sm">Technologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* ACADEMIC JOURNEY SECTION */}
      <div className="mt-32">
        <AcademicJourney />
      </div>
    </section>
  );
};

export default About;

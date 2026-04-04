import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ✅ Your Projects List
const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern, responsive developer portfolio built with React, Tailwind CSS, and Vite featuring smooth UI, animations, project showcase, and a working contact form.",
    image: "https://i.postimg.cc/wT8h9XyL/Screenshot-(515).png",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "EmailJS"],
    github: "https://github.com/Ansh-1401/My_Portfolio",
    live: "https://ansh-portfolio-73jq.onrender.com",
    accent: "blue",
    showLive: true,
  },
  {
    title: "UBR Works Website",
    desc: "Business website with modern responsive UI, SEO optimized, and deployed for real client hosting.",
    image: "https://i.postimg.cc/FzZPvYHT/Screenshot-(514).png",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "REST API", "AWS"],
    github: "https://github.com/Ansh-1401/ubrengg-fronted",
    live: "https://ubrenggworks.in",
    accent: "purple",
    showLive: true,
  },
  {
    title: "QBito (QR-Based Food Ordering System)",
    desc: "Qbito is a smart QR-based restaurant ordering platform that lets customers scan, browse menus, place orders, and pay seamlessly—while restaurants manage everything in real time.",
    image: "https://i.postimg.cc/288FnhPN/Screenshot-(524).png",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "REST API", "Render"],
    github: "https://github.com/Ansh-1401/qbito_frontend",
    live: "https://qbito-frontend.onrender.com",
    accent: "purple",
    showLive: true,
  },
  {
    title: "ATM Simulator System",
    desc: "Developed a desktop-based ATM Simulator using Java Swing with modern UI screens.",
    image: "https://i.postimg.cc/jdB8bYsM/atm.jpg",
    tech: ["Java", "Swing", "MySQL", "JDBC"],
    github: "https://github.com/Ansh-1401/Atm-simulator",
    accent: "pink",
    showLive: false, // ✅ no live demo
  },
  {
    title: "Real-Time Traffic Density Estimation",
    desc: "Built a real-time traffic density estimation system using YOLOv8 and OpenCV to detect, count vehicles, and analyze road congestion from live video.",
    image: "https://i.postimg.cc/pyMnsCHY/cover-image-raw.png",
    tech: ["Python", "YOLOv8", "OpenCV"],
    github: "https://github.com/Ansh-1401/Real-Time-Traffic-Density-Estimation",
    accent: "blue",
    showLive: false, // ✅ no live demo
  },
];

// ✅ Card hover colors
const accentStyles = {
  blue: "hover:border-blue-500 hover:shadow-blue-500/25",
  purple: "hover:border-purple-500 hover:shadow-purple-500/25",
  pink: "hover:border-pink-500 hover:shadow-pink-500/25",
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0f19] py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I’ve built using modern frontend and
            backend technologies.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl border border-gray-700 bg-white/5 overflow-hidden
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                          ${accentStyles[project.accent]}`}
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* TECH TAGS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-gray-700 text-gray-300
                                 transition hover:bg-white/10 hover:border-white/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex gap-4">
                  {/* GitHub always */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-gray-300
                               transition-all duration-300 hover:border-white hover:text-white hover:-translate-y-0.5"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {/* Live Demo only if showLive true */}
                  {project.showLive && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600
                                 text-white font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

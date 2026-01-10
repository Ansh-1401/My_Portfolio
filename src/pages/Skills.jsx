import { FaReact, FaJava, FaDatabase, FaTools } from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSpringsecurity,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRender,
  SiAmazonec2,
} from "react-icons/si";

/* =======================
   1) SKILLS & TECHNOLOGIES
======================= */
const skillsData = [
  {
    title: "Frontend",
    icon: <FaReact size={26} />,
    accent: "blue",
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaJava size={26} />,
    accent: "purple",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring Security", icon: <SiSpringsecurity /> },
      { name: "Spring MVC", icon: <FaTools /> },
      { name: "REST APIs", icon: <FaTools /> },
    ],
  },
  {
    title: "Database & Tools",
    icon: <FaDatabase size={26} />,
    accent: "pink",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "AWS ", icon: <SiAmazonec2 /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Git & GitHub", icon: <FaTools /> },
      { name: "VS Code", icon: <FaTools /> },
    ],
  },
];

const accentStyles = {
  blue: "hover:border-blue-500 hover:shadow-blue-500/25 text-blue-500",
  purple: "hover:border-purple-500 hover:shadow-purple-500/25 text-purple-500",
  pink: "hover:border-pink-500 hover:shadow-pink-500/25 text-pink-500",
};

/* =======================
   2) CORE COMPETENCIES (NEW)
======================= */
const coreCompetencies = [
  {
    letter: "R",
    title: "React.js",
    desc: "Modern UI development with components, hooks, and clean UX.",
    accent: "from-blue-500 to-purple-500",
  },
  {
    letter: "S",
    title: "Spring Boot",
    desc: "REST APIs, backend logic, authentication, and scalable services.",
    accent: "from-purple-500 to-pink-500",
  },
  {
    letter: "P",
    title: "PostgreSQL",
    desc: "Relational database design, queries, joins, and optimization.",
    accent: "from-blue-500 to-cyan-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0b0f19] py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* =======================
            SKILLS & TECHNOLOGIES
        ======================= */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Skills & <span className="text-blue-500">Technologies</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build full-stack web applications
            with clean UI and scalable backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillsData.map((block, idx) => (
            <div
              key={idx}
              className={`group p-8 rounded-2xl border border-gray-700
                          transition-all duration-300
                          hover:-translate-y-2 hover:shadow-xl
                          ${accentStyles[block.accent]}`}
            >
              {/* TITLE */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`${accentStyles[block.accent]}`}>{block.icon}</div>
                <h3 className="text-xl font-bold text-white">{block.title}</h3>
              </div>

              {/* BADGES */}
              <div className="flex flex-wrap gap-3">
                {block.items.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm
                               bg-white/5 border border-gray-700 text-gray-300
                               transition-all duration-300
                               hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
                  >
                    <span className="text-gray-200">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* =======================
            CORE COMPETENCIES (ADDED BELOW)
        ======================= */}
        <div className="mt-32">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Core <span className="text-blue-500">Competencies</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              My strongest technical areas where I build most of my projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {coreCompetencies.map((skill, idx) => (
              <div
                key={idx}
                className="group bg-white/5 border border-gray-700 rounded-2xl p-10 text-center
                           transition-all duration-300
                           hover:-translate-y-2 hover:border-blue-500
                           hover:shadow-xl hover:shadow-blue-500/20"
              >
                {/* Circle Badge */}
                <div
                  className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full
                              bg-gradient-to-r ${skill.accent} text-white font-bold text-3xl`}
                >
                  {skill.letter}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-white">{skill.title}</h3>

                {/* Desc */}
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

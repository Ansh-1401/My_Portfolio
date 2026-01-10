import { FaCalendarAlt } from "react-icons/fa";

const academics = [
  {
    title: "B.Tech (Computer Science & Engineering)",
    duration: "2022 – 2026",
    institute: "IMS Engineering College, Ghaziabad",
    score: "CGPA: 7.0",
    accent: "blue",
  },
  {
    title: "12th Grade",
    duration: "2020 – 2022",
    institute: "Satya's The Aryan School, Ikauna",
    score: "69%",
    accent: "purple",
  },
  {
    title: "10th Grade",
    duration: "2019 – 2020",
    institute: "Poineer Public School, Bahraich",
    score: "76%",
    accent: "pink",
  },
];

const accentMap = {
  blue: "hover:border-blue-500 hover:shadow-blue-500/25 text-blue-500",
  purple: "hover:border-purple-500 hover:shadow-purple-500/25 text-purple-500",
  pink: "hover:border-pink-500 hover:shadow-pink-500/25 text-pink-500",
};

const AcademicJourney = () => {
  return (
    <section className="mt-28">
      {/* CONTAINER (THIS FIXES EVERYTHING) */}
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Academic <span className="text-blue-500">Journey</span>
          </h3>
          <p className="mt-3 text-gray-400">
            My educational background and academic milestones
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {academics.map((item, index) => (
            <div
              key={index}
              className={`group p-7 rounded-2xl border border-gray-700
                          transition-all duration-300
                          hover:-translate-y-2 hover:shadow-xl
                          ${accentMap[item.accent]}`}
            >
              {/* ICON */}
              <div className={`mb-4 ${accentMap[item.accent]}`}>
                <FaCalendarAlt size={26} />
              </div>

              {/* CONTENT */}
              <h4 className="text-lg font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                {item.duration}
              </p>

              <p className="mt-4 text-gray-300">
                {item.institute}
              </p>

              <p className={`mt-2 font-semibold ${accentMap[item.accent]}`}>
                {item.score}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcademicJourney;

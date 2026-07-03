import {
  FileSpreadsheet,
  BarChart3,
  Database,
  Brain,
} from "lucide-react";

const skills = [
  {
    title: "Microsoft Excel",
    icon: <FileSpreadsheet className="w-12 h-12 text-green-600" />,
    description:
      "Data Cleaning, Pivot Tables, Charts, XLOOKUP and Dashboard Reporting.",
  },
  {
    title: "Power BI",
    icon: <BarChart3 className="w-12 h-12 text-yellow-500" />,
    description:
      "Interactive Dashboards, Power Query, DAX and Business Intelligence.",
  },
  {
    title: "SQL",
    icon: <Database className="w-12 h-12 text-blue-600" />,
    description:
      "Joins, CTEs, Window Functions, Data Extraction and Business Analysis.",
  },
  {
    title: "Python",
    icon: <Brain className="w-12 h-12 text-sky-600" />,
    description:
      "Pandas, NumPy, Data Cleaning and Exploratory Data Analysis.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-transparent py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-slate-900">
          Technical Skills
        </h2>

        <p className="text-slate-600 text-center mt-4 mb-16 text-lg">
          My primary tools for Data Analytics and Business Intelligence.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-3xl
                border
                border-white
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                p-8
              "
            >
              <div className="flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold text-center text-slate-900 mt-6">
                {skill.title}
              </h3>

              <p className="text-slate-600 mt-5 leading-8 text-center">
                {skill.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
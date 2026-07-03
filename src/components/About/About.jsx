import { GraduationCap, MapPin, Briefcase, Database } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="text-cyan-600 w-8 h-8" />,
      title: "Education",
      value: "B.Tech CSE\nSilicon University",
    },
    {
      icon: <MapPin className="text-cyan-600 w-8 h-8" />,
      title: "Location",
      value: "Bhubaneswar,\nOdisha",
    },
    {
      icon: <Briefcase className="text-cyan-600 w-8 h-8" />,
      title: "Career Goal",
      value: "Data Analyst",
    },
    {
      icon: <Database className="text-cyan-600 w-8 h-8" />,
      title: "Core Skills",
      value: "Excel • Power BI\nSQL • Python",
    },
  ];

  return (
    <section
      id="about"
      className="bg-transparent py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-slate-900 mb-4">
          About Me
        </h2>

        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16 leading-8">
          Passionate about transforming raw data into meaningful business
          insights using Excel, Power BI, SQL and Python.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card) => (
            <div
              key={card.title}
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-3xl
                p-8
                border
                border-white
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {card.icon}

              <h3 className="text-xl font-bold text-slate-900 mt-6">
                {card.title}
              </h3>

              <p className="text-slate-600 whitespace-pre-line mt-4 leading-7">
                {card.value}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
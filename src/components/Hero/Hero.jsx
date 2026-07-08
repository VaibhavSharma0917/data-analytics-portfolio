import profile from "../../assets/images/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-transparent flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left Section */}

        <div>

          <p className="text-cyan-600 text-lg font-semibold tracking-wide">
            Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-extrabold text-slate-900 mt-3 leading-tight">
            VAIBHAV
            <br />
            SHARMA
          </h1>

          <h2 className="text-3xl text-slate-600 mt-5">
            Aspiring Data Analyst
          </h2>

          <p className="text-slate-500 mt-8 leading-8 max-w-xl text-lg">
            Turning raw data into meaningful insights using
            <span className="font-semibold text-cyan-600"> Excel</span>,
            <span className="font-semibold text-cyan-600"> Power BI</span>,
            <span className="font-semibold text-cyan-600"> SQL</span> and
            <span className="font-semibold text-cyan-600"> Python</span>.
          </p>

          {/* Skill Badges */}

          <div className="flex flex-wrap gap-3 mt-8">

            <span className="px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-cyan-200 shadow-md text-cyan-700 font-medium">
              Excel
            </span>

            <span className="px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-cyan-200 shadow-md text-cyan-700 font-medium">
              Power BI
            </span>

            <span className="px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-cyan-200 shadow-md text-cyan-700 font-medium">
              SQL
            </span>

            <span className="px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-cyan-200 shadow-md text-cyan-700 font-medium">
              Python
            </span>

          </div>

          {/* Buttons */}

          <div className="flex gap-5 mt-10">

            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg hover:bg-cyan-600 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="https://data-analytics-portfolio-q9wi.onrender.com/uploads/resume/1782997663816.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold shadow hover:bg-slate-100 transition duration-300"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-cyan-300/30 blur-3xl scale-110"></div>

            <img
              src={profile}
              alt="Vaibhav Sharma"
              className="relative w-[420px] rounded-3xl border border-white shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-transparent py-24 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <div
          className="
            bg-white/70
            backdrop-blur-xl
            rounded-3xl
            border
            border-white
            shadow-xl
            p-12
            text-center
          "
        >

          <div className="flex justify-center mb-8">

            <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center">

              <FileText className="w-10 h-10 text-cyan-600" />

            </div>

          </div>

          <h2 className="text-5xl font-bold text-slate-900">
            Resume
          </h2>

          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto leading-8">
            Download my latest resume to explore my education,
            technical skills, certifications and analytics journey.
          </p>

          <a
            href="http://localhost:5000/uploads/resume/1782997663816.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              mt-12
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              text-white
              font-semibold
              shadow-lg
              hover:bg-cyan-600
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <Download size={22} />

            Download Resume

          </a>

        </div>

      </div>
    </section>
  );
}




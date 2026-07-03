import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-transparent py-12 px-8">

      <div
        className="
          max-w-7xl
          mx-auto
          bg-white/70
          backdrop-blur-xl
          rounded-3xl
          border
          border-white
          shadow-lg
          px-10
          py-8
        "
      >

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Vaibhav Sharma
            </h2>

            <p className="text-slate-600 mt-2">
              Aspiring Data Analyst
            </p>

          </div>

          <div className="flex gap-5">

            <a
              href="https://github.com/VaibhavSharma0917"
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                rounded-xl
                bg-cyan-100
                flex
                items-center
                justify-center
                text-cyan-700
                hover:bg-cyan-500
                hover:text-white
                transition-all
                duration-300
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-sharma-84352b310/"
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                rounded-xl
                bg-cyan-100
                flex
                items-center
                justify-center
                text-cyan-700
                hover:bg-cyan-500
                hover:text-white
                transition-all
                duration-300
              "
            >
              <FaLinkedin size={20} />
            </a>

          </div>

        </div>

        <hr className="my-8 border-slate-200" />

        <p className="text-center text-slate-500 text-sm">
          © 2026 Vaibhav Sharma. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}
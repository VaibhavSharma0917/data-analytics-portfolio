import { Menu, Moon, BarChart3 } from "lucide-react";
import navigation from "../../constants/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-cyan-500 flex items-center justify-center">

            <BarChart3 className="w-6 h-6 text-black" />

          </div>

          <div>

            <h2 className="text-white font-bold text-lg">
              Vaibhav Sharma
            </h2>

            <p className="text-xs text-zinc-400">
              Data Analytics
            </p>

          </div>

        </a>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-zinc-300 hover:text-cyan-400 transition"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition">

            <Moon className="w-5 h-5" />

          </button>

          <button className="md:hidden">

            <Menu className="text-white w-7 h-7" />

          </button>

        </div>

      </div>

    </header>
  );
}
import React from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="w-full">
      <nav className="flex items-center justify-between py-4">
        <img
          className="h-8 w-auto"
          src={logo}
          alt="Logo"
        />

        <ul className="hidden items-center gap-7 font-bold md:flex">
          <li className="text-red-500">
            <a
              href="#home"
              className="cursor-pointer transition hover:text-primary"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="cursor-pointer transition hover:text-primary"
            >
              Technology
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="cursor-pointer transition hover:text-primary"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="cursor-pointer transition hover:text-primary"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="cursor-pointer transition hover:text-primary"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden items-center gap-3 md:flex lg:gap-7">
          <button className="btn btn-soft btn-primary">
            Sign In
          </button>

          <button className="btn btn-soft btn-secondary">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-ghost btn-square md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 pb-5 md:hidden">
          <ul className="flex flex-col gap-4 pt-5 font-bold">
            <li className="text-red-500">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="block transition hover:text-primary"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={() => setIsMenuOpen(false)}
                className="block transition hover:text-primary"
              >
                Technology
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="block transition hover:text-primary"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block transition hover:text-primary"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block transition hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="mt-5 flex gap-3">
            <button className="btn btn-soft btn-primary flex-1">
              Sign In
            </button>

            <button className="btn btn-soft btn-secondary flex-1">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
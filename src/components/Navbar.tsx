import React from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex min-h-16 items-center justify-between gap-4">

          <a href="#home" className="shrink-0">
            <img
              className="h-8 w-auto"
              src={logo}
              alt="Dev Stack"
            />
          </a>

          <ul className="hidden items-center gap-5 font-bold text-sm lg:gap-7 md:flex">
            <li>
              <a
                href="#home"
                className="text-red-500 transition hover:text-primary"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="transition hover:text-primary"
              >
                Technology
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition hover:text-primary"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition hover:text-primary"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <button className="btn btn-soft btn-primary btn-sm">
              Sign In
            </button>

            <button className="btn btn-soft btn-secondary btn-sm">
              Sign Up
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="btn btn-ghost btn-square md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-slate-100 py-5 md:hidden">
            <ul className="flex flex-col gap-4 text-sm font-bold">
              <li>
                <a
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-red-500 transition hover:text-primary"
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
              <button className="btn btn-soft btn-primary btn-sm flex-1">
                Sign In
              </button>

              <button className="btn btn-soft btn-secondary btn-sm flex-1">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
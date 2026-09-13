const Footer = () => {
  return (
    <footer className="py-6">
      <div className="border-t-2 border-blue-500 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

            <div className="w-full md:max-w-md">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-linear-to-br from-purple-500 to-pink-500 text-[10px] font-bold text-white">
                  DS
                </div>

                <h2 className="text-lg font-bold text-slate-900">
                  Dev<span className="text-pink-500">Stack</span>
                </h2>
              </div>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              <div className="mt-6 flex gap-5">
                <a
                  href="#"
                  className="text-xs font-medium text-slate-600 transition hover:text-slate-900"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="text-xs font-medium text-slate-600 transition hover:text-slate-900"
                >
                  Twitter
                </a>

                <a
                  href="#"
                  className="text-xs font-medium text-slate-600 transition hover:text-slate-900"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 md:w-auto md:gap-12 lg:gap-20">

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                  Product
                </h3>

                <div className="mt-4 space-y-3">
                  <a
                    href="#"
                    className="block text-xs text-slate-500 transition hover:text-slate-900"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="block text-xs text-slate-500 transition hover:text-slate-900"
                  >
                    Technologies
                  </a>

                  <a
                    href="#"
                    className="block text-xs text-slate-500 transition hover:text-slate-900"
                  >
                    Projects
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                  Company
                </h3>

                <div className="mt-4 space-y-3">
                  <a
                    href="#"
                    className="block text-xs text-slate-500 transition hover:text-slate-900"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="block text-xs text-slate-500 transition hover:text-slate-900"
                  >
                    Contact
                  </a>

                  <a
                    href="#"
                    className="block text-xs text-slate-500 transition hover:text-slate-900"
                  >
                    Careers
                  </a>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                  Legal
                </h3>

                <div className="mt-4 space-y-3">
                  <a
                    href="#"
                    className="block text-xs text-slate-500 transition hover:text-slate-900"
                  >
                    Privacy Policy
                  </a>

                  <a
                    href="#"
                    className="block text-xs text-slate-500 transition hover:text-slate-900"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-7">
            <div className="flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-center sm:text-left">
                © 2026 Dev Stack. All rights reserved.
              </p>

              <div className="flex justify-center gap-6 sm:justify-end">
                <a
                  href="#"
                  className="transition hover:text-slate-700"
                >
                  Privacy
                </a>

                <a
                  href="#"
                  className="transition hover:text-slate-700"
                >
                  Terms
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
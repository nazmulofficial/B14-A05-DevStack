import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-4">
        <img className="h-[32px]" src={logo} alt="Logo" />
        <ul className="flex justify-between gap-7 font-bold">
          <li className="text-red-500">
            <a href="#home" className="cursor-pointer hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="cursor-pointer hover:text-primary"
            >
              Technology
            </a>
          </li>

          <li>
            <a href="#projects" className="cursor-pointer hover:text-primary">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="cursor-pointer hover:text-primary">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="cursor-pointer hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-7">
          <button className="btn btn-soft btn-primary">Sign In</button>
          <button className="btn btn-soft btn-secondary">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

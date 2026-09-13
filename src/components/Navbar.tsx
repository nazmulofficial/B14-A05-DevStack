import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-4">
        <img className="h-[32px]" src={logo} alt="Logo" />
        <ul className="flex justify-between gap-7 font-bold">
          <li className="text-red-500">Home</li>
          <li>Technology</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-7">
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

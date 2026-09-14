import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="w-full lg:container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <img src={hamburger} alt="Open menu" className="h-6" />
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li><a href="#home">Home</a></li>
                <li><a href="#technologies">Technology</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <a
              href="#home"
              className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
            >
              <img src={logo} alt="Dev Stack home" className="h-10" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technology</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="navbar-end gap-2.5">
            <button type="button" className="btn btn-soft text-gray-900 w-12 md:w-36 rounded-3xl">
              Sign in
            </button>
            <button type="button" className="btn btn-secondary w-12 md:w-36 rounded-3xl primary_gradient">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

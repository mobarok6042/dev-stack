import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <div className="lg:container mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img src={hamburger} alt="Hamburger" className="h-6" />
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Technology</a>
              </li>
              <li>
                <a>Project</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <a className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <img src={logo} alt="Logo" className="h-10" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Technology</a>
            </li>
            <li>
              <a>Project</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2.5">
          <button className="btn btn-soft text-gray-900 w-12 md:w-36">Sign in</button>
          <button className="btn btn-secondary w-12 md:w-36">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

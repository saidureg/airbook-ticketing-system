import logoIcon from "../../../assets/logoIcon.png";
const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Offer</a>
      </li>
      <li>
        <a>Airlines</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#FFFFFFE5] max-w-screen-xl mx-auto py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-medium"
          >
            {navMenu}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={logoIcon} alt="logo" />
          <p className="text-[#FFB700] text-3xl font-bold">
            Air<span className="font-normal text-[#006CE4]">Book</span>
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#006CE4] text-white text-xl font-medium">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Navbar;

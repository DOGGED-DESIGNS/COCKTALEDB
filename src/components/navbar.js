// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import imag from "../cocktalelogo.svg";

// import { Lin } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="flex">
          <a href="/">
            <div className="img">
              <img src={imag} alt="" />
            </div>
          </a>

          <div className="links">
            <a href="/">home</a>
            <a href="/about">about</a>
          </div>
        </div>
      </nav>
      ;
    </>
  );
};

export default Nav;

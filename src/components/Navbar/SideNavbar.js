import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SideNavbar = () => {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const linkStyling = `sm:px-4 hover:bg-slate-300 hover:text-black transition-all text-center sm:text-left`;

  const navBar = useRef(null);

  const expandMobileMenu = () => {
    setMobileExpanded(!mobileExpanded);

    const classes = ["h-screen", "fixed", "top-0", "left-0"];

    if (mobileExpanded) {
      navBar.current.classList.remove("h-16");
      navBar.current.classList.add(...classes);
    } else {
      navBar.current.classList.remove(...classes);
      navBar.current.classList.add("h-16");
    }
  };

  return (
    <div
      ref={navBar}
      className="flex flex-row sm:justify-start sm:flex-col sm:gap-6 bg-white w-screen sm:w-80 h-16 sm:h-screen bg-slate-700 text-white font-bold transition-all overflow-hidden"
    >
      <div className="sm:mb-12 sm:mt-12 w-full mt-4">
        <div className="flex flex-row sm:flex-col justify-between px-8">
          <h1 className="text-lg text-center uppercase">react-tw-components</h1>
          <p className="hidden sm:block p-2 text-center">
            Explore react/tailwind css components below
          </p>
          <button className="sm:hidden">
            <FontAwesomeIcon
              onClick={() => expandMobileMenu()}
              icon={faBars}
              size="2x"
            />
          </button>
        </div>

        <div className="flex flex-col gap-8 sm:gap-2 w-full mt-16">
          <Link className={linkStyling} to="/">
            Home
          </Link>
          <Link className={linkStyling} to="/about">
            About
          </Link>
          <Link className={linkStyling} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;

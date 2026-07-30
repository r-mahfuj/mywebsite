import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

const navItems = [
  { id: 1, name: "Home", url: "/#introduction" },
  { 
    id: 2, 
    name: "About", 
    subItems: [
      { name: "Profile Summary", url: "/#profile" },
      { name: "Skills", url: "/#skills" },
      { name: "Experience", url: "/#experience" },
      { name: "Education", url: "/#education" },
      { name: "Achievements", url: "/#achievements" }
    ]
  },
  { 
    id: 4, 
    name: "Publications", 
    subItems: [
      { name: "Journal Articles", url: "/journals" },
      { name: "Conference Papers", url: "/conferences" }
    ]
  },
  { 
    id: 5, 
    name: "Projects", 
    subItems: [
      { name: "Academic Research", url: "/#portfolio" },
      { name: "Computational Modeling", url: "/#portfolio" }
    ]
  },
  { id: 6, name: "Contact", url: "/#contact" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const desktopMenu = navItems.map((item) => {
  if (item.subItems) {
    return (
      <li key={item.id} className="relative group cursor-pointer" onMouseDown={(e) => e.preventDefault()}>
        <div className="hover:text-picto-primary px-5 py-3 mx-1 flex items-center gap-1 transition-colors duration-300">
          {item.name}
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-[100]">
          <ul className="p-2 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-60 flex flex-col gap-1 border border-gray-100">
            {item.subItems.map((sub, idx) => (
              <li key={idx}>
                <Link
                  onClick={handleMenuClick}
                  to={sub.url}
                  smooth
                  className="hover:text-picto-primary hover:bg-purple-50 block p-3 rounded-lg transition-colors duration-200 text-[15px] font-medium"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <Link
        onClick={handleMenuClick}
        to={item.url.toLowerCase()}
        smooth
        className={`hover:text-picto-primary px-5 py-3 mx-1 transition-colors duration-300 block`}
      >
        {item.name}
      </Link>
    </li>
  );
});

const mobileMenu = navItems.map((item) => {
  if (item.subItems) {
    return (
      <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
        <details>
          <summary className="hover:text-picto-primary px-5 py-3 mx-1">{item.name}</summary>
          <ul className="p-2 bg-white rounded-box shadow-sm">
            {item.subItems.map((sub, idx) => (
              <li key={idx}>
                <Link
                  onClick={() => {
                    handleMenuClick();
                    const details = document.querySelectorAll("details");
                    details.forEach((d) => d.removeAttribute("open"));
                  }}
                  to={sub.url}
                  smooth
                  className="hover:text-picto-primary block p-3 rounded-lg"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
    );
  }
  return (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <Link
        onClick={handleMenuClick}
        to={item.url.toLowerCase()}
        smooth
        className={`hover:text-picto-primary px-5 py-3 mx-1 block`}
      >
        {item.name}
      </Link>
    </li>
  );
});

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
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
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {mobileMenu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-picto-primary rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-[18px] shadow-md border-2 border-white/50">
              MR
            </div>
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Mahfujur Rahman
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {desktopMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

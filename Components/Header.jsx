import React from "react";

const Header = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "ERC20",
      link: "/create",
    },
    {
      name: "Contact Us",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];

  return (
    <header className="bg-color-5 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="logo">
            <a href="/">
              <img src="img/logo/log.png" alt="Logo" className="w-16 h-16" />
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:flex-row md:items-center space-x-4">
          {menuList.map((menu, i) => (
            <a
              className="text-white font-normal hover:text-gray-400 transition"
              href={menu.link}
              key={i}
            >
              {menu.name}
            </a>
          ))}
          <a
            href="/create"
            className="top-btn coin-btn rounded-full font-normal"
          >
            Buy token
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={() => {
              document.getElementById("mobile-menu").classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden mobile-menu bg-color-5 md:hidden" id="mobile-menu">
        <ul className="space-y-4 px-6 py-4">
          {menuList.map((menu, i) => (
            <li key={i}>
              <a
                className="block text-white font-normal hover:text-gray-400 transition"
                href={menu.link}
              >
                {menu.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="block text-white font-normal bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full py-2 px-4 text-center"
            >
              Buy token
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

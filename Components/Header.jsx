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
    <header class="bg-color-5 px-6 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <div class="logo">
            <a href="/">
              <img src="img/logo/log.png" alt="Logo" class="h-8" />
            </a>
          </div>
        </div>
        <div class="hidden md:flex md:flex-row md:items-center space-x-4">
          {menuList.map((menu, i) => (
            <a
              class="text-white font-normal hover:text-gray-400 transition"
              href={menu.link}
              key={i}
            >
              {menu.name}
            </a>
          ))}
          <a href="/create" class="top-btn coin-btn rounded-full font-normal">
            Buy token
          </a>
        </div>
        <div class="md:hidden flex items-center">
          <button
            class="outline-none mobile-menu-button"
            onClick={() => {
              document.getElementById("mobile-menu").classList.toggle("hidden");
            }}
          >
            <svg
              class="w-6 h-6 text-white"
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
      <div class="hidden mobile-menu bg-color-5 md:hidden" id="mobile-menu">
        <ul class="space-y-4 px-6 py-4">
          {menuList.map((menu, i) => (
            <li key={i}>
              <a
                class="block text-white font-normal hover:text-gray-400 transition"
                href={menu.link}
              >
                {menu.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              class="block text-white font-normal bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full py-2 px-4 text-center"
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

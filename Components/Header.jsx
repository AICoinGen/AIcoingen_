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
    <header class="header-one bg-color-5 px-6">
      <div class="header-menu-area header-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
              <div class="logo">
                <a href="/">
                  <img src="img/logo/log.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-9">
              <div class="header-right ">
                <a href="#" class="top-btn coin-btn rounded-full font-normal">
                  Buy token
                </a>
              </div>
              <div class="header_menu f-right">
                <nav id="mobile-menu">
                  <ul className="new-nav-class" class="main-menu font-normal">
                    {menuList.map((menu, i) => (
                      <li class=" font-normal" key={i + 1}>
                        <a className="font-normal" href={menu.link}>
                          {menu.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

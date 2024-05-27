import React from "react";

const Footer = () => {
  const coinList = [
    "Ripple",
    "Bitcoin",
    "Ethereum",
    "Litecoin",
    "Coinbase",
    "Skrill",
  ];

  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "ERC20",
      link: "#",
    },
    {
      name: "Contact Us",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Detail",
      link: "#",
    },
  ];

  return (
    <footer className="footer1 bg-black text-white py-10">
      <div className="footer-area px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="footer-content logo-footer">
                <div className="footer-head">
                  <div className="footer-logo mb-4">
                    <a href="#">
                      <img
                        src="img/logo/log.png"
                        className="w-16 h-16"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="footer-icons">
                    <ul className="flex space-x-4">
                      {/* {[1, 2, 3, 4, 5].map((social, i) => (
                        <li key={i}>
                          <a href="#">
                            <img src={`img/about/midea${i + 1}.png`} alt="Social" />
                          </a>
                        </li>
                      ))} */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="footer-content rs-mar-0">
                <div className="footer-head">
                  <h4 className="text-xl font-bold mb-4">Payment Options</h4>
                  <ul className="footer-list mb-4">
                    {coinList.map((coin, i) => (
                      <li key={i}>
                        <a className="hover:underline">{coin}</a>
                      </li>
                    ))}
                  </ul>
                  <ul className="footer-list">
                    {menuList.map((menu, i) => (
                      <li key={i}>
                        <a href={menu.link} className="hover:underline">
                          {menu.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="footer-content last-content rs-mar-0">
                <div className="footer-head">
                  <h4 className="text-xl font-bold mb-4">Subscribe</h4>
                  <p className="mb-4">
                    Join our newsletter to stay updated with the latest news and
                    special sales. Let's your email address here!
                  </p>
                  <div class="subs-feilds">
                    <div class="suscribe-input">
                      <input
                        type="email"
                        class="email form-control width-80 rounded-lg border-white"
                        id="sus_email"
                        placeholder="Type Email "
                      />
                      <button
                        type="submit"
                        id="sus_submit"
                        class="subs-btn coin-btn rounded-lg"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

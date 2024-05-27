import { BsBoxArrowRight } from "react-icons/bs";
import React from "react";

const SideBar = ({ setActive, setOpen, open, address, setTransfer }) => {
  const menuList = [
    {
      name: "Dashbord",
    },
    {
      name: "Your Token",
    },
    {
      name: "Donation",
    },
  ];
  return (
    <div class="col-xl-3 col-lg-3 col-md-4">
      <aside class="sidebar">
        <div class="dashboard-side">
          <div class="dashboard-head rounded-xl bg-black shadow-xl">
            <div class="dashboard-profile">
              <img src="img/about/profile.png" alt="" />
              <div class="profile-content">
                <span class="pro-name">AI Coin Gen</span>
                <span class="pro-number">{address.slice(0, 15)}...</span>
              </div>
            </div>
          </div>
          <div class="dashboard-menu rounded-xl bg-black shadow-xl">
            <ul className="">
              {menuList.map((el, i) => (
                <li
                  onClick={() => setOpen(el.name)}
                  class={open == el.name ? "active " : ""}
                >
                  <div className="flex flex-row items-center cursor-pointer space-x-2 py-3 hover:bg-[#ff06b7] hover:rounded-lg hover:p-2">
                    <BsBoxArrowRight />
                    {/* <span className="new_space"> </span> */}
                    <span>{el.name}</span>
                  </div>
                </li>
              ))}
              <li onClick={() => setActive(true)}>
                <div className="flex flex-row items-center cursor-pointer space-x-2 py-3 hover:bg-[#ff06b7] hover:rounded-lg hover:p-2">
                  <BsBoxArrowRight />
                  <span>Create Token</span>
                </div>
              </li>
              <li onClick={() => setTransfer(true)}>
                <div className="flex flex-row items-center space-x-2 py-3 hover:bg-[#ff06b7] hover:rounded-lg hover:p-2">
                  <BsBoxArrowRight />
                  <span>Token Transfer</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;

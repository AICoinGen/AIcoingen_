import React from "react";

const HeroSection = () => {
  return (
    <div className="intro-area intro-area-2 relative pt-64 pb-16 ">
      <div className="bg-wrapper absolute inset-0">
        <img
          src="img/background/bg2.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="intro-content relative z-10">
        <div className="slider-content">
          <div className="container  md:px-10">
            <div className="row flex justify-between  items-center">
              <div className="w-full md:w-1/2">
                <div className="slide-all-text  md:ml-7">
                  <div
                    className="layer-2 wow fadeInUp text-3xl py-2"
                    data-wow-delay="0.3s"
                  >
                    <h1 className="title-2 text-white">
                      Create your own{" "}
                      <span className="text-[#ff03b7]">ERC20 </span>
                      token with <span className="text-[#ff03b7]">AI </span>
                    </h1>
                  </div>
                  <div className="space-x-4 mt-4" data-wow-delay="0.7s">
                    <a
                      href="contact.html"
                      className="bg-white px-5 py-3 rounded-full text-black text-md"
                    >
                      Get Started
                    </a>
                    <a
                      href="coin.html"
                      className="bg-black border-2 px-5 py-3 rounded-full text-white text-md"
                    >
                      White Paper
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-6 -mr-28 md:mt-0">
                <div
                  className="slide-images wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <img
                    src="img/slider/coi.png"
                    alt="Coin"
                    className="mx-auto md:ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

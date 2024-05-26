import React from "react";

const HeroSection = () => {
  return (
    <div class="intro-area intro-area-2">
      <div class="bg-wrapper">
        <img src="img/background/bg2.jpg" alt="" />
      </div>
      <div class="intro-content">
        <div class="slider-content">
          <div class="container" className="mx-8">
            <div class="row d-flex flex-wrap align-items-center">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="slide-all-text">
                  <div
                    class="layer-2 wow fadeInUp text-3xl"
                    data-wow-delay="0.3s"
                  >
                    <h1 class="title-2">
                      Create your own{" "}
                      <span class="color-text-bold">ERC20 </span>token with{" "}
                      <span class="color-text-bold">AI </span>{" "}
                    </h1>
                  </div>

                  <div class=" space-x-4" data-wow-delay="0.7s">
                    <a
                      href="contact.html"
                      className="bg-white px-5 py-3  rounded-full text-black text-md"
                    >
                      Get Started
                    </a>
                    <a
                      href="coin.html"
                      class="bg-black border-2 px-5 py-3  rounded-full text-white text-md"
                    >
                      White Paper
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="slide-images wow fadeInUp" data-wow-delay="0.3s">
                  <img src="img/slider/coi.png" alt="" />
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

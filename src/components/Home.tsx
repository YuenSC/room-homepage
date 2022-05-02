import React, { useState } from "react";

import desktopImageHeroOne from "../images/desktop-image-hero-1.jpg";
import imageAboutDark from "../images/image-about-dark.jpg";
import imageAboutLight from "../images/image-about-light.jpg";
import mobileImageHeroOne from "../images/mobile-image-hero-1.jpg";

const Home = () => {
  const [first, setFirst] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* FlexBox 1 */}
        <picture className="md:h-fit md:w-2/3 object-cover">
          <source media="(min-width: 768px)" srcSet={desktopImageHeroOne} />
          <img
            className="h-full w-full"
            src={mobileImageHeroOne}
            alt="mobile"
          />
        </picture>
        <div className="p-10 md:w-1/3">
          <h2 className="font-bold text-4xl mb-4 md:text-xl">
            Discover innovative ways to decorate
          </h2>
          <p className="mb-10 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod
            impedit optio architecto in quos quo dolore, molestias vel maxime?
          </p>
          <p className="text-2xl">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/* FlexBox 2 */}
      {/* <div className="flex flex-col md:flex-row">
        <img className="h-full w-full object-cover" src={imageAboutDark} />

        <div className="p-10">
          <h2 className="font-bold text-2xl mb-4">ABOUT OUR FURNITURE</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil
            eaque ea corporis porro cumque eum! Cum vitae, excepturi sed dolores
            velit dignissimos facere ipsum quis laudantium, voluptates sit
            asperiores harum corrupti minima nesciunt nam id omnis cumque
            ratione deserunt, fugiat maxime? Cupiditate quidem repellendus
            consectetur accusantium optio, libero iste.
          </p>
        </div>

        <img className="h-full w-full object-cover" src={imageAboutLight} />
      </div> */}
    </>
  );
};

export default Home;

import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

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
        {/* <img
          className="object-cover object-left"
          src={mobileImageHeroOne}
          srcSet={`${mobileImageHeroOne} 480w, ${desktopImageHeroOne} 800w`}
          sizes="(max-width: 600px) 100vw, 60vw"
          alt="mobile"
        /> */}
        <picture>
          <source media="(max-width: 799px)" srcSet={mobileImageHeroOne} />
          <source media="(min-width: 800px)" srcSet={desktopImageHeroOne} />
          <img src={desktopImageHeroOne} />
        </picture>

        <div className="flex flex-col justify-center items-center px-8 py-16 md:px-16">
          <div>
            <h2 className="font-bold text-4xl mb-4">
              Discover innovative ways to decorate
            </h2>
            <p className="mb-10 text-darkGray font-medium">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <a href="#" className="block w-fit">
              <div className="flex items-center w-fit select-none">
                <p className="text-2xl tracking-[0.75rem]">SHOP NOW</p>
                <BsArrowRight className="inline-block w-10 h-8 ml-9" />
              </div>
            </a>
          </div>
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

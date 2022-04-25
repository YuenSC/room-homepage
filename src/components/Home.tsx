import React from "react";

import desktopImageHeroOne from "../images/desktop-image-hero-1.jpg";
import mobileImageHeroOne from "../images/mobile-image-hero-1.jpg";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* FlexBox 1 */}
      {/*   Image 1 */}
      {/*   Info Box */}
      <div>
        <img className="h-full w-full object-cover" src={mobileImageHeroOne} />
      </div>

      <div>
        <h1 className="text-4xl font-medium">Info Box 1</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
      </div>
    </div>
  );
};

export default Home;

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

      <h1 className="text-4xl font-medium">Info Box 1</h1>
    </div>
  );
};

export default Home;

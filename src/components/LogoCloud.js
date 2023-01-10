import React from "react";
import logoOne from "../images/logo_cloud/website-aaj.png";
import logoTwo from "../images/logo_cloud/website-avmartindale.png";
import logoThree from "../images/logo_cloud/website-abta.png";
import logoFour from "../images/logo_cloud/website-fja2.png";
import logoFive from "../images/logo_cloud/website-superlawyers.png";

const LogoCloud = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="w-10%" src={logoOne} alt="AAJ" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="w-10%" src={logoTwo} alt="Medical" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="w-10%" src={logoThree} alt="ABTA" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img className="w-10%" src={logoFour} alt="FJA" />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img className="w-10%" src={logoFive} alt="SL" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;

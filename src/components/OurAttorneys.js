import React from "react";
import attorneyHero from "../images/attorney_hero.png";
import attorneyOne from "../images/attorneys/alex-alvarez.png";
import attorneyTwo from "../images/attorneys/nick-reyes.png";
import attorneyThree from "../images/attorneys/herb-borroto.png";
import attorneyFour from "../images/attorneys/phillip-holden.png";
import attorneyFive from "../images/attorneys/michael-alvarez.png";
import attorneySix from "../images/attorneys/xavier-navarro.png";
import attorneySeven from "../images/attorneys/william-brown.png";
import attorneyEight from "../images/attorneys/logo.png";

const OurAttorneys = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <img className="" src={attorneyHero} alt="Hero Background" />
      </div>
      <div className="mx-auto pt-8 max-w-7xl grid grid-cols-4 gap-4">
        <div className="relative">
          <img src={attorneyOne} alt="bg" className="hover:blur-sm" />
        </div>
        <div className="relative">
          <img src={attorneyTwo} alt="bg" className="hover:blur-sm" />
        </div>
        <div className="relative">
          <img src={attorneyThree} alt="bg" className="hover:blur-sm" />
        </div>
        <div className="relative">
          <img src={attorneyFour} alt="bg" className="hover:blur-sm" />
        </div>
        <div className="relative">
          <img src={attorneyFive} alt="bg" className="hover:blur-sm" />
        </div>
        <div className="relative">
          <img src={attorneySix} alt="bg" className="hover:blur-sm" />
        </div>
        <div className="relative">
          <img src={attorneySeven} alt="bg" className="hover:blur-sm" />
        </div>
        <div className="relative">
          <img src={attorneyEight} alt="bg" className="hover:blur-sm" />
        </div>
      </div>
    </div>
  );
};

export default OurAttorneys;

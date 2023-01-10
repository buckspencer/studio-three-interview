import React from "react";
import attorneyEight from "../images/attorneys/logo.png";
import attorneyFive from "../images/attorneys/michael-alvarez.png";
import attorneyFour from "../images/attorneys/phillip-holden.png";
import attorneyHero from "../images/attorney_hero.png";
import attorneyOne from "../images/attorneys/alex-alvarez.png";
import attorneySeven from "../images/attorneys/william-brown.png";
import attorneySix from "../images/attorneys/xavier-navarro.png";
import attorneyThree from "../images/attorneys/herb-borroto.png";
import attorneyTwo from "../images/attorneys/nick-reyes.png";

const OurAttorneys = () => {
  return (
    <div className="bg-white mt-11">
      <div className="mx-auto">
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

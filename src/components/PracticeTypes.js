import React from "react";
import medicalImage from "../images/iStock-1341484868-medical 1.png";
import tobaccoImage from "../iStock-1257982883 1.png";
import injuryImage from "../iStock-1347484703-personal injury 1.png";

const PracticeTypes = () => {
  return (
    <div className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <dl className="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
          <div className="relative">
            <img src={medicalImage} alt="bg" />
            <p className="absolute text-lg font-Cormorant text-white pt-20 inset-20">
              Medical Malpractice
            </p>
          </div>
          <div className="relative">
            <img src={medicalImage} alt="bg" />
            <p className="absolute text-lg font-Cormorant text-white pt-20 inset-20">
              Tobacco Litigation
            </p>
          </div>
          <div className="relative">
            <img src={medicalImage} alt="bg" />
            <p className="absolute text-lg font-Cormorant text-white pt-20 inset-20">
              Personal Injury
            </p>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PracticeTypes;

import React from "react";
import medicalImage from "../images/iStock-1341484868-medical 1.png";
import tobaccoImage from "../images/iStock-1257982883 1.png";
import injuryImage from "../images/iStock-1347484703-personal injury 1.png";

const PracticeTypes = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto mb-20">
        <dl className="grid grid-cols-3 gap-2">
          <div className="relative mx-auto bg-[#1F251E]">
            <img
              src={medicalImage}
              alt="bg"
              className="sepia opacity-85 brightness-75 contrast-50 hover:opacity-30"
            />
            <p className="absolute text-2xl font-Cormorant text-white top-1/2 left-1/2 -translate-x-1/2">
              Medical Malpractice
            </p>
          </div>
          <div className="relative mx-auto bg-[#1F251E]">
            <img
              src={tobaccoImage}
              alt="bg"
              className="sepia opacity-85 brightness-75 contrast-50 hover:opacity-30"
            />
            <p className="absolute text-2xl font-Cormorant text-white top-1/2 left-1/2 -translate-x-1/2">
              Tobacco Litigation
            </p>
          </div>
          <div className="relative mx-auto bg-[#1F251E]">
            <img
              src={injuryImage}
              alt="bg"
              className="sepia opacity-85 brightness-75 contrast-50 hover:opacity-30"
            />
            <p className="absolute text-2xl font-Cormorant text-white top-1/2 left-1/2 -translate-x-1/2">
              Personal Injury
            </p>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PracticeTypes;

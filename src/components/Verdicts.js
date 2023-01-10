import React from "react";
import verdictIcon from "../images/talf-final-logo-2022-04 1.png";

const features = [
  {
    name: "$43M - Verdict",
    description: "Lipp v. Philip Morris",
  },
  {
    name: "$41M - Verdict",
    description: "Schlefstein v. R.J. Reynolds",
  },
  {
    name: "$46M - Verdict",
    description: "Lipp v. Philip Morris",
  },
  {
    name: "$43M - Verdict",
    description: "Lipp v. Philip Morris",
  },
];

const Verdicts = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto px-8 py-20">
        <div className="mx-auto max-w-[506px] text-center mb-32">
          <h2 className="mx-10 font-Cormorant text-black sm:text-4xl font-light">
            Lorem Ipsum Dolor Sit Amit
          </h2>
          <p className="mx-12 mt-4 font-body text-xs text-justify leading-[23.58px] text-black">
            The Alvarez Law Firm is a trial practice law firm representing
            individuals and the families of those injured due to the negligence
            of others. The firm has an extensive background and successful track
            record in the litigation of pharmaceutical cases, including injuries
            sustained as the result of harmful dietary supplements; medical
            malpractice suits; cases involving defective products; catastrophic
            automobile and motorcycle accidents; wrongful death; and shipping
            and boating accidents.
          </p>
        </div>
        <hr />
        <p className="mt-8 max-w-xl font-Cormorant text-lg leading-8 text-black text-left font-light">
          Our Results
        </p>
        <div className="flex justify-between">
          <h2 className="flex w-50% text-3xl font-Cormorant text-black sm:text-4xl text-left font-light">
            Over $500,000,000 in Verdicts.
          </h2>
          <button
            href="#"
            className="inline-flex px-2.5 py-1.5 border items-center border-transparent bg-[#4B524A] text-xs font-Cormorant text-white"
          >
            View All Results
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-white pb-8 shadow">
                <div className="-mt-6">
                  <div className="pt-20 pb-3">
                    <span className="inline-flex items-center justify-center bg-white">
                      <img
                        className="object-cover"
                        src={verdictIcon}
                        alt="Hero Background"
                        width="88px"
                        height="74px"
                      />
                    </span>
                  </div>
                  <hr style={{ width: "50%", margin: "auto" }} />
                  <h3 className="mt-4 text-lg font-Cormorant  text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm font-['Europa-Regular'] leading-7 text-[#494949]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-10" />
      </div>
    </div>
  );
};

export default Verdicts;

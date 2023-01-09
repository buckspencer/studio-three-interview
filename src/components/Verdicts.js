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
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center mb-20 ">
          <h2 className="text-3xl font-bold font-Cormorant tracking-tight text-gray-900 sm:text-4xl">
            Lorem Ipsum Dolor Sit Amit
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-Cormorant text-lg leading-8 text-gray-600">
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
        <div>
          <p className="mt-4 max-w-xl font-Cormorant text-lg leading-8 text-gray-600 text-left">
            Our Results
          </p>
          <h2 className="text-3xl font-Cormorant tracking-tight text-gray-900 sm:text-4xl text-left">
            Over $500,000,000 in Verdicts.
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-4 ">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-white pb-8 drop-shadow-lg">
                  <div className="-mt-6">
                    <div className="pt-20">
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
                    <h3 className="mt-8 text-lg font-Cormorant  text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-sm font-Cormorant leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verdicts;

import React from "react";
import clientReview from "../images/client-reviews.png";

const FromOurClients = () => {
  return (
    <div className="md:relative ">
      <div className="mx-auto pt-10 w-full max-w-7xl pb-20 text-center bg-[#5B6659] lg:py-48 lg:text-left">
        <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className=" font-Cormorant text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            From our clients
          </h1>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-white md:mt-5 md:max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim
            velit, molestie ut mauris eget, tempor cursus enim.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-full border border-transparent bg-[#B19B6F] text-base font-Cormorant text-white md:py-2 md:px-10 md:text-lg"
              >
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 mt-10 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-1 flex-col">
            <img className="mx-auto " src={clientReview} alt="" />
          </div>
          <div className="flex flex-1 flex-col">
            <img className="mx-auto " src={clientReview} alt="" />
          </div>
          <div className="flex flex-1 flex-col">
            <img className="mx-auto " src={clientReview} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurClients;

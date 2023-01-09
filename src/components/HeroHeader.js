import heroBackground from "../images/header-standin.png";
// import heroLogo from "../images/talf-final-logo-2022-01 1.png";

export default function HeroHeader() {
  return (
    <div className="bg-white">
      <main>
        <div>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <img className="" src={heroBackground} alt="Hero Background" />
          </div>
          {/* Started some of the buildout here. */}
          {/* <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={heroBackground}
                    alt="Hero Background"
                  />
                </div>

                <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8 ">
                  <div className="float-center">
                    <img className="" src={heroLogo} alt="Hero Logo" />
                    <span className="float-center">
                      <button
                        type="button"
                        className="relative  bg-[#B19B6F] px-2 py-3 text-sm font-Cormorant text-white"
                      >
                        Schedule a free consultation
                      </button>
                    </span>
                  </div>

                  <span className="isolate inline-flex mt-20">
                    <button
                      type="button"
                      className="relative inline-flex items-center bg-[#2C352B] px-8 py-6 text-sm font-Cormorant text-white"
                    >
                      About
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center  bg-[#2C352B] px-8 py-4 text-sm font-Cormorant text-white"
                    >
                      Our Attorneys
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center  bg-[#2C352B] px-8 py-4 text-sm font-Cormorant text-white"
                    >
                      Practice Areas
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center  bg-[#2C352B] px-8 py-4 text-sm font-Cormorant text-white"
                    >
                      Case Results
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center  bg-[#2C352B] px-8 py-4 text-sm font-Cormorant text-white"
                    >
                      Contact
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}

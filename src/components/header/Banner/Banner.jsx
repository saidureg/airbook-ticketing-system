import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="hero h-[520px]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-5 text-3xl md:text-5xl font-medium text-left text-white">
            Welcome to <span className="font-bold text-[#006CE4]">AirBook</span>
          </h1>
          <div className="bg-base-100 lg:h-[195px] rounded-lg p-4 md:p-8 w-full lg:w-[1014px]">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-3">
              <div>
                <button className="btn">
                  <input
                    type="radio"
                    name="radio-3"
                    className="radio radio-secondary"
                  />
                  One Way
                </button>
                <button className="btn btn-primary ml-3">
                  <input
                    type="radio"
                    name="radio-3"
                    className="radio radio-secondary"
                    checked
                  />
                  Round Trip
                </button>
              </div>
              <div className="my-2 lg:my-0">
                <button className="btn text-[#006CE4]">1 Traveller </button>
                <button className="btn text-[#006CE4] ml-3">Economy</button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                  {/* first */}
                  <div className="border rounded-lg flex items-center gap-3 p-2 text-sm text-[#09182E]">
                    <h6 className="pl-2 font-semibold">DAC</h6>
                    <div className="border-l-2">
                      <h3 className="pl-3 font-medium">Dhaka</h3>
                      <p className="pl-3 font-normal text-[10px]">
                        Hazrat Shahjalal Internatio
                      </p>
                    </div>
                  </div>
                  {/* second */}
                  <div className="border rounded-lg flex items-center gap-3 p-2 text-sm text-[#09182E]">
                    <h6 className="pl-2 font-semibold">Cxb</h6>
                    <div className="border-l-2">
                      <h3 className="pl-3 font-medium">Cox’s Bazar</h3>
                      <p className="pl-3 font-normal text-[10px]">
                        Cox’s Bazar international
                      </p>
                    </div>
                  </div>
                  {/* third */}
                  <div className="border rounded-lg flex items-center gap-3 p-2 text-sm text-[#09182E]">
                    <h6 className="pl-2 font-semibold">03</h6>
                    <div className="border-l-2">
                      <h3 className="pl-3 font-medium">October</h3>
                      <p className="pl-3 font-normal text-[10px]">
                        Tuesday, 2023
                      </p>
                    </div>
                  </div>
                  {/* four */}
                  <div className="border rounded-lg flex items-center gap-3 p-2 text-sm text-[#09182E]">
                    <h6 className="pl-2 font-semibold">05</h6>
                    <div className="border-l-2">
                      <h3 className="pl-3 font-medium">October</h3>
                      <p className="pl-3 font-normal text-[10px]">
                        Tuesday, 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg py-5 px-4 w-1/2 lg:w-auto text-white flex justify-center items-center bg-[#FFB700]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

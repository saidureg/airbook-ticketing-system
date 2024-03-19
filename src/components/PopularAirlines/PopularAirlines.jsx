import popular1 from "../../assets/popular1.png";
import popular2 from "../../assets/popular2.png";
import popular3 from "../../assets/popular3.png";
import popular4 from "../../assets/popular4.png";
import popular5 from "../../assets/popular5.png";

const PopularAirlines = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <h3 className="text-[#09182E] text-4xl font-semibold mb-12 mx-2 lg:mx-0">
        Popular Airlines
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* 1 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular1} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Biman Bangladesh Airlines
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular2} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Emirates
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular3} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Turkish Airlines
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular4} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Malaysia Airlines
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular5} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Singapore Airlines
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular1} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Biman Bangladesh Airlines
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 7 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular2} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Emirates
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 8 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular5} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Singapore Airlines
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 9 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular1} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Biman Bangladesh Airlines
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 10 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular5} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Singapore Airlines
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 11 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular3} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Turkish Airlines
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
        {/* 12 */}
        <div className="flex items-center gap-6">
          <div>
            <img className="w-[50px] h-[50px]" src={popular2} alt="" />
          </div>
          <div>
            <h1 className="text-[#006CE4] text-sm lg:text-lg font-semibold">
              Emirates
            </h1>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
                  fill="#FFB700"
                />
              </svg>
              <p className="text-xs font-normal">4</p>
              <p className="text-xs font-light">( 783 review )</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularAirlines;

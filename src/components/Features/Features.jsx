import fraturesImg1 from "../../assets/fratures1.jpg";
import fraturesImg2 from "../../assets/fratures2.jpg";
import fraturesImg3 from "../../assets/fratures3.jpg";
const Features = () => {
  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      <h3 className="text-[#09182E] text-3xl lg:text-4xl font-semibold mb-12 mx-3 lg:mx-0">
        Featured Destinations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 lg:px-0">
        {/* first card */}
        <div className="card  bg-base-100 shadow-xl">
          <figure className="p-2 rounded-lg">
            <img
              className="rounded-lg h-[230px] w-full"
              src={fraturesImg1}
              alt="Fratures"
            />
          </figure>
          <div className="card-body">
            <p className="text-[#09182E] text-lg font-bold">
              Stopover opportunity in İstanbul with Turkish Airlines
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#FFB700] px-20">View More</button>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="card  bg-base-100 shadow-xl">
          <figure className="p-2 rounded-lg">
            <img
              className="rounded-lg h-[230px] w-full"
              src={fraturesImg2}
              alt="Fratures"
            />
          </figure>
          <div className="card-body">
            <p className="text-[#09182E] text-lg font-bold">
              Stopover opportunity in İstanbul with Turkish Airlines
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#FFB700] px-20">View More</button>
            </div>
          </div>
        </div>
        {/* third card */}
        <div className="card  bg-base-100 shadow-xl">
          <figure className="p-2 rounded-lg">
            <img
              className="rounded-lg h-[230px] w-full"
              src={fraturesImg3}
              alt="Fratures"
            />
          </figure>
          <div className="card-body">
            <p className="text-[#09182E] text-lg font-bold">
              Stopover opportunity in İstanbul with Turkish Airlines
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#FFB700] px-20">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

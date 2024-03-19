import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";
const OfferSection = () => {
  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      <h3 className="text-[#09182E] text-4xl font-semibold mb-12 mx-2 lg:mx-0">
        Deals and Offers
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-5">
        {/* first */}
        <div className="bg-base-100 shadow-xl flex items-center gap-3 rounded-lg mx-8 lg:mx-0">
          <div className="w-[235px]">
            <img
              className="w-full h-full rounded-lg"
              src={offer1}
              alt="Offer1"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xs font-medium">With bkash payment only</h3>
            <p className="text-[#006CE4] font-semibold">
              up to 14% discount on the base fare of domestic flights
            </p>
          </div>
        </div>
        {/* second */}
        <div className="bg-base-100 shadow-xl flex items-center gap-3 rounded-lg mx-8 lg:mx-0">
          <div className="w-[235px]">
            <img
              className="w-full h-full rounded-lg"
              src={offer2}
              alt="Offer2"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xs font-medium">With bkash payment only</h3>
            <p className="text-[#006CE4] font-semibold">
              up to 14% discount on the base fare of domestic flights
            </p>
          </div>
        </div>
        {/* third */}
        <div className="bg-base-100 shadow-xl flex items-center gap-3 rounded-lg mx-8 lg:mx-0">
          <div className="w-[235px]">
            <img
              className="w-full h-full rounded-lg"
              src={offer3}
              alt="Offer3"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xs font-medium">With bkash payment only</h3>
            <p className="text-[#006CE4] font-semibold">
              up to 14% discount on the base fare of domestic flights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;

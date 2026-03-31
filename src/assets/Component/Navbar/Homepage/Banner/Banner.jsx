import bannerImage from "../../../../../../../IPL-dream-11-resource/assets/banner-main.png";

const Banner = () => {
  return (
    <>
      <div>
        <div className="container mx-auto  rounded-3xl p-15 text-center mt-6 bg-linear-to-r from-orange-500 to-yellow-400">
          <div className="flex justify-center">
            <img className="flex-0 justify-center" src={bannerImage} alt="" />
          </div>
          <h2 className="font-bold text-[25px] md:text-[40px]">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p>Beyond Boundaries Beyond Limits</p>

          <button className="btn bg-[#E7FE29] mt-3 border-none rounded-full">
            Claim Free Credit
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;

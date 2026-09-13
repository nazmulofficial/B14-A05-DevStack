import bannerImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="py-20 flex justify-between items-center">
      <div>
        <h2 className="text-6xl font-bold font-inter">
          Build Your Ideal <br /> <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>{" "}
        </h2>
        <p className="w-120 py-8 font-medium text-gray-500">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-8 ">
          <button>
            {" "}
            <a
              href=""
              className="bg-linear-to-r from-[#F97316] to-[#EC4899] p-2 rounded-lg text-white"
            >
              Explore Technologies
            </a>{" "}
          </button>
          <button className="border-3 border-[#1818eb] p-1 rounded-lg w-42">
            {" "}
            <a href="">Learn More</a>{" "}
          </button>
        </div>
      </div>
      <img src={bannerImage} alt="" />
    </div>
  );
};

export default Hero;

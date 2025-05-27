import bannerMobileImage from "../../../assets/banner-mobile-bg.png";
import { FcSimCardChip } from "react-icons/fc";
import { HiMiniSignal } from "react-icons/hi2";
const Banner = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex lg:flex-row  justify-between mt-14">
        <div>
          <span className=" backdrop-blur-md bg-[#99E39E1A] px-4 py-0.5  rounded-full text-[#99E39E]">
            Future of Software Technology
          </span>
          <div className="w-[588px] font-semibold mt-6">
            <h1 className="text-white text-7xl ">
              Fast and Secure Cryptocurrency Exchange.
            </h1>
            <p className="text-gray-300 mt-4">
              Trade cryptocurrencies with ease, security, and advanced features
              on our cutting-edge platform.
            </p>
            <button className="mt-6 py-[7px] text-[1rem] px-[16px] rounded-2xl font-semibold capitalize bg-[#99E39E] text-black hover:bg-[#83e98a] transition-all duration-300 sm:flex hidden">
              Explore Now
            </button>
          </div>
        </div>
        <div>
          <div className="w-[584px] text-white relative  ">
            <img className="" src={bannerMobileImage} alt="" />
            <svg
              className=" absolute top-6 left-6 z-10"
              viewBox="0 0 300 300"
              width="100"
              height="100"
            >
              {/* Circle Path */}
              <defs>
                <path
                  id="circlePath"
                  d="M 150,150
                         m -100,0
                         a 100,100 0 1,1 200,0
                         a 100,100 0 1,1 -200,0"
                />
              </defs>

              {/* Text Around Circle */}
              <text fill="white" fontSize="16" fontFamily="Arial">
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  Dangerous Curves Ahead Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Consequuntur voluptatum qui tenetur suscipit
                  voluptates cumque possimus ab quo aut eos?
                </textPath>
              </text>

              {/* Center Dot */}
              <circle cx="150" cy="150" r="5" fill="white" />
            </svg>

            {/* progress ber  */}
            <svg
              className="h-[100px] w-[100px] absolute top-16 right-48 backdrop-blur-md p-0.5 rounded-b-xl"
              viewBox="0 0 100 100"
            >
              <circle
                className="stroke-current text-gray-200"
                strokeWidth={5}
                cx={50}
                cy={50}
                r={40}
                fill="transparent"
              />
              <circle
                style={{
                  strokeDasharray: 100,
                  strokeDashoffset: `20`,
                  transition: "stroke-dashoffset 0.35s",
                  transform: "rotate(-90deg)",
                  transformOrigin: "50% 50%",
                }}
                className="progress-ring__circle stroke-current text-indigo-500"
                strokeWidth={5}
                strokeLinecap="round"
                cx={50}
                cy={50}
                r={40}
                fill="transparent"
                strokeDashoffset={100}
              />
              <text
                x={50}
                y={50}
                fontFamily="lato"
                fontSize={10}
                textAnchor="middle"
                alignmentBaseline="middle"
                className="fill-current"
              >
                +60%
              </text>
            </svg>

            {/* bank card  */}

            <div className="absolute -left-20 bottom-60 bg-gradient-to-bl from-green-700  to-gray-900 text-white w-[300px] rounded-2xl p-4 font-semibold">
              <div className="flex justify-between text-lg">
                <h1>
                  <HiMiniSignal />
                </h1>
                <h1>VISA</h1>
              </div>
              <p className="mt-8 text-lg tracking-widest ">
                2516 4816 4845 2467
              </p>
              <div className="flex justify-between mt-3">
                <div>
                  <p className="text-[12px]">Card Holder Name</p>
                  <p>Fajle Rabbi Fahim</p>
                </div>
                <div>
                  <p className="text-[12px]">Expire Date</p>
                  <p>05/30</p>
                </div>
                <div>
                  <p className="text-4xl">
                    <FcSimCardChip />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

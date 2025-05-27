import Marquee from "react-fast-marquee";

const TrustedPatner = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center mt-16 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Trusted by top <span className="text-[#99E39E]">crypto platforms</span>
      </h1>

      <div className="relative w-full max-w-6xl mx-auto">
        <Marquee
          pauseOnHover
          speed={50}
          gradient={true}
          gradientColor={[0, 0, 0]}
          gradientWidth={60}
        >
          {[
            "Samsung",
            "Apple",
            "BMW",
            "Mercedes",
            "Toyota",
            "Sony",
            "Nikon",
            "Rayban",
            "Rolex",
            "Mercedes",
            "Toyota",
            "Sony",
            "Nikon",
          ].map((brand, index) => (
            <p
              key={index}
              className="mx-10 p-4 text-2xl sm:text-3xl font-extrabold italic bg-gradient-to-r from-[#99E39E] to-white text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
            >
              {brand}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedPatner;

import Navbar from "../../Components/Navbar";
import Banner from "../../Pages/HomePage/Banner/Banner";
import TrustedPatner from "../../Pages/HomePage/TrustedPatner/TrustedPatner";

const HomeLayout = () => {
  return (
    <div className="bg-black h-full  px-[24px]">
      <nav>
        <Navbar />
      </nav>
      <main>
        {/* banner section  */}
        <Banner />

        {/* Trusted Partners  */}
        <TrustedPatner />
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;

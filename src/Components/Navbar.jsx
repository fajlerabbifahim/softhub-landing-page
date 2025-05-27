import { useState } from "react";
// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between w-full relative  rounded-full py-[32px]">
        {/* logo */}
        <h1 className="text-white text-2xl font-semibold">
          Soft<span className="text-[#99E39E]">Hub</span>
        </h1>

        {/* nav links */}
        <ul className="items-center gap-[20px] text-[1rem] text-white md:flex hidden">
          <li className="before:w-0 hover:before:w-full before:bg-[#99E39E] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#99E39E] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            home
          </li>

          <li className="before:w-0 hover:before:w-full before:bg-[#99E39E] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#99E39E] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            features
          </li>

          <li className="before:w-0 hover:before:w-full before:bg-[#99E39E] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#99E39E] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            blogs
          </li>

          <li className="before:w-0 hover:before:w-full before:bg-[#99E39E] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#99E39E] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            shop
          </li>
        </ul>

        {/* action buttons */}
        <div className="items-center gap-[10px] flex">
          <button className="py-[7px] text-[1rem] px-[16px] rounded-2xl font-semibold capitalize bg-[#99E39E] text-black hover:bg-[#83e98a] transition-all duration-300 sm:flex hidden">
            Get Template
          </button>

          <CiMenuFries
            className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>

        {/* mobile sidebar */}
        <aside
          className={` ${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-[200px] opacity-0 z-[-1]"
          } md:hidden bg-white p-4 text-center absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
        >
          <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              home
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              features
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              blogs
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              shop
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;

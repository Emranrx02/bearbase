import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { slide as Menu } from "react-burger-menu";

export default function NavBar() {
  const NavItems = [
    { name: "THE arctic", id: "home" },
    { name: "who der?", id: "about" },
    { name: "beronomics", id: "beronomics" },
  ];

  const handleScroll = (list: string) => {
    console.log(list);
    document.getElementById(list)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="py-7 z-50 px-11 justify-between w-full items-center flex fixed">
      <Image
        src={"/log.svg"}
        alt="logo"
        width={1920}
        height={1920}
        className="w-24"
      />
      <div className="flex text-base lg:text-lg font-bold space-x-4 lg:space-x-7 items-center">
        <div className="md:flex space-x-4 items-center hidden">
          <ul className="flex  space-x-4 lg:space-x-7 ">
            {NavItems.map((item) => (
              <li
                onClick={() => handleScroll(item.id)}
                className="uppercase hover:text-[#B3D1DC] cursor-pointer"
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <button className="uppercase hover:bg-[#B3D1DC] border-t-4 font-medium text-lg lg:text-2xl border-r-8 border-b-8 border-l-4 rounded-xl border-black px-5 py-1">
            buy $BER
          </button>
        </div>
        <div className="flex items-center gap-3 ">
          <FaTelegramPlane size={40} />
          <BsTwitterX size={33} />
        </div>
        <div className="md:hidden block">
          <Menu right>
            <ul className="flex flex-col space-y-5">
              {NavItems.map((item) => (
                <li
                  onClick={() => handleScroll(item.id)}
                  className="uppercase"
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <button className="uppercase mt-5 border-t-4 font-medium bg-white text-lg lg:text-2xl border-r-8 border-b-8 border-l-4 rounded-xl border-black text-black px-5 py-1">
              buy $BER
            </button>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

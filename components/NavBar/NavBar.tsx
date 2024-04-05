import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function NavBar() {
  const NavItems = [
    { name: "THE arctic", id: "arctic" },
    { name: "who der?", id: "who" },
    { name: "beronomics", id: "beronomics" },
  ];

  return (
    <nav className="py-7 z-50 px-11 justify-between w-full items-center flex fixed">
      <Image
        src={"/log.svg"}
        alt="logo"
        width={1920}
        height={1920}
        className="w-24"
      />
      <div className="flex text-lg font-bold space-x-7 items-center">
        <ul className="flex  space-x-7 ">
          {NavItems.map((item) => (
            <li className="uppercase" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        <button className="uppercase border-t-4 font-medium text-2xl border-r-8 border-b-8 border-l-4 rounded-xl border-black px-5 py-1">
          buy $BER
        </button>
        <div className="flex items-center gap-3 ">
          <FaTelegramPlane size={40} />
          <BsTwitterX size={33} />
        </div>
      </div>
    </nav>
  );
}

import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="pt-52 w-full flex flex-col justify-center">
      <div className="flex flex-col items-center gap-4">
        <button className="uppercase border-t-4 font-medium text-2xl border-r-8 border-b-8 border-l-4 rounded-xl border-black px-5 py-1">
          buy $BER
        </button>
        <div className="flex  items-center gap-3 space-x-1">
          <FaTelegramPlane size={40} />
          <BsTwitterX size={33} />
        </div>
      </div>
      <div className="w-[99vw] overflow-hidden">
        <div className="mt-36 overflow-hidden scrollAnimation bg-positions bg-scroll bg-[url('/ber.svg')] bg-contain h-60 w-[200vw]" />
      </div>
    </footer>
  );
}

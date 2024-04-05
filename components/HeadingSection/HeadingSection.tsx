"use client";
import classNames from "classnames";
import Image from "next/image";
import { useRef } from "react";
import Heading from "./Heading";

export default function HeadingSection() {
  const wave1 = useRef();
  const wave2 = useRef();
  const wave3 = useRef();
  const iceBarg = useRef();

  const onMouseMove = (e: any) => {
    let rect = e.currentTarget.getBoundingClientRect();
    let y = e.clientY - rect.top;
    if (!wave1.current || !wave2.current || !wave3.current || !iceBarg.current)
      return;
    if (wave1.current && y > 150 && y < 1000) {
      //@ts-ignore
      wave1.current.style.transform = `translate(0,-${(y - 150) / 45}px)`;
      //@ts-ignore
      wave2.current.style.transform = `translate(0,${(y - 150) / 25}px)`;
      //@ts-ignore
      wave3.current.style.transform = `translate(0,${(y - 150) / 9}px)`;
      //@ts-ignore
      iceBarg.current.style.transform = `translate(-50%,-${
        50 - (y - 150) / 100
      }%) scale(${1 - 3 * ((y - 150) / 10000)}) `;
    }
  };

  return (
    <header
      onMouseMove={onMouseMove}
      className="relative  w-full  h-[100vh] overflow-hidden"
    >
      <Image
        //@ts-ignore
        ref={wave1}
        className={classNames("absolute   w-full top-[22rem] z-0 ")}
        src={"/wave3.png"}
        width={1920}
        height={1080}
        alt="wave-3"
      />
      <Image
        //@ts-ignore
        ref={wave2}
        className="absolute w-full  h-[60rem] z-10 top-[10rem]"
        src={"/wave2.png"}
        width={1920}
        height={1080}
        alt="wave-2"
      />
      <Image
        //@ts-ignore
        ref={wave3}
        className="absolute object-cover w-full h-full  z-20 top-[24rem]"
        src={"/wave1.png"}
        width={500}
        height={500}
        quality={100}
        alt="wave-2"
      />
      <Heading iceBarg={iceBarg} />
    </header>
  );
}

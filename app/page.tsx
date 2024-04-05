"use client";
import AboutUs from "@/components/AboutUs/AboutUs";
import Community from "@/components/Community/Community";
import Footer from "@/components/Footer/Footer";
import HeadingSection from "@/components/HeadingSection/HeadingSection";
import NavBar from "@/components/NavBar/NavBar";
import Tokenomics from "@/components/Tokenomics/Tokenomics";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPositions, setScrollPositions] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setScrollPositions(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="">
      <NavBar />
      <HeadingSection />
      <main className="bg-[url('/water.png')] bg-cover bg-no-repeat">
        <AboutUs scrollPositions={scrollPositions} />
        <Tokenomics scrollPositions={scrollPositions} />
        <Community scrollPositions={scrollPositions} />
        <Footer />
      </main>
    </main>
  );
}

"use client";
import AboutUs from "@/components/AboutUs/AboutUs";
import Community from "@/components/Community/Community";
import Footer from "@/components/Footer/Footer";
import HeadingSection from "@/components/HeadingSection/HeadingSection";
import NavBar from "@/components/NavBar/NavBar";
import Tokenomics from "@/components/Tokenomics/Tokenomics";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeadingSection />
      <main className="bg-[url('/water.png')] bg-cover bg-no-repeat">
        <AboutUs />
        <Tokenomics />
        <Community />
        <Footer />
      </main>
    </main>
  );
}

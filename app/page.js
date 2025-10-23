"use client";
import About from "@/components/about";
import Header from "@/components/Header";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services";
import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
    </>
  );
}

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { HomeHero } from "@/constants/page";

interface HomeHeroItem {
  text: string;
  subText: string;
}

const HomeHeroImage = () => {
  return (
    <section className="flex h-screen md:h-[90vh] w-full bg-hero bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black max-md:to-black opacity-80" />
      <div className="container mx-auto md:max-w-[1280px] flex flex-col h-full justify-center items-start z-30">
        {HomeHero.map((item: HomeHeroItem, index: number) => (
          <div key={index}>
            <h5 className="heroSubtext">
              {item.subText}
            </h5>
            <h2 className="heroText">
              {item.text}
            </h2>
          </div>
        ))}

        <div className="flex flex-row items-center mb-4 md:mb-9">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-full" />
            <div className="h-[1px] w-24 md:w-48 bg-white" />
          </div>
          <p className="text-white text-sm md:text-md font-normal border border-white px-2 rounded-full">
            Below the Poverty Line
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <Button className="button-orange" asChild>
            <Link href="/our-causes">Donate</Link>
          </Button>
          <Button className="button-white">
            Discover
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroImage;

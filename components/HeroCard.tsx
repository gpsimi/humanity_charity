import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroCard = () => {
  return (
    <section className="max-md:pb-[500px] pb-[100px]">
      <div className="container mx-auto max-w-[1200px] px-4 py-20">
        <div className="absolute -mt-[180px] left-0 right-0 container max-w-[1280px] mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-green-1 flex-start">
              <h3 className="herocardHeader text-dark-1 max-w-[250px]">
                Education
              </h3>
              <p className="text-dark-1 herocardText">
                Below Poverty Line is enchmark used by the government of India
                economic disadvantage.
              </p>
              <Button className="mt-4 button-white">Discover</Button>
            </div>

            <div className="bg-dark-1 flex-start">
              <h3 className="herocardHeader text-white">
                Become <br /> a Volunteer
              </h3>
              <p className="text-white herocardText">
                Below Poverty Line is enchmark used by the government
              </p>
              <Link className="button-link" href="/our-causes">
                Join Organization
              </Link>
            </div>

            <div className="bg-herocardImage relative bg-cover bg-center bg-no-repeat w-full h-[250px]">
              <div className="absolute inset-0 bg-orange-1 opacity-50" />
              <div className="relative z-10 flex justify-center items-center h-full">
              <Link href="/" className="bg-white p-5 rounded-full z-50">
                <Image
                  src="/icons/play-button.svg"
                  alt="play-button"
                  width={10}
                  height={10}
                  className="w-3"
                />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;

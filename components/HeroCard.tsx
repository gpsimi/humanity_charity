import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

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
              <Button className="mt-4 button-white">
                Discover
              </Button>
            </div>

            <div className="bg-dark-1 flex-start">
              <h3 className="herocardHeader text-white">
                Become <br /> a Volunteer
              </h3>
              <p className="text-white herocardText">
                Below Poverty Line is enchmark used by the government
              </p>
              <Link className="button-link" href="/our-causes">Join Organization</Link>
            </div>
            
            <div className="bg-red-500 flex-start">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;

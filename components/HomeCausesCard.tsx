"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";
import { Button } from "./ui/button";
import { homeCauses } from "@/constants/page";
import Image from "next/image";
import Link from "next/link";


function HomeCausesCard() {
    let sliderRef = useRef<any>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className="">

            <div className="">
                <Slider
                    ref={sliderRef}
                    {...settings}
                >

                    {homeCauses.map((donation) => (
                        <div key={donation.id} className="">
                            <div className="relative">
                                <Image
                                    src={donation.image}
                                    alt={donation.title}
                                    width={400}
                                    height={50}
                                    className="object-cover md:w-[400px] w-[350px]"
                                />
                                <div className="absolute top-5 left-4 bg-white font-bold font-serif px-2 py-1 text-orange-1">
                                    {donation.percentage}
                                </div>
                            </div>
                            <div className="p-4 md:p-6 bg-white md:w-[400px] w-[350px]">
                                <h3 className="h3">
                                    {donation.title}
                                </h3>
                                <div className="relative pt-1">
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-4">
                                        <div
                                            style={{ width: donation.percentage }}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-1"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between text-gray-7000 mb-4">
                                    <span className='spanDark'>Raised - {donation.raised}</span>
                                    <span className='spanOrange'>Goal - {donation.goal}</span>
                                </div>

                                <Button className="button-dark max-md:mb-3">
                                    <Link href={`/causes/${donation.id}`}>Donate</Link>
                                </Button>
                            </div>
                        </div>
                    ))}

                </Slider>
                <div className="mt-6 flex gap-12 justify-center">
                    <Button variant="outline" className="bg-white rounded-full" size="icon" onClick={previous}>
                        <ChevronLeft className="h-5 w-8 text-dark-1" />
                    </Button>
                    <Button variant="outline" className="bg-white rounded-full" size="icon" onClick={next}>
                        <ChevronRight className="h-5 w-8 text-dark-1" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HomeCausesCard;
"use client"

import React, { useRef } from "react";
import Slider from "react-slick";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { homeTestimonial } from "@/constants/page";


const HomeTestimonialsCard = () => {

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
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
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
        <div className="w-full">
            <Slider
                ref={sliderRef}
                {...settings}
            >
                {homeTestimonial.map((item) => (
                    <div key={item.id} className="p-4">
                        <div className="bg-gray-2 p-6 flex flex-col items-start">
                            <div className="max-md:flex max-md:flex-row max-md:gap-4 max-md:place-items-end">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={100}
                                    height={60}
                                    className="md:mr-6 mb-4"
                                />
                                <div>
                                    <h2 className="h3">{item.name}</h2>
                                    <p className="bodyParagraph-dark -mt-2">{item.position}</p>
                                </div>
                            </div>
                                <p className="bodyParagraph-dark text-justify max-w-sm -mt-2">{item.testimony}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            <div style={{ textAlign: "center" }} className=" mt-5 md:mt-12 flex gap-8 md:gap-32 justify-center">
                <Button variant="outline" className="bg-white rounded-full" size="icon"
                    onClick={previous}
                >
                    <ChevronLeft className="h-5 w-8 text-dark-1" />
                </Button>
                <hr className="border-black mb-5" />
                <Button variant="outline" className="bg-white rounded-full" size="icon"
                    onClick={next}
                >
                    <ChevronRight className="h-5 w-8 text-dark-1" />
                </Button>
            </div>


        </div>
    )
}

export default HomeTestimonialsCard
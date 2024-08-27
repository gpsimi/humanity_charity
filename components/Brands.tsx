"use client"

import React from "react";
import Slider from "react-slick";

const Brands = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
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
        <div className="slider-container">
            <Slider {...settings} className="space-x-7">
                <div className="bg-green-600 p-6">
                    <h3>1</h3>
                </div>
                <div className="bg-green-600 p-6">
                    <h3>2</h3>
                </div>
                <div className="bg-green-600 p-6">
                    <h3>3</h3>
                </div>
                <div className="bg-green-600 p-6">
                    <h3>4</h3>
                </div>
                <div className="bg-green-600 p-6">
                    <h3>5</h3>
                </div>
            </Slider>
        </div>
    );
}


export default Brands
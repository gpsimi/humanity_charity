// src/components/HeroSection.tsx
import React from "react";
import { HERO_SECTIONS } from "@/constants/page";

interface GeneralHeroImageProps {
    page: keyof typeof HERO_SECTIONS;
}

const GeneralHeroImage: React.FC<GeneralHeroImageProps> = ({ page }) => {
    const {
        text,
        subtext,
        backgroundImage,
        gradientFromColor,
        gradientToColor,
        additionalClasses,
    } = HERO_SECTIONS[page];

    return (
        <section
            className={`flex h-[85vh] md:h-[55vh] w-full bg-center bg-cover relative ${additionalClasses}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${gradientFromColor} ${gradientToColor} opacity-80`} />
            <div className="container mx-auto md:max-w-[1280px] flex flex-col h-full justify-center items-start z-30">
                <h5 className="heroSubtext">{subtext}</h5>
                <h2 className="heroText">{text}</h2>
            </div>
        </section>
    );
};

export default GeneralHeroImage;
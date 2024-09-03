import React from 'react';


interface GeneralHeroImageProps {
    subtext: string;
    text: string;
    backgroundImage: string;
    gradientFromColor?: string;
    gradientToColor?: string;
    additionalClasses?: string;
}


const GeneralHeroImage: React.FC<GeneralHeroImageProps> = ({
    subtext,
    text,
    backgroundImage,
    gradientFromColor = 'from-black',
    gradientToColor = 'to-dark-',
    additionalClasses = '',
}) => {
    return (
        <section
            className={`flex h-screen md:h-[60vh] w-full bg-cover relative ${backgroundImage} ${additionalClasses}`}
        >
            <div
                className={`absolute inset-0 bg-gradient-to-r ${gradientFromColor} ${gradientToColor} opacity-80`}
            />
            <div className="container mx-auto md:max-w-[1280px] flex flex-col h-full justify-center items-start z-30">
                <h5 className="heroSubtext">{subtext}</h5>
                <h2 className="heroText">{text}</h2>
            </div>
        </section>
    );
};
export default GeneralHeroImage;
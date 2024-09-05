// TopNavDetails

export const contactdetails = [
    {
        label: '+01 569 896 654',
        route: 'tel:+01 569 896 654',
        imgUrl: '/icons/Phone.svg',
    },
    {
        label: 'info@charity.com',
        route: 'mailto:info@charity.com',
        imgUrl: '/icons/Mail.svg',
    },
]

export const navsocials = [
    {
        label: 'Instagram',
        route: 'https://www.instagram.com/',
        imgUrl: '/icons/nav-insta.svg',
    },
    {
        label: 'Facebook',
        route: 'https://www.facebook.com/',
        imgUrl: '/icons/nav-fb.svg',
    },
    {
        label: 'Twitter',
        route: 'https://www.x.com/',
        imgUrl: '/icons/nav-twitter.svg',
    },
    {
        label: 'Pinterest',
        route: 'https://www.pinterest.com/',
        imgUrl: '/icons/nav-pintrest.svg',
    },
]


//Nav details

export interface NavItem {
    label: string;
    route: string;
    subMenu?: NavItem[];
}

export const navLinks: NavItem[] = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'About Us',
        route: '/about-us',
    },
    {
        label: 'Pages',
        route: '#',
        subMenu: [
            {

                label: 'Our Causes',
                route: '/our-causes',
            },
            {

                label: 'Volunteers',
                route: '/volunteers',
            },
            {

                label: 'Projects',
                route: '/our-projects',
            },
            {

                label: 'Blog',
                route: '/blog',
            },
        ],
    },
    {
        label: 'Events',
        route: '/our-events',
    },
    {
        label: 'Contact',
        route: '/contact',
    },
]





/* Hero Section */


interface HeroData {
    text: string;
    subtext: string;
    backgroundImage: string;
    gradientFromColor?: string;
    gradientToColor?: string;
    additionalClasses?: string;

}
export const HERO_SECTIONS: { [key: string]: HeroData } = {
    HomePage: {
        subtext: "Discover amazing content and explore our services.",
        text: "Welcome to Our Website",
        backgroundImage: "/images/home-hero.jpg",
        gradientFromColor: 'from-black',
        gradientToColor: 'to-dark-',
        additionalClasses: ""

    },
    AboutPage: {
        subtext: 'What We do',
        text: 'About our Organization',
        backgroundImage: "images/about/hero-background-2.png",
        gradientFromColor: 'from-black',
        gradientToColor: 'to-orange-1',
        additionalClasses: "",
    },
    ContactPage: {
        subtext: "We'd love to hear from you. Reach out today!",
        text: "Get in Touch",
        backgroundImage: "/images/contact-hero.jpg",
        gradientFromColor: 'from-black',
        gradientToColor: 'to-dark-',
        additionalClasses: ""
    },
};




// export const HERO_SECTIONS = {
//     HomePage: {
//       subtext: 'Need Help...',
//       text: 'Being Life Saver For Someone',
//       backgroundImage: 'bg-hero',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-dark-',
//       additionalClasses: 'h-screen md:h-[90vh]',
//     },
//     AboutPage: {
//       subtext: 'What We do',
//       text: 'About our Organization',
//       backgroundImage: 'bg-aboutHero',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-orange-1',
//       additionalClasses: 'h-screen md:h-[60vh]',

//     },
//     CausesPage: {
//       subtext: 'Donation',
//       text: 'Our Causes',
//       backgroundImage: 'bg-causes',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-dark',
//       additionalClasses: '',
//     },
//     EventPage: {
//       subtext: 'Donation',
//       text: 'Our Causes',
//       backgroundImage: 'bg-hero',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-dark',
//       additionalClasses: 'h-screen md:h-[60vh]',
//     },
//     TeamPage: {
//       subtext: 'Humanity People',
//       text: 'Team Member',
//       backgroundImage: 'bg-hero',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-dark',
//       additionalClasses: 'h-screen md:h-[60vh]',
//     },
//     VolunteerPage: {
//       subtext: 'Need Your Heartful Help...',
//       text: 'Become a Volunteer',
//       backgroundImage: 'bg-hero',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-dark',
//       additionalClasses: 'h-screen md:h-[60vh]',
//     },
//     ProjectPage: {
//       subtext: 'Projects',
//       text: 'Meet Charity Projects',
//       backgroundImage: 'bg-hero',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-dark',
//       additionalClasses: 'h-screen md:h-[60vh]',
//     },
//     BlogPage: {
//       subtext: 'Projects',
//       text: 'Meet Charity Projects',
//       backgroundImage: 'bg-hero',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-dark',
//       additionalClasses: 'h-screen md:h-[60vh]',
//     },
//     ContactPage: {
//       subtext: 'Contact',
//       text: 'Get in Touch',
//       backgroundImage: 'bg-hero',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-dark',
//       additionalClasses: 'h-screen md:h-[60vh]',
//     },
//     FaqPage: {
//       subtext: 'Faq',
//       text: 'General Questions',
//       backgroundImage: 'bg-hero',
//       gradientFromColor: 'from-black',
//       gradientToColor: 'to-dark',
//       additionalClasses: 'h-screen md:h-[60vh]',
//     },
// };








/* Home Page */
interface HomeHeroItem {
    text: string;
    subText: string;
}
export const HomeHero: HomeHeroItem[] = [
    {
        subText: "Need Help...",
        text: "Being Life Saver For Someone"
    }
]


export const homeAbout = [
    {
        label: 'Food Donation',
        icon: '/icons/tick.svg',
    },
    {
        label: 'Water Supply',
        icon: '/icons/tick.svg',
    },
    {
        label: 'Money Donation',
        icon: '/icons/tick.svg',
    },
    {
        label: 'Education Donation',
        icon: '/icons/tick.svg',
    },
    {
        label: 'Dress Donation',
        icon: '/icons/tick.svg',
    },
    {
        label: 'Toys Donation',
        icon: '/icons/tick.svg',
    },
]



export const homeCauses = [
    {
        id: 1,
        image: "/images/home/home-causes/causes-1.png",
        percentage: "85%",
        title: "Big charity: build school for poor children",
        raised: "$5M",
        goal: "$10M",
    },
    {
        id: 2,
        image: "/images/home/home-causes/causes-2.png",
        percentage: "75%",
        title: "Big charity: build school for poor children",
        raised: "$3M",
        goal: "$10M",
    },
    {
        id: 3,
        image: "/images/home/home-causes/causes-3.png",
        percentage: "50%",
        title: "Big charity: build school for poor children",
        raised: "$5M",
        goal: "$10M",
    },
    {
        id: 4,
        image: "/images/home/home-causes/causes-4.png",
        percentage: "75%",
        title: "Big charity: build school for poor children",
        raised: "$5M",
        goal: "$10M",
    },
]


export const WhatWeDo = [
    {
        id: 1,
        icon: "/images/home/what-we-do/01.svg",
        title: "Medicine Help",
        description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
        id: 2,
        icon: "/images/home/what-we-do/02.svg",
        title: "Water Delivery",
        description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
        id: 3,
        icon: "/images/home/what-we-do/03.svg",
        title: "We Care About",
        description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
        id: 4,
        icon: "/images/home/what-we-do/04.svg",
        title: "Food Delivery",
        description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
        id: 5,
        icon: "/images/home/what-we-do/05.svg",
        title: "Spread The World",
        description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
        id: 6,
        icon: "/images/home/what-we-do/06.svg",
        title: "Learn Education",
        description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
]

export const homeTestimonial = [
    {
        id: 1,
        image: "/images/home/testimonial/image-1.png",
        icon: "/images/testimonial/quote.png",
        name: "Belli Smith",
        position: "Designer",
        testimony: "Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted the readable content.",
    },
    {
        id: 2,
        image: "/images/home/testimonial/image-2.png",
        icon: "/images/testimonial/quote.png",
        name: "Sara Taylor",
        position: "Donator",
        testimony: "Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted the readable content.",
    },
]


export const clientNumber = [
    {
        id: 1,
        heading: "200k",
        description: "Received Donations From Our People",
    },
    {
        id: 2,
        heading: "99k",
        description: "Projects Done With The Help Of Donators",
    },
    {
        id: 3,
        heading: "200k",
        description: "People We Helped from 2020 till now",
    },
    {
        id: 4,
        heading: "10.7k",
        description: "With Our Volunteers We've Solved Many Causes",
    },
]


export const clientsLogo = [
    {
        id: 1,
        logo: "/images/home/clients/client-1.svg",
    },
    {
        id: 2,
        logo: "/images/home/clients/client-2.svg",
    },
    {
        id: 3,
        logo: "/images/home/clients/client-3.svg",
    },
    {
        id: 4,
        logo: "/images/home/clients/client-4.svg",
    },
    {
        id: 5,
        logo: "/images/home/clients/client-5.svg",
    },
]

export const HomeTeamData = [
    {
        image: "/images/home/home-team/volunteer-1.png",
        name: "Martin Luther",
        socials: [
            {
                label: 'instagram',
                icon: "/images/home/home-team/volunteer-IG.png",
                link: 'https://www.instagram.com/',
            },
            {
                label: 'facebook',
                icon: "/images/home/home-team/volunteer-Fb.png",
                link: 'https://www.facebook.com/',
            },
            {
                label: 'twitter',
                icon: "/images/home/home-team/volunteer-Twiter.png",
                link: 'https://www.x.com/',
            },
            {
                label: 'pintrest',
                icon: "/images/home/home-team/volunteer-Pintrest.png",
                link: 'https://www.pintrest.com/',
            },
        ]
    },
    {
        image: "/images/home/home-team/volunteer-2.png",
        name: "Keira Knightley",
        socials: [
            {
                label: 'instagram',
                icon: "/images/home/home-team/volunteer-IG.png",
                link: 'https://www.instagram.com/',
            },
            {
                label: 'facebook',
                icon: "/images/home/home-team/volunteer-Fb.png",
                link: 'https://www.facebook.com/',
            },
            {
                label: 'twitter',
                icon: "/images/home/home-team/volunteer-Twiter.png",
                link: 'https://www.x.com/',
            },
            {
                label: 'pintrest',
                icon: "/images/home/home-team/volunteer-Pintrest.png",
                link: 'https://www.pintrest.com/',
            },
        ]
    },
    {
        image: "/images/home/home-team/volunteer-3.png",
        name: "Jack Sparrow",
        socials: [
            {
                label: 'instagram',
                icon: "/images/home/home-team/volunteer-IG.png",
                link: 'https://www.instagram.com/',
            },
            {
                label: 'facebook',
                icon: "/images/home/home-team/volunteer-Fb.png",
                link: 'https://www.facebook.com/',
            },
            {
                label: 'twitter',
                icon: "/images/home/home-team/volunteer-Twiter.png",
                link: 'https://www.x.com/',
            },
            {
                label: 'pintrest',
                icon: "/images/home/home-team/volunteer-Pintrest.png",
                link: 'https://www.pintrest.com/',
            },
        ]
    },
]



/* About Page */

export const goalAndMission = [
    {
        id: 1,
        image: "/images/about/goal-icon.svg",
        text: "Make Donation",
    },
    {
        id: 2,
        image: "/images/about/goal-icon.svg",
        text: "Donation Reched 10M",
    },
    {
        id: 3,
        image: "/images/about/goal-icon.svg",
        text: "Education For All",
    },
    {
        id: 4,
        image: "/images/about/goal-icon.svg",
        text: "Become A Volunteer",
    },
    {
        id: 5,
        image: "/images/about/goal-icon.svg",
        text: "Food For Poor People dayle",
    },
]









/* Footer */

export const footersocials = [
    {
        label: 'Instagram',
        route: 'https://www.instagram.com/',
        imgUrl: '/images/footer/footer-insta.png',
    },
    {
        label: 'Facebook',
        route: 'https://www.facebook.com/',
        imgUrl: '/images/footer/footer-fb.png',
    },
    {
        label: 'Twitter',
        route: 'https://www.x.com/',
        imgUrl: '/images/footer/footer-twitter.png',
    },
    {
        label: 'Pinterest',
        route: 'https://www.pinterest.com/',
        imgUrl: '/images/footer/footer-pintrest.png',
    },
]

export const footerLinks = [
    {
        title: "Get Involved",
        "mainLinks": [
            {

                label: 'About Us',
                route: '/about-us',
            },
            {

                label: 'Volunteers',
                route: '/volunteers',
            },
            {

                label: 'Our Causes',
                route: '/our-causes',
            },
            {

                label: 'Projects',
                route: '/projects',
            },
            {

                label: 'Team',
                route: '/our-team',
            },
        ],
    },
    {
        title: "Utility",
        "mainLinks": [
            {

                label: 'Style Guide',
                route: '/#',
            },
            {

                label: 'Licences',
                route: '/#',
            },
            {

                label: 'Password',
                route: '/#',
            },
            {

                label: '404 Page',
                route: '/#',
            },
            {

                label: 'Changelog',
                route: '/#',
            },
        ],
    },
    {
        title: "Contact",
        "mainLinks": [
            {

                label: '660 Broklyn street, 88 New York',
                route: '/#',
            },
            // {

            //     label: 'Volunteers',
            //     route: '/volunteers',
            // },
            // {

            //     label: 'Our Causes',
            //     route: '/our-causes',
            // },
            {

                label: 'info@charity.com',
                route: 'mail-to:info@charity.com',
            },
            {

                label: '222 888 0000',
                route: 'tel:222 888 0000',
            },
        ],
    },

]





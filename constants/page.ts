// TopNavDetails

export const contactdetails =[
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

export const navsocials =[
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

export const navLinks : NavItem[] = [
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
       icon:  "/images/what-we-do/01.svg",
       title: "Medicine Help",
       description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
       id: 2,
       icon:  "/images/what-we-do/02.svg",
       title: "Water Delivery",
       description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
       id: 3,
       icon:  "/images/what-we-do/03.svg",
       title: "We Care About",
       description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
       id: 4,
       icon:  "/images/what-we-do/04.svg",
       title: "Food Delivery",
       description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
       id: 5,
       icon:  "/images/what-we-do/05.svg",
       title: "Spread The World",
       description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
    {
       id: 6,
       icon:  "/images/what-we-do/06.svg",
       title: "Learn Education",
       description: "Centuries but also the leap into electronic typesetting, remaining specimen book.",
    },
]

export const homeTestimonial =[
    {
        id: 1,
        image: "/images/testimonial/image-1.png",
        icon: "/images/testimonial/quote.png",
        name: "Belli Smith",
        position: "Designer",
        testimony: "Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted the readable content.",
    },
    {
        id: 2,
        image: "/images/testimonial/image-2.png",
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
        logo: "/images/clients/client-1.svg",
    },
    {
        id: 1,
        logo: "/images/clients/client-2.svg",
    },
    {
        id: 1,
        logo: "/images/clients/client-3.svg",
    },
    {
        id: 1,
        logo: "/images/clients/client-4.svg",
    },
    {
        id: 1,
        logo: "/images/clients/client-5.svg",
    },
]








export const footersocials =[
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


  
  

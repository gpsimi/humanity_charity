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


  
  

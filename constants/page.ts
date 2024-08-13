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
        route: '/',
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





  
  

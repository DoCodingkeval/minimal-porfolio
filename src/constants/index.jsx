import {
    IconBrandBootstrap,
    IconBrandCss3,
    IconBrandGithub,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandLinkedin,
    IconBrandReact,
    IconBrandSass,
    IconBrandTailwind,
    IconBrandWordpress,
    IconHome,
    IconInfoHexagon,
    IconMail,
    IconRocket,
    IconTools,
} from '@tabler/icons-react';

const navLinks = [
    {
        id: 1,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z" stroke="#000" strokeWidth="1.5" />
                <path d="M12 15L12 18" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        name: 'home',
        href: 'hero',
    },
    {
        id: 2,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z" stroke="#000" strokeWidth="1.5" />
                <path d="M22 12C22 12 21.0071 12.8907 19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12 2 12" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M22 16C22 16 21.0071 16.8907 19.0212 17.6851L16.2127 18.8085C14.2268 19.6028 13.2339 20 12 20C10.7661 20 9.77318 19.6028 7.7873 18.8085L4.97883 17.6851C2.99294 16.8907 2 16 2 16" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        name: 'skills',
        href: 'skill',

    },
    {
        id: 3,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="6" r="4" stroke="#000" strokeWidth="1.5" />
                <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#000" strokeWidth="1.5" />
            </svg>
        ),
        name: 'about',
        href: 'about',
    },
    {
        id: 4,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 6.5C2.5 4.61438 2.5 3.67157 3.08579 3.08579C3.67157 2.5 4.61438 2.5 6.5 2.5C8.38562 2.5 9.32843 2.5 9.91421 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5C10.5 8.38562 10.5 9.32843 9.91421 9.91421C9.32843 10.5 8.38562 10.5 6.5 10.5C4.61438 10.5 3.67157 10.5 3.08579 9.91421C2.5 9.32843 2.5 8.38562 2.5 6.5Z" stroke="#000" strokeWidth="1.5" />
                <path d="M13.5 17.5C13.5 15.6144 13.5 14.6716 14.0858 14.0858C14.6716 13.5 15.6144 13.5 17.5 13.5C19.3856 13.5 20.3284 13.5 20.9142 14.0858C21.5 14.6716 21.5 15.6144 21.5 17.5C21.5 19.3856 21.5 20.3284 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5Z" stroke="#000" strokeWidth="1.5" />
                <path d="M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z" stroke="#000" strokeWidth="1.5" />
                <path d="M13.5 6.5C13.5 4.61438 13.5 3.67157 14.0858 3.08579C14.6716 2.5 15.6144 2.5 17.5 2.5C19.3856 2.5 20.3284 2.5 20.9142 3.08579C21.5 3.67157 21.5 4.61438 21.5 6.5C21.5 8.38562 21.5 9.32843 20.9142 9.91421C20.3284 10.5 19.3856 10.5 17.5 10.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5Z" stroke="#000" strokeWidth="1.5" />
            </svg>
        ),
        name: 'projects',
        href: 'project',
    },
    {
        id: 5,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#000" strokeWidth="1.5" />
                <path d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        name: 'contact',
        href: 'contact',
    },
];

const socialLinks = [
    {
        id: 1,
        icon: (
            <svg className='size-5 lg:size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='group-hover:stroke-white transition duration-300 ease-in-out' d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#000" strokeWidth="2" />
                <path className='group-hover:stroke-white transition duration-300 ease-in-out' d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>

        ),
        href: 'mailto:gohelkeval7@gmail.com',
        title: 'Mail'
    },
    {
        id: 2,
        icon: (
            <svg className='size-5 lg:size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='group-hover:fill-white transition duration-300 ease-in-out' fillRule="evenodd" clipRule="evenodd" d="M5 1.25C3.48122 1.25 2.25 2.48122 2.25 4C2.25 5.51878 3.48122 6.75 5 6.75C6.51878 6.75 7.75 5.51878 7.75 4C7.75 2.48122 6.51878 1.25 5 1.25ZM3.75 4C3.75 3.30964 4.30964 2.75 5 2.75C5.69036 2.75 6.25 3.30964 6.25 4C6.25 4.69036 5.69036 5.25 5 5.25C4.30964 5.25 3.75 4.69036 3.75 4Z" fill="black" />
                <path className='group-hover:fill-white transition duration-300 ease-in-out' fillRule="evenodd" clipRule="evenodd" d="M2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8V21C7.75 21.4142 7.41421 21.75 7 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V8ZM3.75 8.75V20.25H6.25V8.75H3.75Z" fill="black" />
                <path className='group-hover:fill-white transition duration-300 ease-in-out' fillRule="evenodd" clipRule="evenodd" d="M9.25 8C9.25 7.58579 9.58579 7.25 10 7.25H14C14.4142 7.25 14.75 7.58579 14.75 8V8.43402L15.1853 8.24748C15.9336 7.92676 16.7339 7.72565 17.5433 7.65207C20.3182 7.3998 22.75 9.58038 22.75 12.3802V21C22.75 21.4142 22.4142 21.75 22 21.75H18C17.5858 21.75 17.25 21.4142 17.25 21V14C17.25 13.6685 17.1183 13.3505 16.8839 13.1161C16.6495 12.8817 16.3315 12.75 16 12.75C15.6685 12.75 15.3505 12.8817 15.1161 13.1161C14.8817 13.3505 14.75 13.6685 14.75 14V21C14.75 21.4142 14.4142 21.75 14 21.75H10C9.58579 21.75 9.25 21.4142 9.25 21V8ZM10.75 8.75V20.25H13.25V14C13.25 13.2707 13.5397 12.5712 14.0555 12.0555C14.5712 11.5397 15.2707 11.25 16 11.25C16.7293 11.25 17.4288 11.5397 17.9445 12.0555C18.4603 12.5712 18.75 13.2707 18.75 14V20.25H21.25V12.3802C21.25 10.4759 19.589 8.97227 17.6791 9.14591C17.025 9.20536 16.3784 9.36807 15.7762 9.6262L14.2954 10.2608C14.0637 10.3601 13.7976 10.3363 13.5871 10.1976C13.3767 10.0588 13.25 9.82354 13.25 9.57143V8.75H10.75Z" fill="black" />
            </svg>
        ),
        href: 'https://www.linkedin.com/in/keval-gohel-599b28310',
        title: 'Linkedin'
    },
    {
        id: 3,
        icon: (
            <svg className='group-hover:stroke-white size-5 lg:size-6 transition duration-300 ease-in-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" />
                <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" />
            </svg>
        ),
        href: 'https://github.com/DoCodingkeval',
        title: 'Github'
    },
];

const skills = [
    {
        id: 1,
        icon: <IconBrandHtml5 size={44} />,
        name: 'Html',
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        id: 2,
        icon: <IconBrandCss3 size={44} />,
        name: 'Css',
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        id: 3,
        icon: <IconBrandJavascript size={44} />,
        name: 'JavaScript',
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        id: 4,
        icon: <IconBrandReact size={44} />,
        name: 'React',
        href: "https://react.dev"
    },
    {
        id: 5,
        icon: <IconBrandTailwind size={44} />,
        name: 'Tailwind',
        href: "https://tailwindcss.com"
    },
    {
        id: 6,
        icon: <IconBrandWordpress size={44} />,
        name: 'WordPress',
        href: "https://wordpress.org"
    },
    {
        id: 7,
        icon: <IconBrandBootstrap size={44} />,
        name: 'BootStrap',
        href: "https://getbootstrap.com"
    },
    {
        id: 8,
        icon: <IconBrandSass size={44} />,
        name: 'Sass',
        href: "https://sass-lang.com"
    },
];

const projects = [
    {
        id: 1,
        projectName: 'Weather Application',
        description:
            'A real-time weather dashboard with an intuitive UI and vibrant, data-driven design.',
        image: 'weather.jpg',
        liveLink: 'https://weather-apiappp.netlify.app',
        githubLink: 'https://github.com/DoCodingkeval/weather-app',
        siteTitle: 'Live Demo',
        githubTitle: 'Live Code'
    },
    {
        id: 2,
        projectName: 'Blueleads Landing Page',
        description:
            'Modern responsive landing page with smooth animations and clean layout for lead capture.',
        image: 'blueleads.png',
        liveLink: 'https://blueleads.netlify.app',
        githubLink: 'https://github.com/DoCodingkeval/BlueLeads',
        siteTitle: 'Live Demo',
        githubTitle: 'Live Code'
    },
    {
        id: 3,
        projectName: 'Pokemon Finder App',
        description:
            'A Pokémon search app with API-powered data and engaging visual cards.',
        image: 'pokemon.png',
        liveLink: 'https://pokemondataapi.netlify.app',
        githubLink: '',
        siteTitle: 'Live Demo',
        githubTitle: 'Live Code'
    },
    {
        id: 4,
        projectName: 'WizardZ Landing Page',
        description:
            'A sleek agency landing page with bold visuals and smooth animations.',
        image: 'wizardZ.png',
        liveLink: 'https://docodingkeval.github.io/WizardZ',
        githubLink: 'https://github.com/DoCodingkeval/WizardZ',
        siteTitle: 'Live Demo',
        githubTitle: 'Live Code'
    },
];

export { navLinks, socialLinks, skills, projects };

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
  IconHome,
  IconInfoHexagon,
  IconLink,
  IconMail,
  IconRocket,
  IconSun,
  IconTools,
} from '@tabler/icons-react';

const navLinks = [
  {
    id: 1,
    icon: <IconHome className="size-5" />,
    name: 'home',
    href: 'hero',
  },
  {
    id: 2,
    icon: <IconInfoHexagon className="size-5" />,
    name: 'about',
    href: 'about',
  },
  {
    id: 3,
    icon: <IconTools className="size-5" />,
    name: 'skills',
    href: 'skill',
  },
  {
    id: 4,
    icon: <IconRocket className="size-5" />,
    name: 'projects',
    href: 'project',
  },
  {
    id: 5,
    icon: <IconMail className="size-5" />,
    name: 'contact',
    href: 'contact',
  },
];

const socialLinks = [
  {
    id: 1,
    icon: <IconMail size={19} />,
    href: 'mailto:gohelkeval7@gmail.com',
  },
  {
    id: 2,
    icon: <IconBrandLinkedin size={19} />,
    href: 'https://www.linkedin.com/in/keval-gohel-599b28310',
  },
  {
    id: 3,
    icon: <IconBrandGithub size={19} />,
    href: 'https://github.com/DoCodingkeval',
  },
];

const skills = [
  {
    id: 1,
    icon: <IconBrandHtml5 size={44} />,
    name: 'Html',
  },
  {
    id: 2,
    icon: <IconBrandCss3 size={44} />,
    name: 'Css',
  },
  {
    id: 3,
    icon: <IconBrandJavascript size={44} />,
    name: 'JavaScript',
  },
  {
    id: 4,
    icon: <IconBrandReact size={44} />,
    name: 'React',
  },
  {
    id: 5,
    icon: <IconBrandTailwind size={44} />,
    name: 'Tailwind',
  },
  {
    id: 6,
    icon: <IconBrandBootstrap size={44} />,
    name: 'BootStrap',
  },
  {
    id: 7,
    icon: <IconBrandSass size={44} />,
    name: 'Sass',
  },
];

const projects = [
  {
    id: 1,
    title: 'Weather Application',
    description:
      'A real-time weather dashboard with an intuitive UI and vibrant, data-driven design.',
    image: 'weather.jpg',
    liveLink: 'https://weather-apiappp.netlify.app',
    githubLink: 'https://github.com/DoCodingkeval/weather-app',
  },
  {
    id: 2,
    title: 'Blueleads Landing Page',
    description:
      'Modern responsive landing page with smooth animations and clean layout for lead capture.',
    image: 'blueleads.png',
    liveLink: 'https://blueleads.netlify.app',
    githubLink: 'https://github.com/DoCodingkeval/BlueLeads',
  },
  {
    id: 3,
    title: 'Pokemon Finder App',
    description:
      'A Pokémon search app with API-powered data and engaging visual cards.',
    image: 'pokemon.png',
    liveLink: 'https://pokemondataapi.netlify.app',
    githubLink: '',
  },
  {
    id: 4,
    title: 'WizardZ Landing Page',
    description:
      'A sleek agency landing page with bold visuals and smooth animations.',
    image: 'wizardZ.png',
    liveLink: 'https://docodingkeval.github.io/WizardZ',
    githubLink: 'https://github.com/DoCodingkeval/WizardZ',
  },
];

export { navLinks, socialLinks, skills, projects };

import {
  BioLink,
  GithubIcon,
  Instagram,
  LinkedIn,
  MailIcon,
  TelegramIcon,
  TwitterIcon,
} from '@components/Icons/LogoIcons';

const heroHome = {
  title: 'Gilang Irfansyah',
  content:
    'Hey I’m Gilang, a front end developer. Right now I’m working on Internet. This is my personal website - where you’ll find all the stuff I’m currently doing and thinking about. ✌',
};
const heroBlog = {
  title: 'Article',
  content:
    'I write about stuff that I`m interested in and hopefully they resonates with you too.',
};

const heroProjects = {
  title: 'Projects',
  content: 'Collection of web development side project',
};

const heroSnippets = {
  title: 'Projects',
  content: 'Collection of web development side project',
};

const sosmed = [
  {
    title: 'Email',
    link: 'mailto:gilangoi.go@gmail.com',
    username: 'gilangoi.go@gmail.com',
    icon: <MailIcon className='w-6 h-6' />,
    isPriority: true,
  },
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/girfansyah',
    username: '@girfansyah',
    icon: <LinkedIn />,
    isPriority: true,
  },
  {
    title: 'Github',
    link: 'https://github.com/girfansyah',
    username: '@girfansyah',
    icon: <GithubIcon />,
    isPriority: true,
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/girfansyah8',
    username: '@girfansyah8',
    icon: <TwitterIcon />,
    isPriority: true,
  },
  {
    title: 'Instagram',
    link: 'https://instagram.com/girfansyah8',
    username: '@girfansyah8',
    icon: <Instagram />,
    isPriority: true,
  },
  {
    title: 'Telegram',
    link: 'https:t.me/girfansyah',
    username: '@girfansyah',
    icon: <TelegramIcon />,
    isPriority: true,
  },
  {
    title: 'Bio Link',
    link: 'http://girfansyah.bio.link',
    username: '@girfansyah',
    icon: <BioLink />,
    isPriority: false,
  },
];

export { heroHome, heroBlog, heroProjects, heroSnippets, sosmed };

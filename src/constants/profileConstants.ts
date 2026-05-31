// ============ Types/Interfaces ============

interface NavigationRoute {
    name: string;
    route: string;
}

interface ResumeFile {
    src: string;
    name: string;
}

interface Image {
    src: string;
    alt: string;
}

interface ContactInfo {
    name: string;
    email: string;
    location: string;
    timezone: string;
}

interface GeneralInfo {
    resume: ResumeFile;
    images: {
        home_image: Image;
    };
    contact_info: ContactInfo;
}

interface ProjectLinks {
    github: string;
    live_demo?: string;
}

export interface Project {
    name: string;
    description: string;
    links: ProjectLinks;
    technologies: string[];
    year: string;
    in_progress?: boolean;
    blogSlug?: string;
}

interface SocialMediaLink {
    name: string;
    url: string;
    title: string;
}

// ============ Constants ============

export const navigationRoutes: NavigationRoute[] = [
    { name: 'Home', route: '/' },
    { name: 'Projects', route: '/projects' },
    { name: 'Blog', route: '/blog' },
    { name: 'Contact', route: '/contact' },
];

export const generalInfo: GeneralInfo = {
    resume: {
        src: '/files/Jotham_Teshome_resume.pdf',
        name: 'Jotham_Teshome_resume.pdf',
    },
    images: {
        home_image: {
            src: '/images/jotham-teshome.png',
            alt: "Jotham's image",
        },
    },
    contact_info: {
        name: 'Jotham Teshome',
        email: 'teshomejotham@gmail.com',
        location: 'West Bloomfield, Michigan',
        timezone: 'America/Detroit',
    },
};

export const aboutMeDescription: string[] = [
    "Hi, I'm Jotham, a junior software engineer with a Master's in Computer Science from Michigan State. I tend to gravitate toward the backend, though recently I've developed an interest in cloud technologies as well.",
    "This site is part portfolio, part journal. I want to look back in five years and see exactly where my head was at early in my career, what I was building, what I was learning, and what I was still getting wrong.",
];

export const projectItems: Project[] = [
    {
        name: 'Portfolio Website',
        description: 'Personal portfolio and blog built with Next.js, TypeScript, and Tailwind CSS. Statically exported and deployed to GitHub Pages.',
        links: {
            github: 'https://github.com/jothamteshome/NextJS-Portfolio-Website',
        },
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
        year: '2024',
        in_progress: true,
    },
    {
        name: 'Watch Together',
        description:
            'A full-stack application that allows users to watch YouTube videos together in real time. Features include synchronized playback, video queuing, and room-based collaboration. Built with React on the frontend and a Node.js/Express backend, with WebSockets enabling live synchronization between users.',
        links: {
            github: 'https://github.com/jothamteshome/watch-together',
            live_demo: 'https://watch-together.whymighta.net',
        },
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Socket.IO', 'Tailwind CSS'],
        year: '2025',
        in_progress: true,
    },
    {
        name: 'Pixel Sorter',
        description:
            'A web app that takes any uploaded image and rearranges its pixels sorted by their distance from black, producing a gradient-like visual effect. The sort runs in a Web Worker to avoid blocking the UI during processing.',
        links: {
            github: 'https://github.com/jothamteshome/pixel-sorter',
            live_demo: 'https://pixel-sorter.whymighta.net/',
        },
        technologies: ['React Router', 'TypeScript', 'Tailwind CSS', 'Vite'],
        year: '2025',
    },
    {
        name: 'Personal Cloud Infrastructure',
        description:
            'Infrastructure-as-code repo that manages personal cloud resources on AWS. Includes CDK stacks for static site hosting, a Lambda-based status monitoring API, a Lambda that auto-starts Minecraft EC2 instances on DNS query, and Docker Compose configuration for self-hosted services.',
        links: {
            github: 'https://github.com/jothamteshome/infra-hub',
        },
        technologies: ['Python', 'AWS Lambda', 'AWS CDK', 'Docker', 'GitHub Actions'],
        year: '2026',
    },
    {
        name: 'System Dashboard',
        description:
            'A personal status dashboard that monitors self-hosted infrastructure in real time. Tracks Minecraft server status and player counts, HTTP health of web projects, and Docker container resource usage. Built with React and Vite, pulling from a Lambda-backed API on a 60-second interval.',
        links: {
            github: 'https://github.com/jothamteshome/system-dashboard',
            live_demo: 'https://status.whymighta.net',
        },
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AWS'],
        year: '2026',
    },
    {
        name: 'Classification of Pokemon Sprites',
        description:
            'Collaborated with a team of four to design and implement a convolutional neural network model that classifies Pokémon sprites within battle images, achieving up to 86% accuracy using image processing and deep learning techniques.',
        links: {
            github: 'https://github.com/jothamteshome/Classification-of-Pokemon-Sprites',
        },
        technologies: ['CNN', 'OpenCV', 'Python', 'PyTorch'],
        year: '2024',
    },
    {
        name: 'Identifying and Removing Toxic Comments',
        description:
            'A method to detect toxic statements, identify specific toxic words, and censor harmful language in online spaces. Uses transformer-based NLP models to flag and redact toxicity at the token level.',
        links: {
            github: 'https://github.com/jothamteshome/Identifying-And-Removing-Toxic-Comments',
        },
        technologies: ['Python', 'TensorFlow', 'NLTK', 'FastText'],
        year: '2023',
    },
    {
        name: 'Predicting NFL Betting Odds',
        description:
            'Predicts NFL game point spreads by testing multiple regression approaches — linear, ridge, lasso, random forest, support vector, and neural network — against team records and per-game metrics.',
        links: {
            github: 'https://github.com/jothamteshome/Predicting-NFL-Betting-Odds',
        },
        technologies: ['Python', 'PyTorch', 'scikit-learn', 'BeautifulSoup'],
        year: '2023',
    },
    {
        name: 'Whymighta Discord Bot',
        description:
            'A Discord bot built for a small friend group with a wide range of features, including an LLM-powered chatbot with OpenAI and Anthropic support, guild XP and leveling, Fortnite stats, weather lookup, server theming, and moderation. Built with a database-backed architecture, a pytest test suite, and Docker deployment.',
        links: {
            github: 'https://github.com/jothamteshome/whymighta',
        },
        technologies: ['Python', 'disnake', 'PostgreSQL', 'Docker', 'OpenAI', 'Anthropic'],
        year: '2022',
        in_progress: true,
    },
];

export const socialMediaLinks: SocialMediaLink[] = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jothamteshome/',
        title: 'Check out my LinkedIn profile!',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/jothamteshome',
        title: 'Check out my GitHub profile!',
    },
    {
        name: 'Resume',
        url: generalInfo.resume.src,
        title: 'Check out my Resume!',
    },
];

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
    },
};

export const aboutMeDescription: string[] = [
    "Hi, I'm Jotham, a Computer Science graduate with a Master of Science from Michigan State University. My work sits at the intersection of Software Engineering, AI, and Cloud Infrastructure, with a strong focus on building scalable backend systems and intelligent applications.",
    "I thrive on solving complex technical problems and enjoy experimenting with new tools, whether it's deploying serverless architectures on AWS or fine-tuning machine learning models for NLP and Computer Vision tasks.",
    "I'm always open to new challenges and meaningful collaborations. If you're a recruiter, engineer, or founder looking to build something impactful, I'd love to connect.",
];

export const projectItems: Project[] = [
    {
        name: 'Portfolio Website',
        description: 'Personal portfolio and blog built with Next.js, TypeScript, and Tailwind CSS. Statically exported and deployed to GitHub Pages.',
        links: {
            github: 'https://github.com/jothamteshome/NextJS-Portfolio-Website',
        },
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
        year: '2026',
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
        name: 'ChatGPT API with AWS CDK',
        description:
            "A serverless REST API that integrates OpenAI's GPT-4o-mini model using AWS CDK, Lambda, and API Gateway. Designed for scalable, secure deployment of chat-based AI services.",
        links: {
            github: 'https://github.com/jothamteshome/AWS-ChatGPT-API',
        },
        technologies: ['AWS CDK', 'Lambda', 'API Gateway', 'OpenAI', 'Python'],
        year: '2025',
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

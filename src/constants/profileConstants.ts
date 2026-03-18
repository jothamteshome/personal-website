// ============ Types/Interfaces ============

export interface NavigationRoute {
  name: string;
  route: string;
}

export interface ResumeFile {
  src: string;
  name: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  location: string;
}

export interface GeneralInfo {
  resume: ResumeFile;
  images: {
    home_image: Image;
    about_image: Image;
  };
  contact_info: ContactInfo;
  typewriter_strings: string[];
}

export interface Skill {
  name: string;
}

export interface ProjectBadgeDetails {
  [key: string]: {
    bg_color: string;
    txt_color: string;
    title: string;
  };
}

export interface ProjectLinks {
  github: string;
  live_demo?: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  badges: string[];
  links: ProjectLinks;
  technologies: string[];
  year: string;
  in_progress?: boolean;
}

export interface ExperienceItem {
  employer: string;
  start_date: string;
  end_date: string;
  role: string;
  tasks_completed: string[];
  logo: string;
}

export interface EducationItem {
  institution: string;
  start_date: string;
  end_date: string;
  degree_aquired: string;
  gpa: string;
  coursework: string[];
  logo: string;
}

export interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
  bg_color: string;
  title: string;
}

export interface Icons {
  file_pdf: string;
  github: string;
  linkedin: string;
  live_demo: string;
  aws_cloud_development_kit: string;
  hugging_face_logo: string;
}

// ============ Constants ============

export const navigationRoutes: NavigationRoute[] = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Projects', route: '/projects' },
  { name: 'Experience', route: '/experience' },
  { name: 'Contact', route: '/contact' },
  { name: 'Blog', route: '/blog' },
];

export const icons: Icons = {
  file_pdf: '/icons/file-pdf.svg',
  github: '/icons/github.svg',
  linkedin: '/icons/linkedin.svg',
  live_demo: '/icons/link-45deg.svg',
  aws_cloud_development_kit: '/icons/aws-cloud-development-kit.svg',
  hugging_face_logo: '/icons/hugging-face-logo.svg',
};

export const generalInfo: GeneralInfo = {
  resume: {
    src: '/files/Jotham_Teshome_resume.pdf',
    name: 'Jotham_Teshome_resume.pdf',
  },
  images: {
    home_image: {
      src: '/images/jotham-teshome-glasses.png',
      alt: "Jotham's image with glasses",
    },
    about_image: {
      src: '/images/jotham-teshome.jpg',
      alt: 'Image of Jotham at Mackinac Island',
    },
  },
  contact_info: {
    name: 'Jotham Teshome',
    email: 'teshomejotham@gmail.com',
    location: 'West Bloomfield, Michigan',
  },
  typewriter_strings: ['Software Engineer', 'Machine Learning Engineer', 'Full-stack Developer'],
};

export const aboutMeDescription = {
  about_me: [
    "Hi, I'm Jotham, a Computer Science graduate with a Master of Science from Michigan State University. My work sits at the intersection of Software Engineering, AI, and Cloud Infrastructure, with a strong focus on building scalable backend systems and intelligent applications.",
    "I thrive on solving complex technical problems and enjoy experimenting with new tools, whether it's deploying serverless architectures on AWS or fine-tuning machine learning models for NLP and Computer Vision tasks.",
    "I'm always open to new challenges and meaningful collaborations. If you're a recruiter, engineer, or founder looking to build something impactful, I'd love to connect.",
  ],
};

export const skills: Skill[] = [
  // Languages
  { name: 'C' },
  { name: 'C++' },
  { name: 'Python' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Dart' },
  { name: 'Bash' },

  // Web & Frontend
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Bootstrap' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Flutter' },
  { name: 'TailwindCSS' },
  { name: 'Socket.IO' },

  // Backend/API/Frameworks
  { name: 'Node.js' },
  { name: 'Express' },
  { name: 'Flask' },
  { name: 'FastAPI' },
  { name: 'Pytest' },
  { name: 'RabbitMQ' },

  // AI/ML/DL
  { name: 'TensorFlow' },
  { name: 'PyTorch' },
  { name: 'Scikit-learn' },
  { name: 'Hugging Face' },

  // Databases
  { name: 'MySQL' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB' },

  // Cloud & DevOps
  { name: 'AWS' },
  { name: 'AWS CDK' },
  { name: 'Azure' },
  { name: 'GCP' },
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'Linux' },
  { name: 'Git' },
  { name: 'GitHub Actions' },
  { name: 'Helm' },
  { name: 'ArgoCD' },
];

export const projectBadgeDetails: ProjectBadgeDetails = {
  Web: { bg_color: '#EC4E20', txt_color: '#FFFFFF', title: 'Web Development' },
  ML: { bg_color: '#1A535C', txt_color: '#FFFFFF', title: 'Machine Learning' },
  CV: { bg_color: '#C20114', txt_color: '#FFFFFF', title: 'Computer Vision' },
  NLP: { bg_color: '#55286F', txt_color: '#FFFFFF', title: 'Natural Language Processing' },
  Cloud: { bg_color: '#87e2ff', txt_color: '#000000', title: 'Cloud Engineering/Deployment' },
};

export const projectItems: Project[] = [
  {
    name: 'Portfolio Website',
    description: 'Personal portfolio and blog built with Next.js, TypeScript, and Tailwind CSS. Statically exported and deployed to GitHub Pages.',
    image: '/images/projects/nextjs-portfolio-website.png',
    badges: ['Web'],
    links: {
      github: 'https://github.com/jothamteshome/NextJS-Portfolio-Website',
    },
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'MDX'],
    year: '2026',
    in_progress: true,
  },
  {
    name: 'Watch Together',
    description:
      'A full-stack application that allows users to watch YouTube videos together in real time. Features include synchronized playback, video queuing, and room-based collaboration. Built with React on the frontend and a Node.js/Express backend, with WebSockets enabling live synchronization between users.',
    image: '/images/projects/watch-together.png',
    badges: ['Web'],
    links: {
      github: 'https://github.com/jothamteshome/watch-together',
      live_demo: 'https://watch-together.whymighta.net',
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Socket.IO', 'TailwindCSS'],
    year: '2025',
  },
  {
    name: 'ChatGPT API with AWS CDK',
    description:
      "A serverless REST API that integrates OpenAI's GPT-4o-mini model using AWS CDK, Lambda, and API Gateway. Designed for scalable, secure deployment of chat-based AI services.",
    image: '/images/projects/aws-chatgpt-api.png',
    badges: ['Cloud', 'NLP'],
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
    image: '/images/projects/classification-of-pokemon-sprites.png',
    badges: ['CV'],
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
    image: '/images/projects/identifying-and-removing-toxic-comments.png',
    badges: ['NLP'],
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
    image: '/images/projects/predicting-nfl-betting-odds.jpg',
    badges: ['ML'],
    links: {
      github: 'https://github.com/jothamteshome/Predicting-NFL-Betting-Odds',
    },
    technologies: ['Python', 'PyTorch', 'Scikit-learn', 'BeautifulSoup'],
    year: '2023',
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    employer: 'Stefanini Group',
    start_date: 'April 2025',
    end_date: 'Present',
    role: 'Application Development Intern',
    tasks_completed: [
      'Created a globally deployed Python tool to automate SAP BPD and Technical Specification documents, cutting creation time by 70%',
      'Automated document pipeline with FastAPI, RabbitMQ, OpenAI API, and Azure Blob Storage, handling hundreds of requests monthly',
      'Integrated an AI chatbot by designing dialog flows and routing requests via REST APIs to trigger SAP document generation pipelines',
      'Deployed containerized services in Kubernetes with Helm and ArgoCD, ensuring consistency and cutting deployment effort by 40%',
    ],
    logo: '/images/stefanini_logo.jpg',
  },
  {
    employer: 'Versive',
    start_date: 'Jun 2024',
    end_date: 'Dec 2024',
    role: 'Machine Learning Engineer',
    tasks_completed: [
      'Built CNN models in PyTorch to detect tumors in MRI scans, enhancing diagnostic accuracy by 10% and supporting early detection',
      'Boosted model performance by 10% through YOLOv8 segmentation to focus on critical tumor regions during prediction',
      'Applied transfer learning with pretrained ImageNet weights to reduce training time 30% and improve precision across scans',
    ],
    logo: 'https://versive.ca/img/widi/logo.svg',
  },
  {
    employer: 'Michigan State University',
    start_date: 'Aug 2023',
    end_date: 'May 2024',
    role: 'Graduate Teaching Assistant',
    tasks_completed: [
      'Guided students in building responsive front-end projects using HTML, CSS, and JavaScript',
      'Improved student project outcomes by 7% through office hours and support with Flask back-end design and GitLab version control',
      'Reviewed and graded technical assignments for the Web Application Development course, ensuring rigorous academic standards',
    ],
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Michigan_State_University_seal.svg',
  },
  {
    employer: 'Versive',
    start_date: 'Jan 2023',
    end_date: 'Jul 2023',
    role: 'Software Development Engineer',
    tasks_completed: [
      'Developed a secure hospital app with AWS Amplify and RDS, improving MRI access times and reducing verification time by 20%',
      'Built Flask APIs and connected MySQL backend with React frontend for seamless user experience',
      'Ensured patient data security with encryption, RBAC, and MFA, achieving 100% compliance with HIPAA standards',
      'Leveraged Docker containers and Git for deployment and version control, improving development cycle efficiency by 15%',
    ],
    logo: 'https://versive.ca/img/widi/logo.svg',
  },
  {
    employer: 'Michigan State University Federal Credit Union',
    start_date: 'Aug 2022',
    end_date: 'Dec 2022',
    role: 'Software Engineering Intern',
    tasks_completed: [
      'Designed a peer-to-peer transfer system in Flutter/Dart with QR code and NFC support, increasing user transaction speed by 25%',
      'Integrated Google Places API to send personalized deal notifications based on shopping patterns, boosting app engagement by 18%',
      'Contributed to app improvements using Flutter, Dart, and SQL, enhancing overall app stability and reducing crash rates by 12%',
    ],
    logo: 'https://assets.bizclikmedia.net/576/9e74408088209589917c0ec30d0f5898:9fddd8f3760b713e18c51d4cde47fa63/404no22rkiiusfca101220200429.jpeg',
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: 'Michigan State University',
    start_date: 'Jan 2023',
    end_date: 'August 2024',
    degree_aquired: 'MS, Computer Science',
    gpa: '3.85',
    coursework: [
      'Natural Language Processing',
      'Computer Vision',
      'Pattern Recognition',
      'Deep Learning',
      'Algorithmic Graph Theory',
      'Distributed Systems',
    ],
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Michigan_State_University_seal.svg',
  },
  {
    institution: 'Michigan State University',
    start_date: 'Sep 2019',
    end_date: 'Dec 2022',
    degree_aquired: 'BS, Computer Science',
    gpa: '3.69',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Algorithm Engineering',
      'Web Application Development',
      'Database Systems',
    ],
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Michigan_State_University_seal.svg',
  },
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jothamteshome/',
    icon: icons.linkedin,
    bg_color: '#0072b1',
    title: 'Check out my Linkedin profile!',
  },
  {
    name: 'Github',
    url: 'https://github.com/jothamteshome',
    icon: icons.github,
    bg_color: '#2d3748',
    title: 'Check out my Github profile!',
  },
  {
    name: 'Resume',
    url: generalInfo.resume.src,
    icon: icons.file_pdf,
    bg_color: '#d86556',
    title: 'Check out my Resume!',
  },
];

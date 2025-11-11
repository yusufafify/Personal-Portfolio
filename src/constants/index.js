import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  cpp,
  python,
  conway,
  pixelalchemy,
  signal_composer,
  bus_trip,
  postgres,
  instagram,
  facebook,
  linkedin,
  github,
  ieLearn,
  linkUp,
  retino,
  organ,
  azha,
  blueline,
  envnt,
  ielearn_logo,
  pytorch,
  scikit_learn,
  tensorflow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: creator,
  },
  {
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "Technical Team Lead",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PyTorch",
    icon: pytorch, // You can add a custom PyTorch icon later
  },
  {
    name: "TensorFlow",
    icon: tensorflow, // You can add a custom TensorFlow icon later
  },
  {
    name: "scikit-learn",
    icon: scikit_learn, // You can add a custom scikit-learn icon later
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const testimonials = [
  {
    testimonial:
      "Youssef's Full Stack Development skills greatly improved healthcare systems by streamlining processes and enhancing accessibility in the Hospital-Management-System. His leadership translated complex requirements into scalable applications, positively impacting our organization.",
  },
  {
    testimonial:
      "Working with Youssef has been transformative. His dedication and proficiency in ReactJS, JavaScript, and other technologies, along with his problem-solving skills and enthusiasm for new tech, make him a valuable asset for any initiative.",
  },
  {
    testimonial:
      "Youssef's coding prowess is impressive. His problem-solving skills and proactive approach make him an invaluable asset for any tech-driven project. Collaborating with him has been a pleasure",
  },
];

const projects = [
  {
    name: "IE-Learn",
    description: "An integrated learning platform for IGCSE system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Socket-io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ieLearn,
    source_code_link: "https://github.com/yusufafify/IE-Learn",
  },
  {
    name: "LinkUp",
    description: "A full-stack LinkedIn clone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Socket-io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: linkUp,
    source_code_link: "https://github.com/yusufafify/LinkUp_Front_End",
  },
  {
    name: "PixelAlchemy",
    description:
      "PixelAlchemy is a web application that leverages the power of OpenAI's DALL-E API to generate unique and creative images.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pixelalchemy,
    source_code_link: "https://github.com/yusufafify/PixelAlchemy",
  },
  {
    name: "Conway's Game of Life",
    description:
      "An interactive simulation of Conway's Game of Life - a cellular automaton that demonstrates emergent complexity from simple rules. Built with React and TypeScript for a responsive, real-time experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: conway,
    source_code_link: "https://github.com/yusufafify/conways-game-of-life",
  },
  {
    name: "Diabetic Retinopathy Detection System",
    description:
      "A deep learning-powered clinical decision support system that detects diabetic retinopathy from retinal images. Built with Python, Flask, and PyTorch for accurate medical image analysis.",
    tags: [
      {
        name: "deep learning",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: retino,
    source_code_link:
      "https://github.com/yusufafify/Diabetic-Retinopathy-Detection-System",
  },
  {
    name: "Organ Transplant Matching System",
    description:
      "An intelligent matching system that optimizes organ transplant allocation using advanced algorithms and data structures. Features time complexity optimization for efficient patient-donor matching.",
    tags: [
      {
        name: "algorithm",
        color: "blue-text-gradient",
      },
      {
        name: "data structures",
        color: "green-text-gradient",
      },
      {
        name: "optimization",
        color: "pink-text-gradient",
      },
    ],
    image: organ,
    source_code_link:
      "https://github.com/yusufafify/Organ-Transplant-matching-system",
  },
  {
    name: "Signal Composer",
    description:
      "This desktop application enables users to compose custom signals, experiment with sampling and noise, and visualize the results to gain a deeper understanding of the Nyquist Sampling Theorem.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "QT designer",
        color: "pink-text-gradient",
      },
    ],
    image: signal_composer,
    source_code_link: "https://github.com/yusufafify/Signal-Composer",
  },
  {
    name: "Bus Trip Simulation",
    description:
      "This program leverages the principles of Data Structures and Algorithms to empower the transit system, optimizing passenger flow by considering diverse factors such as arrival times and desired destinations.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Visual Studio",
        color: "pink-text-gradient",
      },
    ],
    image: bus_trip,
    source_code_link: "https://github.com/yusufafify/Bus-Trip-Simulation",
  },
];

const experiences = [
  {
    title: "Freelance Front-End Engineer & UI Designer",
    company_name: "Blueline trd.",
    icon: blueline, // Placeholder - you can replace with actual logo
    iconBg: "#383E56",
    date: "June 2024 - September 2024",
    points: [
      "Delivered custom front-end solutions for Blueline trd. as a freelance developer.",
      "Created modern and responsive UI designs tailored to client requirements.",
      "Ensured cross-browser compatibility and optimal performance.",
      "Maintained clear communication with stakeholders throughout the project lifecycle.",
    ],
  },
  {
    title: "Freelance Front-End Engineer",
    company_name: "Azha Designs",
    icon: azha, // Placeholder - you can replace with actual logo
    iconBg: "#383E56",
    date: "September 2024 - October 2024",
    points: [
      "Architected and developed a full-featured e-commerce platform using Next.js 15, React 18, and TypeScript, implementing SSR and ISR for optimal SEO and performance.",
      "Built a comprehensive admin dashboard with real-time order management, customer analytics, inventory tracking, and data visualization using Recharts and Radix UI components.",
      "Developed RESTful API integration layer with custom hooks (useCustomQuery) for data fetching, caching, and error handling across product, order, and customer endpoints.",
      "Implemented secure authentication flows and protected routes with Next.js middleware, including JWT token management and role-based access control.",
    ],
  },
  {
    title: "Front-End Engineer Intern",
    company_name: "IE-Learn",
    icon: ielearn_logo, // Placeholder - you can replace with actual logo
    iconBg: "#E6DEDD",
    date: "July 2024 - January 2025",
    points: [
      "Engineered and deployed an IGCSE learning platform using React and Tailwind CSS, increasing student adoption by 40%.",
      "Implemented dynamic scheduling and content modules, reducing manual workload for admins by 50%.",
      "Integrated Socket.IO-powered chat and a Dialogflow AI chatbot to streamline student support interactions.",
      "Architected a scalable class hierarchy system using TypeScript and Context API for efficient navigation and content mapping.",
    ],
  },
  {
    title: "Front-End Team Lead",
    company_name: "LinkUp Project - Software Course",
    icon: web, // Placeholder - you can replace with actual logo
    iconBg: "#383E56",
    date: "April 2025",
    points: [
      "Led a 6-member Front-End sub-team in developing a React/TypeScript full-stack social networking platform (LinkedIn clone) as part of university software course.",
      "Developed the User Management Module (frontend), contributing ~45% of the 19-member team project.",
      "Integrated frontend with backend APIs in a stateful distributed architecture, ensuring instant synchronization.",
      "Enabled features such as user authentication, adding experiences and skills, and updating user information with a responsive design.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "ENVNT",
    icon: envnt, // Placeholder - you can replace with actual logo
    iconBg: "#383E56",
    date: "July 2025 - August 2025",
    points: [
      "Developed and deployed low-code web applications using OutSystems, delivering features from ideation to prototyping, debugging, and final delivery.",
      "Applied microservices architecture with a choreography-based approach to build scalable, modular applications composed of independent, seamlessly integrated services.",
      "Strengthened application architecture design, UX optimization, and data flow planning skills by focusing on high-level system thinking beyond code implementation.",
      "Collaborated in a fast-paced environment, enhancing both technical problem-solving and cross-functional teamwork abilities.",
    ],
  },
];

const socialMedia = [
  {
    image: github,
    link: "https://github.com/yusufafify",
    alt: "github",
  },
  {
    image: facebook,
    link: "https://www.facebook.com/Youssefafify12.89/",
    alt: "facebook",
  },
  {
    image: instagram,
    link: "https://www.instagram.com/_youssef.afify/?hl=en",
    alt: "instagram",
  },
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/youssef-afify-aa458b2b2/",
    alt: "Linkedin",
  },
];

export {
  services,
  technologies,
  testimonials,
  projects,
  socialMedia,
  experiences,
};

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
  arduino,
  car_showcase,
  prompt_verse,
  pixelalchemy,
  signal_composer,
  snake_ladder,
  bus_trip,
  postgres,
  instagram,
  facebook,
  linkedin,
  github
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Desktop Developer",
    icon: web,
  },
  {
    title: "Student at CUFE",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Postgresql",
    icon: postgres,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C++",
    icon: cpp,
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
    name: "Car Hub",
    description:
      "A website that provides comprehensive information about various types of cars, including details such as manufacturer, release date, MPG (Miles Per Gallon), and class.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapid api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: car_showcase,
    source_code_link: "https://github.com/yusufafify/Car-Hub",
    live_preview_link: "https://car-hub-pearl-one.vercel.app/",
  },
  {
    name: "PromptVerse.Ai",
    description:
      "Web application that is designed to unleash the full potential of GPT by allowing users to create, share, and explore AI prompts.",
    tags: [
      {
        name: "NEXT JS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: prompt_verse,
    source_code_link: "https://github.com/yusufafify/promptVerse.Ai",
    live_preview_link: "https://prompt-verse-ai.onrender.com/",
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
    live_preview_link: "https://pixel-alchemy.netlify.app/",
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
    name: "Snake & Ladder Monopoly",
    description:
      "A fun and interactive console-based game that combines the elements of the classic games of Snake and Ladder and Monopoly.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "CMUgraphics",
        color: "green-text-gradient",
      },
    ],
    image: snake_ladder,
    source_code_link: "https://github.com/yusufafify/Snake_Ladder_Monopoly",
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

const socialMedia=[
  {
    image:github,
    link:'https://github.com/yusufafify',
    alt:'github'
  },
  {
    image:facebook,
    link:'https://www.facebook.com/Youssefafify12.89/',
    alt:'facebook'
  },
  {
    image:instagram,
    link:'https://www.instagram.com/_youssef.afify/?hl=en',
    alt:'instagram'
  },
  {
    image:linkedin,
    link:'https://www.linkedin.com/in/youssef-afify-aa458b2b2/',
    alt:'Linkedin'
  },
]

export { services, technologies, testimonials, projects,socialMedia };

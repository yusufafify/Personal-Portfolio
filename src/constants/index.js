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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
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

// const experiences = [
//   {
//     title: "Full stack Developer",
//     company_name: "Blue Line",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "June 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Pthon Desktop Applications",
//     company_name: "CUFE",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "September 2023 - Jan 2024",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Bus Trip simulation in C++",
//     company_name: "CUFE",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Oct 2023 - Dec 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

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
    live_preview_link: "https://car-hub-one-chi.vercel.app/",
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
  // {
  //   name: "Signal Composer",
  //   description:
  //     "This desktop application enables users to compose custom signals, experiment with sampling and noise, and visualize the results to gain a deeper understanding of the Nyquist Sampling Theorem.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "QT designer",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: signal_composer,
  //   source_code_link: "https://github.com/yusufafify/Signal-Composer",
  // },
  // {
  //   name: "Snake & Ladder Monopoly",
  //   description:
  //     "A fun and interactive console-based game that combines the elements of the classic games of Snake and Ladder and Monopoly.",
  //   tags: [
  //     {
  //       name: "C++",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CMUgraphics",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: snake_ladder,
  //   source_code_link: "https://github.com/yusufafify/Snake_Ladder_Monopoly",
  // },
  // {
  //   name: "Bus Trip simulation",
  //   description:
  //     "A program empowers the transit system to optimize passenger flow, considering diverse factors like arrival times, and desired destinations.",
  //   tags: [
  //     {
  //       name: "C++",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Visual Studio",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: bus_trip,
  //   source_code_link: "https://github.com/yusufafify/Bus-Trip-Simulation",
  // },
];

export { services, technologies, testimonials, projects };

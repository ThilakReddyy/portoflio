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
  figma,
  docker,
  python,
  cplusplus,
  meta,
  starbucks,
  maersk,
  xlenz,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  django,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    icon: mobile,
  },
  {
    title: "Automation Specialist",
    icon: backend,
  },
  {
    title: "Web Scraping Specialist",
    icon: creator,
  },
];

const technologies = [

  {
    name: "cplusplus",
    icon: cplusplus,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Maersk",
    icon: maersk,
    iconBg: "#FEFEFE",
    date: "January 2022 - At present",
    points: [
      " Developed a website which extracts dynamic and static reports using Django and React",
      "Automated processes and wrote scripts in Python to improve efficiency and reduce manual work.",
      "Improved the reliability of the application by maintaining a low defect rate, proactively identifying and resolving issues before they affect the user.",
      "Automated the test cases using TestStack UI",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Xlenz",
    icon: xlenz,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2021",
    points: [
      "Worked on the Implementation of VirtualTryOn on web using Three.js and AR.js.",
      "Implemented the service worker which loads an AR model when the user is offline",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Performed Code reviews for teammates, involved in technical discussions and Knowledge sharing sessions",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "JNTUH RESULTS",
    description:
      "This project aims to provide students of JNTUH University with an efficient way of accessing their own semester results as well as those of their classmates. With just a single click, students will be able to view their academic performance throughout the semesters.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "cheerio",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ThilakReddyy/JNTUHRESULTS-WEB",
  },
  {
    name: "TS SSC Results",
    description:
      "This project aims to provide 10th students of telangana with an efficient way of accessing their own results as well as those of their classmates. With just a single click, students will be able to view their academic performance and compare it with their classmates.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "cheerio",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ThilakReddyy/TS-SSC-RESULTS-WEB",
  },
  {
    name: "SURVEILLANCE USING FACE RECOGNITION",
    description:
      "This project utilizes face recognition technology to enhance security on a college campus. The system is designed to identify and track individuals by comparing their facial features with a pre-existing database of enrolled students faces.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "bs4",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ThilakReddyy/SURVEILLANCE-SYSTEM-USING-FACE-RECOGNITION",
  },
];

export { services, technologies, experiences, testimonials, projects };

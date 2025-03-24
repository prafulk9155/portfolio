import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";
import projectsData from '../assets/json/projects.json';


import {
  // mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  oges,
  newton_school,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  internshala,
  threejs,
  devEng,
  // devops,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops Engineer",
    icon: devEng,
  },
];

const technologies: TTechnology[] = [
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
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "MERN Stack Traniee",
    companyName: "Newton School",
    icon: newton_school,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Mar 2022",
    points: [
      "Demonstrated expertise in MongoDB, Express.js, React.js, and Node.js honed through hands-on experience at Newton School.",

      "Successfully contributed to multiple projects during the tenure, showcasing the ability to work effectively within a team environment",

      "Engineered scalable applications capable of handling diverse user requirements, ensuring optimal performance and user satisfaction",
    ],
  },
  {
    title: "Web Developer Intern",
    companyName: "Command Consultancy Software Pvt Ltd",
    icon: "",
    iconBg: "#383E56",
    date: "Mar 2022 - May 2023",
    points: [
      "Completed an 8 week internship training.",
      
      "Worked on different technologies related to web development.",
     
      "Completed projects and get certified by the company."
    ],
  },
  {
    title: "Web Developer Traniee",
    companyName: "Internshala",
    icon: internshala,
    iconBg: "#383E56",
    date: "Mar 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using HTML, CSS, Javascript and React Js",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Project Engineer",
    companyName: "Oges Solution Pvt. Ltd",
    icon: oges,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - May 2023",
    points: [
      
"      Experienced web developer specializing in PHP for backend development, with a proficiency in SQL databases."      ,
"      Skilled in creating dynamic and responsive user interfaces using Angular, HTML and CSS for frontend development." ,    
      
"      Passionate about crafting efficient and innovative server side solution as task automation with cronjob using shell scripts."    ],
  },
  {
    title: "Project Engineer 3",
    companyName: "Oges Solution Pvt. Ltd.",
    icon: oges,
    iconBg: "#383E56",
    date: "June 2023 - Mar 2025",
    points: [
     " Versatile professional with expertise in full-stack development, encompassing frontend and backend technologies."
      ,
     " Skilled in Angular and React for frontend, Node JS for backend, and proficient in MySQL for database management."
      ,
      "Extensive experience in DevOps, server administration, and comprehensive DBMS management."
    ],
  },
   {
    title: "Full Stack Developer",
    companyName: "Taxmann",
    icon: oges,
    iconBg: "#383E56",
    date: " Mar 2025 - present",
    points: [
     "Proficient in MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React, Node.js) stacks, ensuring seamless development of scalable web applications."
      ,
     "Skilled in building robust RESTful APIs with Node.js and Express, integrating Elasticsearch for efficient full-text search and real-time data processing."
      ,
      "Expertise in MongoDB and MySQL for database management, along with hands-on experience in DevOps, CI/CD pipelines, Docker, and cloud deployment for scalable infrastructure."
    ],
  },
];

const testimonials: TTestimonial[] = [
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

// const projects: TProject[] = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     sourceCodeLink: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     sourceCodeLink: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     sourceCodeLink: "https://github.com/",
//   },
// ];
const projects: TProject[] = projectsData.project;

export { services, technologies, experiences, testimonials, projects };

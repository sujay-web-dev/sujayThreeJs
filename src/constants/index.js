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
  reformx,
  threejs,
  carelon,
  netflix,
  covid,
  amazon,
  youtube,
  airbnb,
  hulu,
  sass,
  Solidity,
  hardhat,
  angular
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Smart Contract Developer",
    icon: mobile,
  },
  {
    title: "Open Source Contributor",
    icon: creator,
  },
];

const technologies = [
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
    name: "Sass",
    icon: sass,
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
    name: "git",
    icon: git,
  },  
  {
    name: "solidity",
    icon: Solidity,
  },
  {
    name: "hardhat",
    icon: hardhat,
  },
  {
    name: "angular",
    icon: angular,
  }
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Carelon Global Solutions",
    icon: carelon,
    iconBg: "#ffffff",
    date: "June 2021 - Present",
    points: [
      "Modernization of Legacy Web Application",
      "I played a crucial role in the modernization of a healthcare application by implementing a user-centered design approach and utilizing React JS, Redux, and Material UI.",
      "This resulted in a significant 30% improvement in user experience.",
      "Through collaboration with the backend development, QA, and testing teams, I helped meet product requirements and achieved a 30% reduction in bug reports and improved system stability.",
      "I was a key contributor to the development of a major healthcare insurance web application using Angular & Typescript. ",
      "My efforts resulted in the successful delivery of complex screens with extensive field validations, leading to a 25% reduction in errors.",
      "I ensured seamless integration with the overall application through the development of REST/Web API and thorough testing with Postman."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "REFORMX",
    icon: reformx,
    iconBg: "#CBEDFF",
    date: "Sep 2018 - June 2021",
    points: [
      "Developed an in-house web app using React that allowed for Employees to manage HR processes,Recruitment, to increase Recruiter productivity.",
      "Implemented continuous integration and delivery.",
      "Used React Axios to call Web APIs to fetch data from backend and update the states in the store of Redux.",
      "Worked on responsive design and developed a single page responsive website that could be served to desktop, tablets and mobile users using ReactJs.",

    ],
  }  
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
    domain:"React JS",
    name: "Netflix Clone",
    description:
      "A React JS Web App ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
      {
        name: "flexbox",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    web_link:"https://sujayflix.web.app/",
    source_code_link: "https://github.com/sujay-web-dev/netflix-clone/tree/master",
  },
  {
    domain:"React JS",
    name: "Covid Tracker",
    description:
      "A React JS Web App ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
    web_link:"https://sujay-covid19-tracker.web.app/",
    source_code_link: "https://github.com/sujay-web-dev/covid-19-tracker/tree/main",
  },
  {
    domain:"React JS",
    name: "Hulu Clone",
    description:
      "A React JS Web App ",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hulu,
    web_link:"https://sujay-hulu.web.app/",
    source_code_link: "https://github.com/sujay-web-dev/hulu-clone",
  },
  {
    domain:"React JS",
    name: "AirBnb Clone",
    description:
      "A React JS Web App ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    web_link:"https://sujay-airbnb.web.app/",
    source_code_link: "https://github.com/sujay-web-dev/Airbnb",
  },
  {
    domain:"React JS",
    name: "Amazon Clone",
    description:
      "A React JS Web App ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    web_link:"https://sujayzon.web.app/",
    source_code_link: "https://github.com/sujay-web-dev/amazon-clone",
  },
  {
    domain:"React JS",
    name: "Youtube Clone",
    description:
      "A React JS Web App ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    web_link:"https://soutube-react.web.app/",
    source_code_link: "https://github.com/sujay-web-dev/Youtube-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  reformx,
  threejs,
  honeyWell,
  carelon,
  netflix,
  covid,
  hulu,
  sass,
  Solidity,
  hardhat,
  angular,
  eventSC,
  crowdDapp,
  MERNAdmin,
  ecomMERN,
  AdminMern_1,
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
    id: "resume",
    title: "Resume"
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
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Honeywell",
    icon: honeyWell,
    iconBg: "#ffffff",
    date: "July 2023 - Present",
    points: [
      "Aerospace Engine Management Web Application Development",
      "Involved in developing aerospace web application tailored to optimize aircraft engine operations. Employing the MERN (MongoDB, Express.js, React, Node.js) stack, orchestrated a comprehensive, full-stack solution to efficiently manage and organize critical data associated with plane engines, further enhanced by blockchain integration through Hyperledger.",
      "Used blockchain technology developed with Hyperledger Framework, facilitating secure and immutable storage of critical aircraft engine data. Implemented smart contracts to enable seamless transactions within the blockchain network.",
      "Implemented advanced testing methodologies, leveraging the Jest framework and Selenium, to conduct comprehensive testing and ensure the reliability and robustness of the aerospace web application.",
      "Have strong understanding of relational databases, particularly SQL Server. ",
      "Implemented microservice architecture and related stacks, leveraging container technologies such as Docker, ensuring scalability and flexibility of the aerospace web application.",
      "Embraced agile methodologies for iterative development, fostering quick adaptation to evolving requirements and fostering collaboration within the development team.",
    ],
  },
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
      "I ensured seamless integration with the overall application through the development of REST/Web API and thorough testing with Postman.",
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
  },
];

const projects = [
  {
    domain: "React JS",
    name: "Netflix Clone",
    description:
      "A React JS Web App with Firebase Backend Used TMDB API Key for Movies database ",
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
    web_link: "https://sujayflix.web.app/",
    source_code_link:
      "https://github.com/sujay-web-dev/netflix-clone/tree/master",
  },
  {
    domain: "Smart Contract",
    name: "Crowd Funding Smart Contract",
    description: `In this Solidity Smart Contract one can create a Event and others can buy tickets to the event, and details are saved in Ethereum Blockchain`,
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Remix IDE",
        color: "green-text-gradient",
      },
      {
        name: "Goerli-Ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: eventSC,
    web_link:
      "https://goerli.etherscan.io/address/0x19ded13c0bd2c4d274a7ae5fd8eef2b569cf2d2a",
    source_code_link:
      "https://github.com/sujay-web-dev/crowd-funding-smart-contract",
  },
  {
    domain: "MERN Stack",
    name: "MERN Admin DashBoard",
    description: `A e-Commerce Back end built with Node Js, Express JS, Mongo DB`,
    tags: [
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: MERNAdmin,
    web_link: "https://github.com/sujay-web-dev/MERN_Admin_DashBoard",
    source_code_link: "https://github.com/sujay-web-dev/MERN_Admin_DashBoard",
  },
  {
    domain: "Dapps",
    name: "Dapp Crowd Funding",
    description: `A e-Commerce Back end built with Node Js, Express JS, Mongo DB`,
    tags: [
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: crowdDapp,
    web_link: "https://sensational-snickerdoodle-6d6dc0.netlify.app/",
    source_code_link: "https://github.com/sujay-web-dev/Dapp-Crowd-Funding",
  },
  {
    domain: "MERN Stack",
    name: "BackEnd E-Commerce",
    description: `A e-Commerce Back end built with Node Js, Express JS, Mongo DB`,
    tags: [
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: AdminMern_1,
    web_link: "https://github.com/sujay-web-dev/bigEcomApp",
    source_code_link: "https://github.com/sujay-web-dev/bigEcomApp",
  },
  {
    domain: "React JS",
    name: "Covid Tracker",
    description: `In this web app i have used "disease.sh" for getting covid-19 counts with there API key and used "react-leaflet" for map usage in the web app.`,
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
    web_link: "https://sujay-covid19-tracker.web.app/",
    source_code_link:
      "https://github.com/sujay-web-dev/covid-19-tracker/tree/main",
  },
  {
    domain: "React JS",
    name: "Hulu Clone",
    description: `Hulu-clone-App-Made-from-Reactjs-with-Firebase-Backend Used TMDB API Key for Movies database and intergrated into this App. `,
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
    web_link: "https://sujay-hulu.web.app/",
    source_code_link: "https://github.com/sujay-web-dev/hulu-clone",
  },
  {
    domain: "Smart Contract",
    name: "Event Organization Smart Contract",
    description: `In this Solidity Smart Contract one can create a Event and others can buy tickets to the event, and details are saved in Ethereum Blockchain`,
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Remix IDE",
        color: "green-text-gradient",
      },
      {
        name: "Goerli-Ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: eventSC,
    web_link:
      "https://goerli.etherscan.io/address/0xCD9B114a5dAaf4D0B5c4F6e4F138d156A640E754",
    source_code_link:
      "https://github.com/sujay-web-dev/event-organization-smart-contract",
  },
  {
    domain: "Smart Contract",
    name: "Lottery Smart Contract",
    description: `In this Solidity Smart Contract one can create a Event and others can buy tickets to the event, and details are saved in Ethereum Blockchain`,
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Remix IDE",
        color: "green-text-gradient",
      },
      {
        name: "Goerli-Ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: eventSC,
    web_link:
      "https://goerli.etherscan.io/address/0x28ed4f6f95884062b980220ab52ab7603eefb82e",
    source_code_link: "https://github.com/sujay-web-dev/Lottery_Solidity",
  },
  {
    domain: "MERN Stack",
    name: "MERN E-Commerce App",
    description: `A e-Commerce App built with MERN Stack which includes Login Module , Admin Dashboard & Customer Dashboard`,
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: ecomMERN,
    web_link: "https://github.com/sujay-web-dev/e-commerce",
    source_code_link: "https://github.com/sujay-web-dev/e-commerce",
  },
];

export { services, technologies, experiences, projects };

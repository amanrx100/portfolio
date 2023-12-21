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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  java,
  college,
  Hschool,
  Sschool,
  redstore,
  restro,
  fl,

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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Wordpress Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
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
    name: "java",
    icon: java,
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
    title: "Web Developer",
    company_name: "iNeuron",
    icon: reactjs,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Skills: HTML, CSS, JavaScript, ReactJS, Tailwind CSS, PostgreSQL",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Emeelan Solutions pvt.",
    icon: tailwind,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Designed user‑centered company websites, such as Emeelan, using ReactJS and modern design principles to enhance user experience and reflect brand identity.",
      "Successfully replicated kiwico.com for client, demonstrating the ability to understand and recreate intricate designs using React.js ",
      "Skills: HTML, CSS, JavaScript, ReactJS, Tailwind CSS,Bootstrap",
    ],
  },
  {
    title: "Data Science Training",
    company_name: "codenscious",
    icon: python,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Learned languages like Python data manipulation and analysis.",
      "Visualizing and exploring data for insights using matplotlib and numpy and pandas",
      "Skills: Python, pandas, numpy, Matplotlib, JupyterNotebook",
    ],
  },
  {
    title: "Java Developer",
    company_name: "SYNC",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - March 2023",
    points: [
      "Learned about basic concept of java programming and Object Oriented programming concepts",
      "Worked on developing a Snake game using Jframe and display live score",
      "Skills: Java, OOPs, JFrame",
    ],
  },
  {
    title: "Hackathon",
    company_name: "Kriyeta",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "June 2023 - June 2023",
    points: [
      "Role: Worked as a Frontend Developer at National Hackathon Kriyeta",
      "Project: Designed an Anime Themed E-commerce website within a 36-hour timeframe.",
      "Achievement: Our team secured a position in the Top 5 among 30 participating teams",
    ],
  },
];
const academics = [
  {
    title: "IPS Academy",
    company_name: "B.Tech CSE(Data Science)",
    icon: college,
    iconBg: "#383E56",
    date: "2020-2024",
    points: [
      "CGPA - 8.91",
    ],
  },
  {
    title: "Indian Public High School",
    company_name: "Higher Secondary XII",
    icon: Hschool,
    iconBg: "#E6DEDD",
    date: "2019 - 2020",
    points: [
      "XII % - 88.20",
    ],
  },
  {
    title: "Madam Curie High School",
    company_name: "Secondary X",
    icon: Sschool,
    iconBg: "#383E56",
    date: "2017 - 2018",
    points: [
      "X % - 95.6",
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
    name: "AnimeMerch",
    description:
      "Developed an anime‑themed t‑shirt selling website using MERN Stack Integrated dynamic product listings, shopping cart functionality, and secure payment integration for a seamless .....",
    tags: [
      {
        name: "react",
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
    image: carrent,
    source_code_link: "https://github.com/amanrx100/AnimemerchOriginal",
    live_link: "https://animemerch-w7od.onrender.com/",
  },
  {
    name: "Sanamio Portfolio",
    description:
      "Created a company website with a blog, portfolio section and SEO integration.User can post blog content, a visual showcase of projects, and improved search engine visibility.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
      {
        name: "phlox",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    live_link: "https://sanamio.42web.io/",
  },
  {
    name: "RedStore",
    description:
      "Designed an Ecommerce website of RedStore, including responsiveness cart page, contact page etc. Using the basic concept of Html Css and javaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: redstore,
    source_code_link: "https://github.com/amanrx100/Redstore",
  },
  {
    name: "Food Ordering",
    description:
      "Coming soon ......",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: restro,
    source_code_link: "https://github.com/",
  },
  {
    name: "College Interconnection",
    description:
      "Creating a social media platform for college.In development Phase ...",
    tags: [
      // {
      //   name: "HTML",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "CSS",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "JS",
      //   color: "pink-text-gradient",
      // },
    ],
    image: fl,
    source_code_link: "https://github.com/amanrx100/Redstore",
    live_link:"https://amanrx100.github.io/FriendsLogy/",
  },
];

export { services, technologies, experiences, testimonials, projects, academics };

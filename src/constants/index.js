import {
  Agrinconnect,
  vocalVerify,
  vm,
  b1,
  b4,
  b5,
  grid,
  alShita,
  GitHub, 
  link,
  Plunes, 
  DashBoard3, 
  Login,
  TheFica,
  FoodLabel1, 
  FoodLabel4, 
  FoodLabel3, 
  FoodLabel2
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Work",
  },
  {
    id: "approach",
    title: "Approach",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "resume",
  },
];

const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: b1,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: grid,
    spareImg: b4
  },

  {
    id: 5,
    title: "Currently building a Personal Project related to Finance",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: b5,
    spareImg: grid
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

const experience = [
  {
    title: "Full Stack Developer",
    company: "Plunes Healthcare",
    time: "June 2024 - Sept 2024",
    images : [Plunes, DashBoard3, Login, TheFica],
    points: ["1. Led the development of an insurance CRM panel, resulting in reduction of response times by 20%","2. Built and deployed scalable RESTFull APIs resulting an increase in efficiency by 20%.","3. Created FICA’s website with Next.js for a seamless user experience"],
  },
  {
    title: "Full Stack Developer",
    company: "CosyLab",
    time: "Sept 2024 - Dec 2024",
    images: [FoodLabel1, FoodLabel4, FoodLabel3, FoodLabel2],
    points: ["1. Developed a full-stack food search platform using React, Vite, Node.js, and ElasticSearch, enabling multi-criteria searches (e.g., NOVA class, nutrients, category).","2. Implemented Logstash ELT pipeline to transfer 8L+ dataset entries to ElasticSearch.","3. Deployed ElasticSearch and backend server using Docker for scalability.articipating in code reviews and providing constructive feedback to other developers.","4. Designed microservices for ML model integration and ElasticSearch interactions."],
  },
];

const featuredProjects = [
  {
    id: 0,
    title: "Full Stack Developer",
    points : "A web based platform which leverages facial recognition technology to streamline visitor management for academic institutions."+ " Meeting schedules are seamlessly integrated with Google Calendar for both professors and students. This ensures efficient appointment handling and enhances campus security by verifying identities at entry points",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Socket.io", "AWS"],
    gitlink: "https://github.com/mahanshAdtiya/VisitorManagement",
    // livelink: "https://github.com/mahanshAdtiya/VisitorManagement",
    image: vm
  },
  {
    id: 1,
    title: "AgriConnect",
    stats : [
      {main : 'Over 1M', sub: "Increase in user base, demonstrating significant growth and effectiveness"},
      {main : '35%', sub: "IIncrease in daily active users shows enhanced engagement"},
    ],
    points : "A full-stack web applicationa platform which provides farmers with real-time market information, weather forecasts and innovative farming techniques, enabling them to enhance crop yields, and adapt to climate variation effectively. For better user experience, user can view the website in both Hindi and English languages.",
    tech: ["React.js", "Tailwind CSS"],
    gitlink: "https://github.com/mahanshAdtiya/AgriConnect",
    livelink: "https://agriconnect.netlify.app",
    image: Agrinconnect
  },
  {
    id: 2,
    title: "Vocal Verify",
    points : "A full-stack web application which uses a deepfake voice detection ML model made using Random Forest algorithm to detect fake voices.",
    tech: ["React.js", "Flask", "Tailwind CSS", "Random Forest Algorithm"],
    gitlink: "https://github.com/mahanshAdtiya/VocalVerify",
    livelink: "https://vocalverify.netlify.app",
    image: vocalVerify
  },
  {
    id: 3,
    title: "Stock Rev",
    points : "A a stock monitoring platform that allows users to create and manage watchlists and display the latest stock prices. It is built using React, TypeScript, Material UI for the frontend, and Django for the backend. The platform integrates with Alpha Vantage to fetch stock data.",
    tech: ["React.js","Django","SQLite", "Typescript"],
    gitlink: "https://github.com/mahanshAdtiya/stock-monitor",
    // livelink: "https://github.com/mahanshAdtiya/stock-monitor",
    image: alShita
  }
]

const projects = [
  {
    name: "BingeHub",
    description:
      "An API based project, which helps you in keeping a track of all the movies,shoes and animes you have watched, want's to watch, your favourites and many more features.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Next-auth",
      },
    ],
    icon:"fab fa-react",
    gitHub_link: "https://github.com/mahanshAdtiya/BingeHub.git",
    deployed_link : "https://vocalverify.netlify.app/"
  },
  {
    name: "msh-custom shell",
    description:
      "It's a custom shell made by me in C language which runs all the basic commands of linux and also use emoticons to give a sense of friendly enviornment",
    tags: [
      {
        name: "C-Language",
      },
      {
        name: "Linux",
      },
    ],
    icon: "fas fa-code",
    gitHub_link: "https://github.com/mahanshAdtiya/Msh-Custom-Shell.git",
  },
  {
    name: "Tank-Star",
    description:
      "Tanks stars is a PvP experience. In creating this game, we utilized object-oriented programming concepts and applied design principles utilizing the Libgdx library.",
    tags: [
      {
        name: "Java-Language",
      },
      {
        name: "Libgdx Library",
      },
      
    ],
    icon: "fas fa-mobile",
    gitHub_link: "https://github.com/AaravBalachandran/Game.git",
  },
  {
    name: "Distributed Sytems",
    description:
      "Designed and implemented a low-level group messaging application utilizing ZeroMQ on Google Cloud virtual machines, featuring a central messaging server, group management, real-time user interactions, message storage, retrieval based on timestamps, and user group membership functionalities.",
    tags: [
      {
        name: "Python",
      },
      {
        name: "ZeroMQ",
      },
      
    ],
    icon: "fab fa-python",
    gitHub_link: "https://github.com/mahanshAdtiya/DSCD-Assignment",
  },
  {
    name: "Custom TCP Receiver",
    description:
      "A custom TCP receiver which accept TCPSegments from the sender, using a robust reassembler to ensure seamless data transmission. Effectively managed packet loss and ensured data integrity by implementing sophisticated reassembly mechanisms, correctly writing bytes into the byte stream.",
    tags: [
      {
        name: "C-Language",
      },
      {
        name: "Computer Networks",
      },
      
    ],
    icon: "fas fa-code",
    gitHub_link: "https://github.com/mahanshAdtiya/CN-Assignments",
  },
  {
    name: "WebMart",
    description: "Developed a scalable online retail CRUD app using microservices, React, MySQL, and Docker.. Optimized SQL queries with OLAP, triggers, and normalization, reducing data retrieval time by 27%. Implemented CI/CD, minimizing deployment errors and boosting performance, enhancing user experience and customer satisfaction.",
    tags: [
      {
        name: "Python",
      },
      {
        name: "MySQL",
      },
    ],
    icon: "fab fa-python",
    gitHub_link: "https://github.com/mahanshAdtiya/DSCD-Assignment",
  }
  
  
];

const approachData = [
  {
    title: "Planning & Strategy",
    iconOrder: "Phase 1",
    description: `We'll collaborate to map out your website's goals, target audience, 
                  and key functionalities. We'll discuss things like site structure, 
                  navigation, and content requirements.`,
    canvasProps: {
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
    },
  },
  {
    title: "Development & Progress Update",
    iconOrder: "Phase 2",
    description: `Once we agree on the plan, I cue my lofi playlist and dive into
                  coding. From initial sketches to polished code, I keep you updated
                  every step of the way.`,
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2,
    },
  },
  {
    title: "Development & Launch",
    iconOrder: "Phase 3",
    description: `This is where the magic happens! Based on the approved design, 
                  I'll translate everything into functional code, building your website
                  from the ground up.`,
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
      colors: [[125, 211, 252]],
    },
  },
];

const socialMedia = [
  {
    id: 1,
    link : "https://github.com/mahanshAdtiya" ,
    img: GitHub,
  },
  {
    id: 2,
    link : "https://www.linkedin.com/in/mahansh-aditya/" ,
    img: link
  },
];
  
export {navLinks, experience, gridItems, projects, featuredProjects, approachData, socialMedia}; 
export const Bio = {
    name: "Ritesh Mandaviya",
    roles: [
        "Full Stack Developer",
        "Programmer",
        "CyberSec enthusiastic",
        "Java Developer"
    ],
    description:
        "Full Stack Developer with 1+ year of SDE-1 level experience, specializing in backend development and building scalable systems, REST APIs, and distributed applications. Strong foundation in DSA, OOP, and System Design",
    github: "https://github.com/Ritesh0604",
    resume: [
        "https://drive.google.com/file/d/1cwcB_hWEXR2oG0111vRw_yrf30A4sxa1/view?usp=sharing"
    ],
    linkedin: "https://www.linkedin.com/in/ritesh-mandaviya-062004abc/",
    //Add more social media account
};

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", image: "/images/skills/languages/js.svg" },
      { name: "TypeScript", image: "/images/skills/languages/ts.svg" },
      { name: "Java", image: "/images/skills/languages/java.svg" },
      { name: "C++", image: "/images/skills/languages/cpp.svg" },
      { name: "Bash", image: "/images/skills/languages/bash.svg" },
      { name: "PowerShell", image: "/images/skills/languages/powershell.svg" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", image: "/images/skills/frontend/react.svg" },
      { name: "Angular", image: "/images/skills/frontend/angular.svg" },
      { name: "HTML", image: "/images/skills/frontend/html.svg" },
      { name: "CSS", image: "/images/skills/frontend/css.svg" },
      { name: "TailwindCSS", image: "/images/skills/frontend/tailwind-css.svg" },
      { name: "Bootstrap", image: "/images/skills/frontend/bootstrap.svg" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: "/images/skills/backend/nodejs.svg" },
      { name: "Express.js", image: "/images/skills/backend/expressjs.svg" },
      { name: "Spring Boot", image: "/images/skills/backend/spring-boot.svg" },
      { name: "Spring Security", image: "/images/skills/backend/spring-security.svg" },
      { name: "Keycloak", image: "/images/skills/backend/keycloak.svg" }
    ]
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", image: "/images/skills/db-cloud/postgresql.svg" },
      { name: "MySQL", image: "/images/skills/db-cloud/mysql.svg" },
      { name: "MongoDB", image: "/images/skills/db-cloud/mongodb.svg" },
      { name: "Firebase", image: "/images/skills/db-cloud/firebase.svg" },
      { name: "AWS", image: "/images/skills/db-cloud/aws.svg" }
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", image: "/images/skills/mobile/react-native.svg" }
    ]
  },
  {
    title: "CyberSecurity",
    skills: [
      { name: "Nmap", image: "/images/skills/cybersec/nmap.svg" },
      { name: "BurpSuite", image: "/images/skills/cybersec/burp-suite.svg" },
      { name: "WireShark", image: "/images/skills/cybersec/wireshark.svg" },
      { name: "Shodan", image: "/images/skills/cybersec/shodan.svg" },
      { name: "FoxyProxy", image: "/images/skills/cybersec/foxy-proxy.png" },
      { name: "Kali Linux", image: "/images/skills/cybersec/kali-linux.svg" },
      { name: "Cryptography", image: "/images/skills/cybersec/cryptography.svg" }
    ]
  },
  {
    title: "Architecture & Concepts",
    skills: [
      { name: "Microservices", image: "" },
      { name: "REST APIs", image: "" },
      { name: "DSA", image: "" },
      { name: "OOP", image: "" },
      { name: "LLD", image: "" },
      { name: "HLD", image: "" },
      { name: "Design Patterns", image: "" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", image: "/images/skills/devops/git.svg" },
      { name: "GitLab", image: "/images/skills/devops/gitlab.svg" },
      { name: "GitHub", image: "/images/skills/devops/github.svg" },
      { name: "Maven", image: "/images/skills/devops/maven.svg" },
      { name: "Postman", image: "/images/skills/devops/postman.svg" },
      { name: "VS Code", image: "/images/skills/devops/visual-studio-code.svg" }
    ]
  }
];

export const experiences = [
    {
        "id": 0,
        "date": "Jul 2025 — Present",
        "img": "/images/experience/argusoft.png",
        "role": "Programmer Analyst (Java Developer)",
        "company": "Argusoft India Ltd., Gandhinagar",
        "description": "Migrated legacy authentication to Keycloak + Spring Security for a system serving 500K+ users across USA restaurant networks with zero downtime. Built an NLP-based query engine using Java, OpenAI, and Qdrant vector database over 400+ tables. Designed prompt injection protection layers for secure AI-driven query processing. Developed GPS data ingestion pipelines for real-time vehicle telemetry analytics. Upgraded enterprise frontend from Angular 17 to Angular 21.",
        "tech": ["Java", "Spring Boot", "Keycloak", "OpenAI", "Qdrant", "Angular", "PostgreSQL"]
    },
    {
        "id": 1,
        "date": "Jan 2025 — Jun 2025",
        "img": "/images/experience/argusoft.png",
        "role": "Programmer Analyst Intern",
        "company": "Argusoft India Ltd., Gandhinagar",
        "description": "Developed a centralized IT Asset Management System to manage organizational resources (laptops, mobiles, accessories). Implemented QR/Barcode-based asset tracking, dynamic resource attributes, and lifecycle management. Built modules for resource assignment, repair tracking, and support ticket management with role-based access control.",
        "tech": ["Java", "Spring Boot", "PostgreSQL", "REST APIs"]
    }
];

export const education = [
    {
        id: 0,
        img: "/images/education/vgec.png",
        school: "Vishwakarma Government Engineering College, Ahmedabad",
        date: "Sep 2021 - Jun 2025",
        grade: "8.7 CGPA",
        desc: "I pursued a Bachelor's degree in Information Technology at Vishwakarma Government Engineering College. I completed six semesters and maintained a CGPA of 8.0. During my studies, I took courses in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I was also a member of the Google Developers Student Club at VGEC, where I learned and worked on exciting projects with a team of talented developers.",
        degree: "Bachelor of Engineering - BE, Information Technology",
    },
    {
        id: 1,
        img: "/images/education/vivek-vidhyalay.png",
        school: "Vivek Vidhyalay, Surat",
        date: "Apr 2019 - Apr 2021",
        grade: "84%",
        desc: "I completed my class 12 high school education at Vivek Vidhyalay, Surat, where I studied Physics, Chemistry & Maths.",
        degree: "GSEB(XII), Science Stream - PCM",
    },
    {
        id: 2,
        img: "/images/education/kmp.jpg",
        school: "K & M P Sarvajanik Vidhyalay, Surat",
        date: "Apr 2017 - Apr 2019",
        grade: "88%",
        desc: "I completed my class 10 education at K & M P Sarvajanik Vidhyalay, Surat, where I studied Science with Computer Application.",
        degree: "GSEB(X), Science with Computer",
    },
];

export const projects = [
    {
        id: 0,
        title: "Sports Infrastructure Management",
        date: "Oct 2023 - Nov 2023",
        description: "One of our significant projects was a sports infrastructure management app that included a robust role-based system. We designed the system to cater to different roles such as Admins, Authorities, and Managers on the web portal, while Supervisors, Instructors, and Athletes used a native app. Key features included a complaint tracking system, QR-based attendance, a badge system, fee module, slot booking for guest users, and chart analysis for data insights (This is our group project for SSIP 2023 in which we secure 1st Rank).",
        image: "/images/projects/sport-infra.png",
        tags: [
            "React Js",
            "Node Js",
            "Express Js",
            "MongoDB",
            "Stripe",
            "Redux",
            "Multer",
            "React Native"
        ],
        category: "web app",
        github: "https://github.com/Ritesh0604/Sports-Infrastructure-Management",
        webapp: "https://sports-infrastructure-management.vercel.app",
        member: [
            {
                name: "Ritesh Mandaviya",
                img: "https://avatars.githubusercontent.com/u/94890637?v=4",
                linkedin: "https://www.linkedin.com/in/ritesh-mandaviya-062004abc/",
                github: "https://github.com/Ritesh0604",
            },
            {
                name: "Devam Doshi",
                img: "https://avatars.githubusercontent.com/u/119748867?v=4",
                linkedin: "https://www.linkedin.com/in/devamdoshi212/",
                github: "https://github.com/devamdoshi212",
            },
            {
                name: "Uday Gohel",
                img: "https://avatars.githubusercontent.com/u/114012274?v=4",
                linkedin: "https://www.linkedin.com/in/uday-gohel-62817122a/",
                github: "https://github.com/UdayGohel",
            },
            {
                name: "Dhruv Shah",
                img: "https://avatars.githubusercontent.com/u/113520549?v=4",
                linkedin: "https://www.linkedin.com/in/dhruv-shah-52343922a/",
                github: "https://github.com/Dhruv9544",
            },
            {
                name: "Isha Sanghani",
                img: "https://avatars.githubusercontent.com/u/102859564?v=4",
                linkedin: "https://www.linkedin.com/in/isha-sanghani-b634a322a/",
                github: "https://github.com/Ishasanghani",
            },
        ],
    },
    {
        id: 1,
        title: "Personal Portfolio",
        date: "Apr 2024 - July 2024",
        description: "My personal portfolio project is a dynamic and visually appealing website designed to showcase my skills, projects, and experiences as a web developer. Built using HTML, CSS, and JavaScript, the portfolio highlights my work in web stack development, particularly in technologies like JavaScript, React, Node.js, and Express.",
        image: "/images/projects/old-personal-portfolio.png",
        tags: [
            "HTML5",
            "CSS",
            "JavaScript"
        ],
        category: "web app",
        github: "https://github.com/Ritesh0604/Personal_Portfolio",
        webapp: "https://personal-portfolio-lemon-pi.vercel.app/"
    },
    {
        id: 2,
        title: "CRM ERP Tool",
        date: "June 2024 - Continue",
        description: "The ERP/CRM tool is a comprehensive solution designed to streamline business processes across various functions, including invoicing, inventory management, accounting, and human resources (HR). Built on the MERN stack, this application leverages Node.js, Express.js, MongoDB, and React.js to deliver a powerful, full-stack experience.",
        image: "/images/projects/crm-erp.png",
        tags: [
            "React Js",
            "Node Js",
            "Express Js",
            "MongoDB",
            "Stripe",
            "Redux",
            "AWS S3",
            "Ant Design",
            "Pug",
            "Resend - Email Service",
        ],
        category: "web app",
        github: "https://github.com/Ritesh0604/CRM-ERP-Tool",
        webapp: "https://github.com/Ritesh0604/CRM-ERP-Tool"
    },
    {
        id: 3,
        title: "To-Do List",
        date: "Apr 2024 - Apr 2024",
        description: "The Angular Todo List application is a user-friendly tool designed to help users efficiently manage their tasks. With a sleek interface and robust functionality, this application includes user authentication and supports full CRUD (Create, Read, Update, Delete) operations (Group Project).",
        image: "/images/projects/todo-angular.png",
        tags: [
            "HTML5",
            "TailWind CSS",
            "Angular"
        ],
        category: "web app",
        github: "https://github.com/Ritesh0604/Angular_ToDoList",
        webapp: "https://github.com/Ritesh0604/Angular_ToDoList",
        member: [
            {
                name: "Ritesh Mandaviya",
                img: "https://avatars.githubusercontent.com/u/94890637?v=4",
                linkedin: "https://www.linkedin.com/in/ritesh-mandaviya-062004abc/",
                github: "https://github.com/Ritesh0604",
            },
            {
                name: "Khushi Patel",
                img: "https://avatars.githubusercontent.com/u/97098560?v=4",
                linkedin: "https://www.linkedin.com/in/khushi-patel-417752226/",
                github: "https://github.com/Khushipatel31",
            },
            {
                name: "Isha Sanghani",
                img: "https://avatars.githubusercontent.com/u/102859564?v=4",
                linkedin: "https://www.linkedin.com/in/isha-sanghani-b634a322a/",
                github: "https://github.com/Ishasanghani",
            },
        ],
    }
];


export const certificate = [
];

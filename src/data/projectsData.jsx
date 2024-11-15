/* eslint-disable react/jsx-key */

import nabi from '../assets/covers/nabi-store.png';
import emt from '../assets/covers/emt.png';
import music from '../assets/covers/music.png';
import chatgo from '../assets/covers/chatgo.png';
import imdb from '../assets/covers/imdb.png';
import devops from '../assets/covers/devops.png';
import hackerNews from '../assets/covers/hacker-news.png';
import loginForm from '../assets/covers/login-form.png';
import react from '../assets/covers/course.jpg';
import node from '../assets/covers/nodejs.png';
import vue from '../assets/covers/vuejs.png';
import cover from '../assets/covers/project-cover.png';
import eventradar from '../assets/covers/event-radar.png';
import trivago from '../assets/covers/trivago.png';
import hciProject from '../assets/covers/hci-project.png';
import chatApp from '../assets/covers/chat-app-design.png';

import HtmlSvg from '../components/UI/skills/html';
import JavaScriptSvg from '../components/UI/skills/javascript';
import CssSvg from '../components/UI/skills/css';
import TypescriptSvg from '../components/UI/skills/typescript';
import ReactSvg from '../components/UI/skills/reactjs';
import VueSvg from '../components/UI/skills/vue';
import ReduxSvg from '../components/UI/skills/redux';
import NextjsSvg from '../components/UI/skills/nextjs';
import FigmaSvg from '../components/UI/skills/figma';
import FlutterSvg from '../components/UI/skills/flutter';
import NetcoreSvg from '../components/UI/skills/netcore';
import PostgresqlSvg from '../components/UI/skills/postgresql';
import DjangoSvg from '../components/UI/skills/django';
import DockerSvg from '../components/UI/skills/docker';
import JavaSvg from '../components/UI/skills/java';
import KubernetesSvg from '../components/UI/skills/kubernetes';
import SpringBootSvg from '../components/UI/skills/springboot';
import Firebase from '../components/UI/skills/firebase';
import Python from '../components/UI/skills/python';
import Csharp from '../components/UI/skills/csharp';
import Kotlin from '../components/UI/skills/kotlin';

export const UXUI_DATA = [
    {
        projectName: "Chef Mate",
        image: cover,
        description: `This recipe app project aims to create a seamless and intuitive digital platform for cooking enthusiasts to discover, save, plan, and cook delicious meals effortlessly. With a focus on user-centric design, the app caters to a diverse audience of home cooks, culinary enthusiasts, and individuals seeking convenient meal planning solutions. The overarching goal of the project is to streamline the cooking experience, foster community engagement through recipe sharing, and inspire users to explore new flavors and cuisines.\nSolo project`,
        label: "site map",
        link: "https://www.figma.com/design/mUyMeFmg9sgayJ0ckhfP6w/Cook-App-Site-Map-(Community)",
        buttons: [
            {
                label: "user flows",
                link: "https://www.figma.com/design/5QLNt9055lFMPqI2HbkZAI/Cook-App-User-Flow-(Community)"
            },
            {
                label: "wireframes",
                link: "https://www.figma.com/design/eWL6q5WsPfQJrR0VaGbdsL/Cook-Book-Wireframe-(Community)"
            },
            {
                label: "prototype",
                link: "https://www.figma.com/design/ci7byJGe3m86FuU6Wdrzrr/Chef-App-Prototype-(Community)"
            }
        ],
        toolsAndTech: [<FigmaSvg />],

    },
    {
        projectName: "Redesign of Trivago's Search Results Page",
        image: trivago,
        description: `One of my recent projects involved evaluating Trivago's search results page to identify strengths and areas for improvement. Through a detailed examination of user interactions, I pinpointed key pain points, such as information overload in hotel listings and inconsistent layouts. My proposed design strategy emphasizes streamlined layouts, reduced clutter, and improved filter accessibility, aiming to facilitate easier decision-making for travelers.\nSolo project`,
        label: "research",
        link: "https://www.canva.com/design/DAGJDFi8_T0/8BafTiYZTbm78x8d-wKvNQ/view?utm_content=DAGJDFi8_T0&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        buttons: [
            {
                label: "wireframe",
                link: "https://www.figma.com/design/pqW38Um6gRmBretGoIUUA0/Redesign-of-Trivago's-search-results-(Community)"
            }
        ],
        toolsAndTech: [<FigmaSvg />],
    },
    {
        projectName: "Event Radar",
        image: eventradar,
        description: `EventRadar is a user-friendly platform designed to simplify event discovery and booking. It offers personalized event recommendations based on user preferences, covering a wide range of activities, from cultural events to nightlife. With streamlined booking, exclusive discounts, and a rich database of local events, users can efficiently plan and enjoy their free time. The platform also supports local businesses through partnerships and targeted advertising, providing a valuable tool for both event organizers and users.\nTeam project`,
        link: "https://www.figma.com/design/RcseplJTjbKkUlueAQVcId/EventRadar-(Community)",
        toolsAndTech: [<FigmaSvg />],
    },
    {
        projectName: "NUI Skin",
        image: hciProject,
        description: `As part of my Human-Computer Interaction course, I developed a specialized online store offering skincare products from various brands. The project focused on providing personalized skincare routines based on the buyer’s skin type. My role involved conducting a PACT analysis, interview questions for user research, creating stories, user scenarios and personas, and designing user flows. I then translated this research into the design of the website prototype.\nSolo project`,
        link: "https://www.figma.com/design/3jDryfCkhzBP9NnTr1oW9M/Human-Computer-Interaction-Final-Project-Prototype-(Community)",
        toolsAndTech: [<FigmaSvg />],
    },
    {
        projectName: "NeonChat",
        image: chatApp,
        description: `This dynamic messaging app prototype offers users a seamless and personalized experience unlike any other. With customizable themes to match every mood, effortless friend management, and integrated radio functionality, NeonChat transforms the way users connect and communicate with friends.\nSolo project`,
        link: "https://www.figma.com/design/DxDQG1x06NKnmuQX0KhgDq/Chat-App-Design-(Community)",
        toolsAndTech: [<FigmaSvg />],
    }
]

export const COURSES_DATA = [
    {
        projectName: "React - The Complete Guide (Udemy Course)",
        image: react,
        description: `I completed a comprehensive React development course on Udemy, where I gained hands-on experience through a series of diverse projects. The curriculum covered essential React concepts such as components, props, state management, and advanced techniques including Redux, React Router, and custom hooks. Each project emphasized practical implementations, enabling me to build interactive and scalable web applications.\nCourse Learnings`,
        link: "https://github.com/Solunska/udemy-course-react-projects",
        toolsAndTech: [<HtmlSvg />, <CssSvg />, <JavaScriptSvg />, <TypescriptSvg />, <ReactSvg />, <ReduxSvg />, <NextjsSvg />],
    },
    {
        projectName: "The Vue 3 Bootcamp - The Complete Developer Guide (Udemy Course)",
        image: vue,
        description: `I’m currently taking a Vue.js course on Udemy, building a strong foundation in front-end development. The course covers key skills like state management with Pinia, API handling, user authentication, and TypeScript. I’m working on several projects, applying what I’m learning with best practices. \nCourse Learnings`,
        link: "https://github.com/Solunska/vuejs-learnings",
        toolsAndTech: [<HtmlSvg />, <CssSvg />, <JavaScriptSvg />, <VueSvg />]
    },
    {
        projectName: "NodeJS - The Complete Guide (Udemy Course)",
        image: node,
        description: `I am currently working through a comprehensive Node.js course on Udemy, where I'm building foundational knowledge in back-end development with Node.js. The curriculum covers core concepts such as server-side scripting, asynchronous programming, and handling APIs. I’m also exploring advanced topics, including Express.js, RESTful services, and MongoDB integration. \nCourse Learnings`,
        link: "https://github.com/Solunska/udemy-course-nodejs-projects",
        toolsAndTech: [<JavaScriptSvg />, <CssSvg />]
    },
]

export const PROJECTS_DATA = [
    {
        projectName: "Nabi E-Shop",
        image: nabi,
        description: `Nabi E-Shop is a modern and responsive e-commerce platform built with React that offers a seamless shopping experience for users. The application features a user-friendly interface, allowing customers to browse and purchase a variety comfy sneakers effortlessly. Key functionalities include product listings with detailed descriptions, a shopping cart for easy order management, and secure user authentication.\nSolo project`,
        link: "https://github.com/Solunska/e-shop-in-react",
        link2: "https://nabistore-fcbe3.web.app/",
        label2: "demo",
        toolsAndTech: [<HtmlSvg />, <CssSvg />, <JavaScriptSvg />, <ReactSvg />, <Firebase />],
    },
    {
        projectName: "E-Commerce Projects",
        image: emt,
        description: `As part of my EMT lab series, I developed two different applications:\nProject 1: A Library Management System using Spring Boot for the backend and React for the frontend. This application allows librarians to manage the inventory of books in a library by providing features such as adding, editing, deleting, and marking books as rented.\nProject 2: A Concert Ticket Sales System developed with Domain Driven Design (DDD) techniques. This system was designed to handle concert ticket sales, focusing on core domain elements, implementing essential DDD concepts such as entities, value objects, aggregates, and repositories.\nSolo project`,
        link: "https://github.com/Solunska/Emt-Labs/tree/master",
        link2: "https://github.com/Solunska/e-commerce-lab4",
        label1: "project 1",
        label2: "project 2",
        toolsAndTech: [<HtmlSvg />, <CssSvg />, <JavaScriptSvg />, <ReactSvg />, <SpringBootSvg />, <JavaSvg />],
    },
    {
        projectName: "Hacker News Clone",
        image: hackerNews,
        description: `A simple, responsive Hacker News clone built with Vue.js! This app pulls live data from the Hacker News API, letting users browse and search through the latest tech and programming stories. It’s designed with a clean, straightforward UI to keep the focus on the content, showing news titles, authors, and timestamps with links to the full articles. This project was a great way to dive into Vue, practice API integration, and build a responsive design that works smoothly on any device.\nSolo project`,
        link: "https://github.com/Solunska/hacker-news-clone",
        toolsAndTech: [<HtmlSvg />, <CssSvg />, <JavaScriptSvg />, <VueSvg />,]
    },
    {
        projectName: "Password Strength Evaluator",
        image: loginForm,
        description: `A secure and interactive password strength checker built with HTML, CSS, and JavaScript. This tool evaluates password strength in real-time based on criteria like length, use of uppercase, lowercase, digits, and special characters, with immediate feedback and visual indicators. It provides clear messages and suggestions, helping users create strong passwords, while also validating against common weak patterns. This project highlights skills in DOM manipulation, form validation, and responsive design.\nSolo project`,
        link: "https://github.com/Solunska/password-strength-evaluator",
        toolsAndTech: [<HtmlSvg />, <CssSvg />, <JavaScriptSvg />]
    },
    {
        projectName: ".NET-MusicApp",
        image: music,
        description: `This project is a fully-featured music streaming platform built with ASP.NET Core, following the principles of Clean Architecture (Onion Architecture). It allows users to manage artists, albums, and tracks with complete CRUD (Create, Read, Update, Delete) functionality. The platform also provides API endpoints for integration with external systems, including integration with the Integrated Systems Restaurant App.\nTeam Project`,
        link: "https://github.com/Berat02xz/.NET-MusicApp",
        toolsAndTech: [<HtmlSvg />, <CssSvg />, <NetcoreSvg />, <Csharp />]
    },
    {
        projectName: "Django Blog Platform with Docker and Kubernetes Integration",
        image: devops,
        description: `This is a Django-based social media platform where users can create, edit, and delete posts, comment on them, and manage profiles. The application is containerized with Docker, using Docker Compose for orchestration, and deployed with Kubernetes (K3d) for scalability. It features Kubernetes manifests for managing deployment, services, ingress, and the PostgreSQL database, ensuring streamlined deployment in cloud environments.\nSolo project`,
        link: "https://github.com/Solunska/Dev-Ops-project",
        toolsAndTech: [<DjangoSvg />, <Python />, <CssSvg />, <JavaScriptSvg />, <DockerSvg />, <KubernetesSvg />, <PostgresqlSvg />]
    },
    {
        projectName: "IMDbMovies",
        image: imdb,
        description: `This project is a key part of my learning journey during my internship, focusing on Android development and API integration. It's an Android application that fetches and displays movie data from the IMDb API, helping me deepen my expertise in Android while working with third-party APIs.\nSolo project`,
        link: "https://github.com/Solunska/IMDbMovies",
        toolsAndTech: [<Kotlin />]
    },
    {
        projectName: "Chat App in Flutter",
        image: chatgo,
        description: `ChatGo is the final project for the subject Mobile Information Systems, developed using Flutter. The app includes user authentication powered by Firebase, enabling secure access and personalized experiences. It offers a robust messaging system, location sharing, push notifications, and state management for smooth navigation and responsiveness. The application utilizes modern design patterns such as Singleton and Component-Based Architecture, ensuring maintainability and scalability.\nSolo project`,
        link: "https://github.com/Solunska/MIS-project-chat-app",
        toolsAndTech: [<FlutterSvg />]
    },
]
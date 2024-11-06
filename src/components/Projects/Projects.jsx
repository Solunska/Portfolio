import ProjectCard from "../UI/ProjectCard";
import cover from '../../assets/nabi-store.png';
import emt from '../../assets/emt.png'
import music from '../../assets/music.png'
import chatgo from '../../assets/chatgo.png'
import imdb from '../../assets/imdb.png'
import devops from '../../assets/devops.png'
import { motion } from "framer-motion";
import styles from './Content.module.css';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
    return <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={styles.projectsContainer}>
        <motion.div variants={itemVariants}>
            <ProjectCard
                description={`Nabi E-Shop is a modern and responsive e-commerce platform built with React that offers a seamless shopping experience for users. The application features a user-friendly interface, allowing customers to browse and purchase a variety comfy sneakers effortlessly. Key functionalities include product listings with detailed descriptions, a shopping cart for easy order management, and secure user authentication.\nSolo project`}
                link1="https://github.com/Solunska/e-shop-in-react"
                link2="https://nabistore-fcbe3.web.app/"
                hidden3={true}
                hidden4={true}
                photo={cover}
                projectName="Nabi E-Shop"
            />
        </motion.div>
        <motion.div variants={itemVariants}>
            <ProjectCard
                link1="https://github.com/Solunska/Emt-Labs/tree/master"
                link2="https://github.com/Solunska/e-commerce-lab4"
                hidden3={true}
                hidden4={true}
                description={`As part of my EMT lab series, I developed two different applications:\nProject 1: A Library Management System using Spring Boot for the backend and React for the frontend. This application allows librarians to manage the inventory of books in a library by providing features such as adding, editing, deleting, and marking books as rented.\nProject 2: A Concert Ticket Sales System developed with Domain Driven Design (DDD) techniques. This system was designed to handle concert ticket sales, focusing on core domain elements, implementing essential DDD concepts such as entities, value objects, aggregates, and repositories.\nSolo project`}
                photo={emt}
                label1="Project 1"
                label2="Project 2"
                projectName="E-Commerce Projects" />
        </motion.div>
        <motion.div variants={itemVariants}>
            <ProjectCard
                description={`This project is a fully-featured music streaming platform built with ASP.NET Core, following the principles of Clean Architecture (Onion Architecture). It allows users to manage artists, albums, and tracks with complete CRUD (Create, Read, Update, Delete) functionality. The platform also provides API endpoints for integration with external systems, including integration with the Integrated Systems Restaurant App.\nTeam Project`}
                link1="https://github.com/Berat02xz/.NET-MusicApp"
                photo={music}
                hidden2={true}
                hidden3={true}
                hidden4={true}
                projectName=".NET-MusicApp" />
        </motion.div>
        <motion.div variants={itemVariants}>
            <ProjectCard
                description={`This is a Django-based social media platform where users can create, edit, and delete posts, comment on them, and manage profiles. The application is containerized with Docker, using Docker Compose for orchestration, and deployed with Kubernetes (K3d) for scalability. It features Kubernetes manifests for managing deployment, services, ingress, and the PostgreSQL database, ensuring streamlined deployment in cloud environments.\nSolo project`}
                link1="https://github.com/Solunska/Dev-Ops-project"
                photo={devops}
                hidden2={true}
                hidden3={true}
                hidden4={true}
                projectName="Django Blog Platform with Docker and Kubernetes Integration" />
        </motion.div>
        <motion.div variants={itemVariants}>
            <ProjectCard
                description={`This project is a key part of my learning journey during my internship, focusing on Android development and API integration. It's an Android application that fetches and displays movie data from the IMDb API, helping me deepen my expertise in Android while working with third-party APIs.\nSolo project`}
                link1="https://github.com/Solunska/IMDbMovies"
                photo={imdb}
                hidden2={true}
                hidden3={true}
                hidden4={true}
                projectName="IMDbMovies" />
        </motion.div>
        <motion.div variants={itemVariants}>
            <ProjectCard
                description={`ChatGo is the final project for the subject Mobile Information Systems, developed using Flutter. The app includes user authentication powered by Firebase, enabling secure access and personalized experiences. It offers a robust messaging system, location sharing, push notifications, and state management for smooth navigation and responsiveness. The application utilizes modern design patterns such as Singleton and Component-Based Architecture, ensuring maintainability and scalability.\nSolo project`}
                link1="https://github.com/Solunska/MIS-project-chat-app"
                photo={chatgo}
                hidden2={true}
                hidden3={true}
                hidden4={true}
                projectName="Chat App in Flutter" />
        </motion.div>

    </motion.div>
}

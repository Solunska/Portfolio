import ProjectCard from "../UI/ProjectCard";
import emt from '../../assets/e-commerce.jfif'
import music from '../../assets/music.png'
import chatgo from '../../assets/chatgo.png'
import { motion } from "framer-motion";
import styles from './Content.module.css';

export default function SchoolProjects() {
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

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className={styles.projectsContainer}>
            <motion.div variants={itemVariants}>
                <ProjectCard
                    linkCode="https://github.com/Solunska/Emt-Labs/tree/master"
                    linkDemo="https://github.com/Solunska/e-commerce-lab4"
                    description={`As part of my EMT lab series, I developed two different applications:\nLabs 1 and 2: A Library Management System using Spring Boot for the backend and React for the frontend. This application allows librarians to manage the inventory of books in a library by providing features such as adding, editing, deleting, and marking books as rented.\nLabs 3 and 4: A Concert Ticket Sales System developed with Domain Driven Design (DDD) techniques. This system was designed to handle concert ticket sales, focusing on core domain elements, implementing essential DDD concepts such as entities, value objects, aggregates, and repositories.\nSolo project`}
                    photo={emt}
                    label1="labs 1-2"
                    label2="labs 3-4"
                    projectName="E-Commerce Laboratory Exercises" />
            </motion.div>
            <motion.div variants={itemVariants}>
                <ProjectCard
                    description={`This project is a fully-featured music streaming platform built with ASP.NET Core, following the principles of Clean Architecture (Onion Architecture). It allows users to manage artists, albums, and tracks with complete CRUD (Create, Read, Update, Delete) functionality. The platform also provides API endpoints for integration with external systems, including integration with the Integrated Systems Restaurant App.\nTeam Project`}
                    linkCode="https://github.com/Berat02xz/.NET-MusicApp"
                    photo={music}
                    hidden={true}
                    projectName=".NET-MusicApp" />
            </motion.div>
            <motion.div variants={itemVariants}>
                <ProjectCard
                    description={`ChatGo is the final project for the subject Mobile Information Systems, developed using Flutter. The app includes user authentication powered by Firebase, enabling secure access and personalized experiences. It offers a robust messaging system, location sharing, push notifications, and state management for smooth navigation and responsiveness. The application utilizes modern design patterns such as Singleton and Component-Based Architecture, ensuring maintainability and scalability.\nSolo project`}
                    linkCode="https://github.com/Solunska/MIS-project-chat-app"
                    photo={chatgo}
                    hidden={true}
                    projectName="Chat App in Flutter" />
            </motion.div>
        </motion.div>
    );
}
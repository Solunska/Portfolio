import ProjectCard from "../UI/ProjectCard";
import cover from '../../assets/nabi-store.png';
import course from '../../assets/course.jpg';
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

export default function ReactProjects() {
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
                description={`I completed a comprehensive React development course on Udemy, where I gained hands-on experience through a series of diverse projects. The curriculum covered essential React concepts such as components, props, state management, and advanced techniques including Redux, React Router, and custom hooks. Each project emphasized practical implementations, enabling me to build interactive and scalable web applications.\nCourse Learnings`}
                link1="https://github.com/Solunska/udemy-course-react-projects"
                hidden2={true}
                hidden3={true}
                hidden4={true}
                photo={course}
                projectName="React - The Complete Guide (Udemy Course)"
            />
        </motion.div>
    </motion.div>
}

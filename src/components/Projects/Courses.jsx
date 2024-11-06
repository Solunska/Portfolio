import ProjectCard from "../UI/ProjectCard";
import react from '../../assets/course.jpg';
import node from '../../assets/node.jpg';
import { motion } from "framer-motion";
import styles from './Content.module.css';

export default function Courses() {
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
                    description={`I completed a comprehensive React development course on Udemy, where I gained hands-on experience through a series of diverse projects. The curriculum covered essential React concepts such as components, props, state management, and advanced techniques including Redux, React Router, and custom hooks. Each project emphasized practical implementations, enabling me to build interactive and scalable web applications.\nCourse Learnings`}
                    link1="https://github.com/Solunska/udemy-course-react-projects"
                    hidden2={true}
                    hidden3={true}
                    hidden4={true}
                    photo={react}
                    projectName="React - The Complete Guide (Udemy Course)"
                />
            </motion.div>
            <motion.div variants={itemVariants}>
                <ProjectCard
                    description={`I am currently working through a comprehensive Node.js course on Udemy, where I'm building foundational knowledge in back-end development with Node.js. The curriculum covers core concepts such as server-side scripting, asynchronous programming, and handling APIs. I’m also exploring advanced topics, including Express.js, RESTful services, and MongoDB integration. \nCourse Learnings`}
                    link1="https://github.com/Solunska/udemy-course-nodejs-projects"
                    hidden2={true}
                    hidden3={true}
                    hidden4={true}
                    photo={node}
                    projectName="NodeJS - The Complete Guide (Udemy Course)"
                />
            </motion.div>
        </motion.div>
    );
}
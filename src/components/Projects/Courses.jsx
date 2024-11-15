import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "../../data/motionData";
import { COURSES_DATA } from "../../data/projectsData";
import ProjectCard from "../UI/ProjectCard";
import styles from './Content.module.css';
import { motion } from "framer-motion";

export default function Courses() {
    return (
        <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate="show"
            className={styles.projectsContainer}>
            {COURSES_DATA.map(course => (
                <motion.div variants={ITEM_VARIANTS} key={course.projectName}>
                    <ProjectCard
                        description={course.description}
                        link={course.link}
                        photo={course.image}
                        projectName={course.projectName}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}
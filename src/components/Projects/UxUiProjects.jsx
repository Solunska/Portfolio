import ProjectCard from "../UI/ProjectCard";
import cover from '../../assets/project-cover.png'
import { motion } from "framer-motion";
import styles from './Content.module.css';

export default function UxUiProjects() {

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

    return <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={styles.projectsContainer}>
        <motion.div variants={itemVariants}>
            <ProjectCard
                description={`This recipe app project aims to create a seamless and intuitive digital platform for cooking enthusiasts to discover, save, plan, and cook delicious meals effortlessly. With a focus on user-centric design, the app caters to a diverse audience of home cooks, culinary enthusiasts, and individuals seeking convenient meal planning solutions. The overarching goal of the project is to streamline the cooking experience, foster community engagement through recipe sharing, and inspire users to explore new flavors and cuisines.\nSolo project`}
                linkCode="https://solunska.github.io/recipe-app.html"
                label1="Case Study"
                hidden={true}
                photo={cover}
                projectName="ChefMate" />
        </motion.div>
    </motion.div>
}
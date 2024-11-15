import ProjectCard from "../UI/ProjectCard";
import Button from "../UI/Button";
import styles from './Content.module.css';
import { motion } from "framer-motion";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "../../data/motionData";
import { UXUI_DATA } from "../../data/projectsData";

export default function UxUiProjects() {
    return <motion.div
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="show"
        className={styles.projectsContainer}>
        {UXUI_DATA.map(project => (
            <motion.div variants={ITEM_VARIANTS} key={project.projectName}>
                <ProjectCard
                    description={project.description}
                    link={project.link}
                    label={project.label}
                    photo={project.image}
                    projectName={project.projectName} >
                    {project.buttons && project.buttons.map(button => (
                        <Button
                            key={button.link}
                            buttonClass={styles.buttonOutlined}
                            linkto={button.link}>{button.label}</Button>
                    ))}
                </ProjectCard>
            </motion.div>
        ))}
    </motion.div>
}


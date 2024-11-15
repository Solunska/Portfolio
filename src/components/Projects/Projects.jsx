import ProjectCard from "../UI/ProjectCard";
import Button from "../UI/Button";
import styles from './Content.module.css';
import { motion } from "framer-motion";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "../../data/motionData";
import { PROJECTS_DATA } from "../../data/projectsData";

export default function Projects() {
    return <motion.div
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="show"
        className={styles.projectsContainer}>
        {PROJECTS_DATA.map(project => (
            <motion.div variants={ITEM_VARIANTS} key={project.link}>
                <ProjectCard
                    link={project.link}
                    description={project.description}
                    photo={project.image}
                    projectName={project.projectName}
                    label={project.label1}
                    tools={project.toolsAndTech}>
                    {project.link2 &&
                        <Button
                            buttonClass={styles.buttonOutlined}
                            linkto={project.link2}>
                            {project.label2}
                        </Button>}
                </ProjectCard>
            </motion.div>
        ))}
    </motion.div>
}

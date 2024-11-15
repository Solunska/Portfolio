import AdditionalSkills from "./AdditionalSkills";
import Education from "./Education";
import Skill from "../UI/Skill";
import styles from './Content.module.css';
import { motion } from "framer-motion";
import { MOTION_SETTINGS, SKILLS_CONTAINER_VARIANTS, SKILLS_ITEM_VARIANTS } from "../../data/motionData";
import { ADDITIONAL_SKILLS, SKILLS } from "../../data/skillsData";

const content = [
    <>Hardworking, ambitious and creative student at <span className="highlight">Faculty of Computer Science & Engineering</span> with keen interest in <span className="highlight">Web Development</span> and <span className="highlight">UX/UI design</span>, equipped with a solid understanding of web technologies like <span className="tech-stack">HTML, CSS, JavaScript, Java, Spring Boot, .Net, React, NextJs, TypeScript</span>  and <span className="highlight">design principals</span> and tools like <span className="highlight">Figma</span>. As a quick learner, I am ready to take on any challenge and eager to increase my knowledge while gaining practical experience. Seeking an opportunity to apply my skills and committed to becoming a reliable and valuable team member, contributing effectively to projects while upgrading my knowledge.</>,
    <>I’m actively seeking <span className="highlight">internship opportunities</span> and <span className="highlight">entry level job positions</span> where I can apply my <span className="tech-stack">technical skills, creative problem-solving, and collaborative spirit</span> to contribute to real-world projects. I thrive in environments where I can learn from experienced professionals, tackle challenges, and grow as a developer and designer.</>,
];

export default function Content() {
    return <div className={styles.resume_container}>
        <div className={styles.resume_introduction}>
            <motion.div
                className={styles.infoContainer}
                {...MOTION_SETTINGS}>
                <div className={styles.resume_content}>{content[0]}</div>
                <div className={styles.resume_content}>{content[1]}</div>
            </motion.div>
        </div>
        <div className={styles.education_and_skills_container}>
            <motion.div
                {...MOTION_SETTINGS}>
                <p className={styles.label}>Education</p>
                <div>
                    <Education school='Faculty of Computer Science and Engineering, Skopje'
                        year='2020 - Present' />
                    <Education school='Gymnasium Kocho Racin, Veles'
                        year='2016 - 2020' />
                </div>
            </motion.div>
            <motion.div
                className={styles.skills}
                variants={SKILLS_CONTAINER_VARIANTS}
                initial="hidden"
                animate="show">
                {SKILLS.map(skill => (
                    <motion.div key={skill.name} variants={SKILLS_ITEM_VARIANTS}><Skill image={skill.image} alt={skill.name} /></motion.div>
                ))}
            </motion.div>
            <div className={styles.aditional_skills_container}>
                <p className={styles.label}>Additional Skills</p>
                <motion.div
                    variants={SKILLS_CONTAINER_VARIANTS}
                    initial="hidden"
                    animate="show"
                    className={styles.aditional_skills}>
                    {ADDITIONAL_SKILLS.map(skill => (
                        <motion.div key={skill} variants={SKILLS_ITEM_VARIANTS}><AdditionalSkills skill={skill} /></motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    </div>
}
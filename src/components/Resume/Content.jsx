import Introduction from "../AboutMe/Introduction";
import AdditionalSkills from "./AdditionalSkills";
import Education from "./Education";
import Skill from "../UI/Skill";
import styles from './Content.module.css';
import cssImg from '../../assets/css.png'
import figmaImg from '../../assets/figma.png';
import githubImg from '../../assets/github.png';
import htmlImg from '../../assets/html.png';
import javaScriptImg from '../../assets/javaScript.png';
import bootstrapImg from '../../assets/bootstrap.png';
import reactImg from '../../assets/react.png';
import typescript from '../../assets/typescript.png';
import redux from '../../assets/redux.png';
import nextjs from '../../assets/nextjs.png';
import dart from '../../assets/dart.png';
import flutter from '../../assets/flutter.png';
import netcore from '../../assets/netcore.png';
import postgresql from '../../assets/postgresql.png';
import django from '../../assets/django.png';
import docker from '../../assets/docker.png';
import kubernetes from '../../assets/kubernetes.png';
import jenkins from '../../assets/jenkins.png';
import java from '../../assets/java.png';
import springboot from '../../assets/spring-boot.png';
import { motion } from "framer-motion";

const content = [
    <>Hardworking, ambitious and creative student at <span className="highlight">Faculty of Computer Science & Engineering</span> with keen interest in <span className="highlight">Web Development</span>, equipped with a solid understanding of web technologies like <span className="tech-stack">HTML, CSS, JavaScript, React, NextJs, and TypeScript</span>. As a quick learner, I am ready to take on any challenge and eager to increase my knowledge while gaining practical experience. Seeking an opportunity to apply my skills and committed to becoming a reliable and valuable team member, contributing effectively to projects while upgrading my knowledge.</>,
    <>I’m actively seeking <span className="highlight">internship opportunities</span> where I can apply my <span className="tech-stack">technical skills, creative problem-solving</span>, and collaborative spirit to contribute to real-world projects. I thrive in environments where I can learn from experienced professionals, tackle challenges, and grow as a developer and designer.</>,
];

export default function Content() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };


    return <div className={styles.resume_container}>
        <div className={styles.resume_introduction}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: 'spring', stiffness: 50 }}>
                <Introduction className={styles.introduction} hiddenParagraph={true} />
            </motion.div>

            <motion.div
                className={styles.infoContainer}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: 'spring', stiffness: 50 }}>
                <div className={styles.resume_content}>{content[0]}</div>
                <div className={styles.resume_content}>{content[1]}</div>
            </motion.div>
        </div>
        <div className={styles.education_and_skills_container}>
            <div>
                <p className={styles.label}>Education</p>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: 'spring', stiffness: 50 }}>
                    <Education school='Faculty of Computer Science and Engineering, Skopje'
                        year='2020 - Present' />
                    <Education school='Gymnasium Kocho Racin, Veles'
                        year='2016 - 2020' />
                </motion.div>
            </div>
            <motion.div
                className={styles.skills}
                variants={containerVariants}
                initial="hidden"
                animate="show">
                <motion.div variants={itemVariants}><Skill image={htmlImg} alt='html' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={cssImg} alt='css' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={javaScriptImg} alt='java script' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={typescript} alt='typescript' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={reactImg} alt='reactImg' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={redux} alt='redux' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={nextjs} alt='nextjs' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={githubImg} alt='github' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={bootstrapImg} alt='bootstrap' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={figmaImg} alt='figma' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={dart} alt='dart' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={flutter} alt='flutter' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={netcore} alt='netcore' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={postgresql} alt='postgresql' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={django} alt='django' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={docker} alt='docker' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={kubernetes} alt='kubernetes' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={jenkins} alt='jenkins' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={java} alt='java' /></motion.div>
                <motion.div variants={itemVariants}><Skill image={springboot} alt='springboot' /></motion.div>
            </motion.div>
            <div className={styles.aditional_skills_container}>
                <p className={styles.label}>Additional Skills</p>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className={styles.aditional_skills}>
                    <motion.div variants={itemVariants}><AdditionalSkills skill='Teamwork Skills' /></motion.div>
                    <motion.div variants={itemVariants}><AdditionalSkills skill='Colaboration' /></motion.div>
                    <motion.div variants={itemVariants}> <AdditionalSkills skill='Creativity' /></motion.div>
                    <motion.div variants={itemVariants}> <AdditionalSkills skill='Organized' /></motion.div>
                    <motion.div variants={itemVariants}> <AdditionalSkills skill='Hardworking' /></motion.div>
                </motion.div>
            </div>
        </div>
    </div>
}
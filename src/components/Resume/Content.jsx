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

const content = [
    <>Hardworking, ambitious and creative student at <span className="highlight">Faculty of Computer Science & Engineering</span> with keen interest in <span className="highlight">Web Development</span>, equipped with a solid understanding of web technologies like <span className="tech-stack">HTML, CSS, JavaScript, React, NextJs, and TypeScript</span>. As a quick learner, I am ready to take on any challenge and eager to increase my knowledge while gaining practical experience. Seeking an opportunity to apply my skills and committed to becoming a reliable and valuable team member, contributing effectively to projects while upgrading my knowledge.</>,
    <>I’m actively seeking <span className="highlight">internship opportunities</span> where I can apply my <span className="tech-stack">technical skills, creative problem-solving</span>, and collaborative spirit to contribute to real-world projects. I thrive in environments where I can learn from experienced professionals, tackle challenges, and grow as a developer and designer.</>,
];

export default function Content() {
    return <div className={styles.resume_container}>
        <div className={styles.resume_introduction}>
            <Introduction className={styles.introduction} hiddenParagraph={true} />
            <div className={styles.infoContainer}>
                <div className={styles.resume_content}>{content[0]}</div>
                <div className={styles.resume_content}>{content[1]}</div>
            </div>
        </div>
        <div className={styles.education_and_skills_container}>
            <p className={styles.label}>Education</p>
            <div>
                <Education school='Faculty of Computer Science and Engineering, Skopje'
                    year='2020 - Present' />
                <Education school='Gymnasium Kocho Racin, Veles'
                    year='2016 - 2020' />
            </div>
            <div className={styles.skills}>
                <Skill image={htmlImg} alt='html' />
                <Skill image={cssImg} alt='css' />
                <Skill image={javaScriptImg} alt='java script' />
                <Skill image={typescript} alt='typescript' />
                <Skill image={reactImg} alt='reactImg' />
                <Skill image={redux} alt='redux' />
                <Skill image={nextjs} alt='nextjs' />
                <Skill image={githubImg} alt='github' />
                <Skill image={bootstrapImg} alt='bootstrap' />
                <Skill image={figmaImg} alt='figma' />
            </div>
            <div className={styles.aditional_skills_container}>
                <p className={styles.label}>Additional Skills</p>
                <div className={styles.aditional_skills}>
                    <AdditionalSkills skill='Teamwork Skills' />
                    <AdditionalSkills skill='Colaboration' />
                    <AdditionalSkills skill='Creativity' />
                    <AdditionalSkills skill='Organized' />
                    <AdditionalSkills skill='Hardworking' />
                </div>
            </div>
        </div>
    </div>
}
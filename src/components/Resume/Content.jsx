import Introduction from "../AboutMe/Introduction";
import AdditionalSkills from "./AdditionalSkills";
import Education from "./Education";
import Skill from "./Skill";
import styles from './Content.module.css';
import cssImg from '../../assets/css.png'
import figmaImg from '../../assets/figma.png';
import githubImg from '../../assets/github.png';
import htmlImg from '../../assets/html.png';
import javaScriptImg from '../../assets/javaScript.png';
import bootstrapImg from '../../assets/bootstrap.png';
import reactImg from '../../assets/react.png';

const content = 'Hardworking, ambitious, and creative college student with a keen interest in UX/UI design and development. Equipped with a solid understanding of web technologies, including HTML, CSS, JavaScript, and Figma, I specialize in crafting visually pleasing web applications. As a quick learner, I am ready to take on any challenge and eager to increase my knowledge while gaining practical experience. Seeking an opportunity to apply my skills and committed to becoming a dependable and valuable team member, I aim to contribute effectively to projects, deliver innovative solutions, and further develop my expertise in UX/UI design and development.';

export default function Content() {
    return <div className={styles.resume_container}>
        <div className={styles.resume_introduction}>
            <Introduction />
            <div className={styles.resume_content}>{content}</div>
        </div>
        <div className={styles.education_and_skills_container}>
            <p className={styles.label}>Education</p>
            <Education school='Faculty of Computer Science and Engineering, Skopje'
                year='2020 - Present' />
            <Education school='Gymnasium Kocho Racin, Veles'
                year='2016 - 2020' />
            <div className={styles.skills}>
                <Skill image={htmlImg} alt='html' />
                <Skill image={cssImg} alt='css' />
                <Skill image={javaScriptImg} alt='java script' />
                <Skill image={bootstrapImg} alt='bootstrap' />
                <Skill image={figmaImg} alt='figma' />
                <Skill image={reactImg} alt='react' />
                <Skill image={githubImg} alt='github' />
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
import Button from "./Button";
import styles from './NavBar.module.css';

export default function Navbar({ buttonStyles, aboutMeClick, resumeClick, contactClick, projectsClick }) {
    
    return (
        <nav className={styles.navbar}>
            <ul className={styles.items}>
                <li className={styles.item}><Button handleClick={aboutMeClick} buttonClass={buttonStyles.aboutMe}>About me</Button></li>
                <li className={styles.item}><Button handleClick={resumeClick} buttonClass={buttonStyles.resume}>Resume</Button></li>
                <li className={styles.item}><Button handleClick={projectsClick} buttonClass={buttonStyles.projects}>Projects</Button></li>
                <li className={styles.item}><Button handleClick={contactClick} buttonClass={buttonStyles.contact}>Contact</Button></li>
            </ul>
        </nav>
    );
}
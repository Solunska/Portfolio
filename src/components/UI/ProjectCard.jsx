import styles from '../Projects/Content.module.css';

export default function ProjectCard({ photo, projectName, description, linkCode, linkDemo }) {
    return <div className={styles.projectCardContainer}>
        <img src={photo} alt={projectName} />
        <div className={styles.descriptionContainer}>
            <p>{projectName}</p>
            <p>{description}</p>
            <div className={styles.links}>
                <a href={linkCode} className={styles.buttonOutlined}>
                    Code
                </a>
                <a href={linkDemo} className={styles.buttonOutlined}>
                    Demo
                </a>
            </div>
        </div>
    </div>

}
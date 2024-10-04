import styles from '../Projects/Content.module.css';

export default function ProjectCard({
    photo,
    projectName,
    description = '',
    linkCode,
    linkDemo,
    hidden,
    label1 = 'code',
    label2 = 'demo'
}) {
    const descriptionWithBreaks = description.split('\n').map((line, index) => (
        <div key={index}>
            {line}
            <br />
        </div>
    ));

    return (
        <div className={styles.projectCardContainer}>
            <img src={photo} alt={projectName} />
            <div className={styles.descriptionContainer}>
                <p>{projectName}</p>
                <p>{descriptionWithBreaks}</p>
                <div className={styles.links}>
                    <a href={linkCode} className={styles.buttonOutlined}>
                        {label1}
                    </a>
                    <a href={linkDemo} className={hidden ? styles.hidden : styles.buttonOutlined}>
                        {label2}
                    </a>
                </div>
            </div>
        </div>
    );
}

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
            <div className={styles.imgContainer}>
                 <img src={photo} alt={projectName} />
            </div>
            <div className={styles.descriptionContainer}>
                <p>{projectName}</p>
                <div>{descriptionWithBreaks}</div>
                <div className={styles.links}>
                    <a href={linkCode} target="_blank" rel="noopener noreferrer" className={styles.buttonOutlined}>
                        {label1}
                    </a>
                    <a href={linkDemo} target="_blank" rel="noopener noreferrer" className={hidden ? styles.hidden : styles.buttonOutlined}>
                        {label2}
                    </a>
                </div>
            </div>
        </div>
    );
}

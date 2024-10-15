import styles from '../Projects/Content.module.css';

export default function ProjectCard({
    photo,
    projectName,
    description = '',
    linkCode,
    linkDemo,
    wireframe,
    userflows,
    prototype,
    hidden,
    hiddenLink,
    label1 = 'code',
    label2 = 'demo',
    label3
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
                    <a href={linkCode || userflows} target="_blank" rel="noopener noreferrer" className={styles.buttonOutlined}>
                        {label1}
                    </a>
                    <a href={linkDemo || wireframe} target="_blank" rel="noopener noreferrer" className={hidden ? styles.hidden : styles.buttonOutlined}>
                        {label2}
                    </a>
                    <a href={linkDemo || prototype} target="_blank" rel="noopener noreferrer" className={hiddenLink ? styles.hidden : styles.buttonOutlined}>
                        {label3}
                    </a>
                </div>
            </div>
        </div>
    );
}

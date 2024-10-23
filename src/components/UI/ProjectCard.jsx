import styles from '../Projects/Content.module.css';

export default function ProjectCard({
    photo,
    projectName,
    description = '',
    label1 = 'code',
    label2 = 'demo',
    label3,
    label4,
    link1,
    link2,
    link3,
    link4,
    hidden2,
    hidden3,
    hidden4
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
                <div className={styles.project}>
                    <p>{projectName}</p>
                    <div>{descriptionWithBreaks}</div>
                </div>
                <div className={styles.links}>
                    <a href={link1} target="_blank" rel="noopener noreferrer" className={styles.buttonOutlined}>
                        {label1}
                    </a>
                    <a href={link2} target="_blank" rel="noopener noreferrer" className={hidden2 ? styles.hidden : styles.buttonOutlined}>
                        {label2}
                    </a>
                    <a href={link3} target="_blank" rel="noopener noreferrer" className={hidden3 ? styles.hidden : styles.buttonOutlined}>
                        {label3}
                    </a>
                    <a href={link4} target="_blank" rel="noopener noreferrer" className={hidden4 ? styles.hidden : styles.buttonOutlined}>
                        {label4}
                    </a>
                </div>
            </div>
        </div>
    );
}

import styles from '../Projects/Content.module.css';
import Skill from '../UI/Skill';

export default function ProjectCard({
    photo,
    projectName,
    description = '',
    label = 'code',
    children,
    link,
    tools
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
                <div>
                    {tools && tools.map(tool =>
                        <Skill key={tool} image={tool} />
                    )}
                </div>
                <div className={styles.links}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.buttonOutlined}>
                        {label}
                    </a>
                    {children}
                </div>
            </div>
        </div>
    );
}

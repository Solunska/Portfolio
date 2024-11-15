import styles from '../Resume/Content.module.css';

export default function Skill({ image }) {
    return (
        <div className={styles.skillContainer}>
            <div className={styles.skillIcon}>{image}</div>
        </div>
    );
}

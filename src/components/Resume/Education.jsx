import styles from './Education.module.css';

export default function Education({ school, year }) {
    return <div className={styles.education_container}>
        <p className={styles.school}>{school}</p>
        <p className={styles.year}>{year}</p>
    </div>
}
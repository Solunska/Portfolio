import styles from './AdditionalSkills.module.css';

export default function AdditionalSkills({skill}){
    return <p className={styles.additional_skill}>{skill}</p>
}
import styles from './Skill.module.css';

export default function Skill({ image, alt }) {
    return <div className={styles.skill}>
        <img src={image} alt={alt} />
    </div>
}
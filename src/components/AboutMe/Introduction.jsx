import styles from './Introduction.module.css';

export default function Introduction() {
    return <div className={styles.container}>
        <p>Hello!</p>
        <p>Im Aneta Solunska</p>
        <p>I’m a <span>Computer Science and Engineering</span> student with a strong focus on <span>front-end development</span> and <span>UX/UI design</span>. My passion is building visually appealing and user-friendly websites, typically using <span>Figma</span> for design and <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and <span>React</span> for development.</p>
    </div>
}
import styles from './Introduction.module.css';

export default function Introduction({ hiddenParagraph, className }) {
    return <div className={`${styles.container} ${className}`}>
        <p>Hello!</p>
        <p>I&apos;m Aneta Solunska</p>
        <p className={hiddenParagraph ? styles.hidden : null}>I’m a <span>Computer Science and Engineering</span> student with a strong focus on <span>Web Development</span> and <span>UX/UI design</span>. My passion is building visually appealing and user-friendly websites, typically using <span>Figma</span> for design and <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and <span>React</span> for development.</p>
    </div>
}
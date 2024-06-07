import styles from './SideBarInfo.module.css';

export default function Info({text}){
    return <p className={styles.info_text}>{text}</p>
}
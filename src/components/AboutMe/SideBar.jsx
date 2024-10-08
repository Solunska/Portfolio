import styles from './SideBar.module.css';
import Info from '../UI/InfoText';

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.profile_photo_container}>
                <div className={styles.profile_photo}></div>
            </div>
            <div className={styles.info_container}>
                <Info text='👨‍🎓 Computer Science student' classes={styles.info_text} />
                <Info text='💻 Passionate about web development' classes={styles.info_text} />
                <Info text='📚 Lifelong learner' classes={styles.info_text} />
            </div>
        </div>
    );
}
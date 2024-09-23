import styles from './SideBar.module.css';
import Info from '../UI/InfoText';

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.profile_photo_container}>
                <div className={styles.profile_photo}></div>
            </div>
            <div className={styles.info_container}>
                <Info text='UX/UI Designer and Developer' classes={styles.info_text} />
                <Info text='Studying at Faculty of Computer Science and Engineering ' classes={styles.info_text} />
            </div>

        </div>
    );
}
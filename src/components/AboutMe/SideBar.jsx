import styles from './SideBar.module.css';
import Info from './SideBarInfo';

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.side_bar_container}>
                <div className={styles.profile_photo_container}>
                    <div className={styles.profile_photo}></div>
                </div>
                <div className={styles.info_container}>
                    <Info text='UX/UI Designer and Developer' />
                    <Info text='Studying at Faculty of Computer Science and Engineering ' />
                </div>
            </div>
        </div>
    );
}
import styles from './SideBar.module.css';
import Info from '../UI/InfoText';
import { motion } from 'framer-motion';

export default function Sidebar() {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: 'spring', stiffness: 50 }}>
            <div className={styles.profile_photo_container}>
                <div className={styles.profile_photo}></div>
            </div>
            <div className={styles.info_container}>
                <Info text='👨‍🎓 Computer Science student' classes={styles.info_text} />
                <Info text='💻 Passionate about web development' classes={styles.info_text} />
                <Info text='📚 Lifelong learner' classes={styles.info_text} />
            </div>
        </motion.div>
    );
}
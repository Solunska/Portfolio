import Introduction from './Introduction';
import Button from '../UI/Button';
import styles from './Content.module.css';
import '../UI/Button.css';
import Media from './Media';
import { motion } from 'framer-motion';

export default function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.introductionContainer}>
                <motion.div
                    initial={{ opacity: 0, x: +50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: +50 }}
                    transition={{ type: 'spring', stiffness: 50 }}>
                    <Introduction />
                </motion.div>

                <Media />
            </div>

            <motion.div
                className={styles.btn_container}
                initial={{ opacity: 0, y: +50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: +50 }}
                transition={{ type: 'spring', stiffness: 50 }}>
                <Button buttonClass='button_active_big' linkto='https://github.com/Solunska/Portfolio'>Code To My Web Portfolio</Button>
            </motion.div>
        </div>
    );
}
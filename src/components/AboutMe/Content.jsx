import Introduction from './Introduction';
import Button from '../UI/Button';
import styles from './Content.module.css';
import '../UI/Button.css';

export default function Content() {
    return (
        <div className={styles.container}>
            <Introduction />
            <div className={styles.btn_container}>
                <Button buttonClass='button_active_big'>Code To My Web Portfolio</Button>
            </div>
        </div>
    );
}
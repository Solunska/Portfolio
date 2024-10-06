import Introduction from './Introduction';
import Button from '../UI/Button';
import styles from './Content.module.css';
import '../UI/Button.css';
import Media from './Media';

export default function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.introductionContainer}>
                <Introduction />
                {/* <div className={styles.label}>Media</div> */}
                <Media />
            </div>

            <div className={styles.btn_container}>
                <Button buttonClass='button_active_big' linkto='https://github.com/Solunska/Portfolio'>Code To My Web Portfolio</Button>
            </div>
        </div>
    );
}
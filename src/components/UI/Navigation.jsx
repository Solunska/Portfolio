import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end>
                        About me
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to='/resume'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end>
                        Resume
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end>
                        Projects
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useEffect } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <nav className={styles.navbar}>
            <button className={styles.burgerMenu} onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`${styles.items} ${isMenuOpen ? styles.show : ''}`}>
                <button className={styles.closeMenu} onClick={closeMenu}>
                    &times;
                </button>
                <li className={styles.item}>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end
                        onClick={closeMenu}>
                        About me
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end
                        onClick={closeMenu}>
                        Projects
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to='/resume'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end
                        onClick={closeMenu}>
                        Resume
                    </NavLink>
                </li>
                {/* <li className={styles.item}>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end
                        onClick={closeMenu}>
                        Contact
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    );
}

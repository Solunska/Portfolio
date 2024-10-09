import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

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

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <nav className={styles.navbar}>
            <button className={styles.burgerMenu} onClick={toggleMenu}>
                ☰
            </button>
            <motion.ul
                className={`${styles.items} ${isMenuOpen ? styles.show : ''}`}
                variants={containerVariants}
                initial="hidden"
                animate="show">
                <button className={styles.closeMenu} onClick={closeMenu}>
                    &times;
                </button>
                <motion.li
                    className={styles.item}
                    variants={itemVariants}>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end
                        onClick={closeMenu}>
                        About me
                    </NavLink>
                </motion.li>

                <motion.li
                    className={styles.item}
                    variants={itemVariants}>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end
                        onClick={closeMenu}>
                        Projects
                    </NavLink>
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={itemVariants}>
                    <NavLink
                        to='/resume'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end
                        onClick={closeMenu}>
                        Resume
                    </NavLink>
                </motion.li>
                {/* <li className={styles.item}>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => isActive ? `${'button'} ${'active'}` : 'button'}
                        end
                        onClick={closeMenu}>
                        Contact
                    </NavLink>
                </li> */}
            </motion.ul>
        </nav>
    );
}

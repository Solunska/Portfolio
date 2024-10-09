import './Button.css';
import { motion } from 'framer-motion';

export default function Button({ children, buttonClass, handleClick, linkto }) {
    return <motion.button
        onClick={handleClick}
        className={buttonClass}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 50 }}>
        <a href={linkto}>{children}</a>
    </motion.button>
}
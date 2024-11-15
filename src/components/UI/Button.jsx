import { motion } from 'framer-motion';

export default function Button({ children, buttonClass, handleClick, linkto }) {
    return <a href={linkto} target='_blank' rel="noopener noreferrer">
        <motion.button
            onClick={handleClick}
            className={buttonClass}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 50 }}>
            {children}
        </motion.button></a>
}
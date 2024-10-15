import github from '../../assets/github-logo.png'
import linkedin from '../../assets/linkedin.png'
import figma from '../../assets/figma-icon.png'
import IconButton from '../UI/IconButton'
import classes from './Media.module.css'
import { motion } from 'framer-motion'

export default function Media() {
    return <motion.div
        className={classes.container}
        initial={{ opacity: 0, x: +50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: +50 }}
        transition={{ type: 'spring', stiffness: 50 }}>
        <IconButton img={github} alt='github logo' imgClasses={classes.image} link='https://github.com/Solunska' />
        <IconButton img={linkedin} alt='github logo' imgClasses={classes.image} link='https://www.linkedin.com/in/aneta-solunska/' />
        <IconButton img={figma} alt='figma logo' imgClasses={classes.image} link='https://www.figma.com/@anetasolunska' />
    </motion.div>
}
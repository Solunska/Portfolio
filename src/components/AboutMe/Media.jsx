import github from '../../assets/github-logo.png'
import linkedin from '../../assets/linkedin.png'
import IconButton from '../UI/IconButton'
import classes from './Media.module.css'

export default function Media(){
    return <div className={classes.container}>
        <IconButton img={github} alt='github logo' imgClasses={classes.image} link='https://github.com/Solunska'/>
        <IconButton img={linkedin} alt='github logo' imgClasses={classes.image} link='https://www.linkedin.com/in/aneta-solunska/'/>
    </div>
}
import Button from '../UI/Button';
import ProjectCard from '../UI/ProjectCard';
import styles from './Content.module.css';
import cover from '../../assets/cover.png'

export default function Content(){
    return <div className={styles.mainContainer}>
        <div className={styles.buttonsContainer}>
            <Button buttonClass={styles.categoryButtonActive}>React</Button>
            <Button buttonClass={styles.categoryButton}>UX/UI</Button>
        </div>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            description="Lorem ipsum dolor sit amet consectetur. Cras tortor a consectetur pellentesque diam eu. Varius eget amet parturient viverra diam nulla velit pellentesque etiam. Velit donec tellus nulla aenean mi cras mattis cras sed. Diam consectetur eget tristique tincidunt mauris egestas ullamcorper nunc et. Amet elementum cursus sem auctor sem mus amet. Ac placerat eu suscipit iaculis a dui ac aliquet ac. Velit congue sodales est nulla eros tempor mauris sit." 
            linkCode="https://github.com/Solunska/e-shop-in-react" 
            linkDemo="https://nabistore-fcbe3.web.app/" 
            photo={cover} 
            projectName="E Shop in React"  />
            <ProjectCard 
            description="Lorem ipsum dolor sit amet consectetur. Cras tortor a consectetur pellentesque diam eu. Varius eget amet parturient viverra diam nulla velit pellentesque etiam. Velit donec tellus nulla aenean mi cras mattis cras sed. Diam consectetur eget tristique tincidunt mauris egestas ullamcorper nunc et. Amet elementum cursus sem auctor sem mus amet. Ac placerat eu suscipit iaculis a dui ac aliquet ac. Velit congue sodales est nulla eros tempor mauris sit." 
            linkCode="https://github.com/Solunska/e-shop-in-react" 
            linkDemo="https://nabistore-fcbe3.web.app/" 
            photo={cover} 
            projectName="E Shop in React"  />
            <ProjectCard 
            description="Lorem ipsum dolor sit amet consectetur. Cras tortor a consectetur pellentesque diam eu. Varius eget amet parturient viverra diam nulla velit pellentesque etiam. Velit donec tellus nulla aenean mi cras mattis cras sed. Diam consectetur eget tristique tincidunt mauris egestas ullamcorper nunc et. Amet elementum cursus sem auctor sem mus amet. Ac placerat eu suscipit iaculis a dui ac aliquet ac. Velit congue sodales est nulla eros tempor mauris sit." 
            linkCode="https://github.com/Solunska/e-shop-in-react" 
            linkDemo="https://nabistore-fcbe3.web.app/" 
            photo={cover} 
            projectName="E Shop in React"  />
        </div>
    </div>
}
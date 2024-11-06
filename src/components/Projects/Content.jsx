import Button from '../UI/Button';
import styles from './Content.module.css';
import { useState } from 'react';
import Projects from './Projects';
import UxUiProjects from './UxUiProjects';
import Courses from './Courses';

export default function Content() {
    const [activeTab, setActiveTab] = useState('projects');

    return <div className={styles.mainContainer}>
        <div className={styles.buttonsContainer}>
            <Button buttonClass={activeTab === 'projects' ? styles.categoryButtonActive : styles.categoryButton} handleClick={() => setActiveTab('projects')}>Projects</Button>
            <Button buttonClass={activeTab === 'course' ? styles.categoryButtonActive : styles.categoryButton} handleClick={() => setActiveTab('course')}>Courses</Button>
            <Button buttonClass={activeTab === 'uxui' ? styles.categoryButtonActive : styles.categoryButton} handleClick={() => setActiveTab('uxui')}>UX/UI</Button>
        </div>
        {activeTab === 'projects' ? <Projects /> : null}
        {activeTab === 'course' ? <Courses /> : null}
        {activeTab === 'uxui' ? <UxUiProjects /> : null}
    </div>
}
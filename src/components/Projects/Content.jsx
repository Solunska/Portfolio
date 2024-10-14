import Button from '../UI/Button';
import styles from './Content.module.css';
import { useState } from 'react';
import ReactProjects from './ReactProjects';
import UxUiProjects from './UxUiProjects';
import SchoolProjects from './SchoolProjects';

export default function Content() {
    const [activeTab, setActiveTab] = useState('react');

    return <div className={styles.mainContainer}>
        <div className={styles.buttonsContainer}>
            <Button buttonClass={activeTab === 'react' ? styles.categoryButtonActive : styles.categoryButton} handleClick={() => setActiveTab('react')}>React</Button>
            <Button buttonClass={activeTab === 'school' ? styles.categoryButtonActive : styles.categoryButton} handleClick={() => setActiveTab('school')}>School Projects</Button>
            <Button buttonClass={activeTab === 'uxui' ? styles.categoryButtonActive : styles.categoryButton} handleClick={() => setActiveTab('uxui')}>UX/UI</Button>
        </div>
        {activeTab === 'react' ? <ReactProjects /> : null}
        {activeTab === 'uxui' ? <UxUiProjects /> : null}
        {activeTab === 'school' ? <SchoolProjects /> : null}
    </div>
}
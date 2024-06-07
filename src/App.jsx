import { useState } from 'react';
import './App.css';
import Navbar from './components/UI/NavBar.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Resume from './pages/Resume.jsx';

function App() {
    const [buttonStyles, setButtonStyles] = useState({
        aboutMe: 'button_active',
        resume: 'button_unactive',
        projects: 'button_unactive',
        contact: 'button_unactive',
    })


    function handleClick(aboutMeState, resumeState, projectsState, contactState) {
        setButtonStyles({
            aboutMe: aboutMeState,
            resume: resumeState,
            projects: projectsState,
            contact: contactState,
        });
    }

    let content = '';

    if (buttonStyles.aboutMe === 'button_active') {
        content = <AboutMe />;
    } else if (buttonStyles.resume === 'button_active') {
        content = <Resume />
    } else if (buttonStyles.projects === 'button_active') {
        content = <AboutMe />;
    } else if (buttonStyles.contact === 'button_active') {
        content = <AboutMe />;
    }

    return (
        <>
            <Navbar
                buttonStyles={buttonStyles}
                aboutMeClick={() => handleClick('button_active', 'button_unactive', 'button_unactive', 'button_unactive')}
                resumeClick={() => handleClick('button_unactive', 'button_active', 'button_unactive', 'button_unactive')}
                projectsClick={() => handleClick('button_unactive', 'button_unactive', 'button_active', 'button_unactive')}
                contactClick={() => handleClick('button_unactive', 'button_unactive', 'button_unactive', 'button_active')}
            />
            {content}
        </>
    )
}

export default App
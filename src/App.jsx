import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutMe from './pages/AboutMe.jsx';
import Resume from './pages/Resume.jsx';
import RootLayout from './pages/Root.jsx';
import './App.css';

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <AboutMe />
                },
                {
                    path: 'resume',
                    element: <Resume />
                },
                {
                    path: 'projects',
                    element: <AboutMe />
                },
                {
                    path: 'contact',
                    element: <AboutMe />
                },

            ]
        }
    ])


    return <RouterProvider router={router} />

}

export default App
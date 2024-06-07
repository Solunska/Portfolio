import Navigation from "../components/UI/Navigation";
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return <>
        <Navigation />
        <main>
            <Outlet />
        </main>
    </>
}
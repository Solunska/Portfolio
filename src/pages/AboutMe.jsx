import Sidebar from "../components/AboutMe/SideBar";
import Content from "../components/AboutMe/Content";

export default function AboutMe() {
    return (
        <div className='about-me-container'>
            <Sidebar />
            <Content />
        </div>
    );
}
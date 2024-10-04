import ProjectCard from "../UI/ProjectCard";
import cover from '../../assets/cover.png'
import course from '../../assets/course.jpg'

export default function ReactProjects() {
    return <>
        <ProjectCard
            description={`Nabi E-Shop is a modern and responsive e-commerce platform built with React that offers a seamless shopping experience for users. The application features a user-friendly interface, allowing customers to browse and purchase a variety of products effortlessly. Key functionalities include product listings with detailed descriptions, a shopping cart for easy order management, and secure user authentication.\nSolo project`}
            linkCode="https://github.com/Solunska/e-shop-in-react"
            linkDemo="https://nabistore-fcbe3.web.app/"
            photo={cover}
            projectName="Nabi E-Shop" />
        <ProjectCard
            description={`I completed a comprehensive React development course on Udemy, where I gained hands-on experience through a series of diverse projects. The curriculum covered essential React concepts such as components, props, state management, and advanced techniques including Redux, React Router, and custom hooks. Each project emphasized practical implementations, enabling me to build interactive and scalable web applications.\nCourse Learnings`}
            linkCode="https://github.com/Solunska/udemy-course-react-projects"
            hidden={true}
            photo={course}
            projectName="React - The Complete Guide (Udemy Course)" />
       
    </>
}
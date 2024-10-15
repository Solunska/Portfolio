import ProjectCard from "../UI/ProjectCard";
import cover from '../../assets/project-cover.png'
import eventradar from '../../assets/event-radar.png'
import trivago from '../../assets/trivago.png'
import { motion } from "framer-motion";
import styles from './Content.module.css';

export default function UxUiProjects() {

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={styles.projectsContainer}>
        <motion.div variants={itemVariants}>
            <ProjectCard
                description={`This recipe app project aims to create a seamless and intuitive digital platform for cooking enthusiasts to discover, save, plan, and cook delicious meals effortlessly. With a focus on user-centric design, the app caters to a diverse audience of home cooks, culinary enthusiasts, and individuals seeking convenient meal planning solutions. The overarching goal of the project is to streamline the cooking experience, foster community engagement through recipe sharing, and inspire users to explore new flavors and cuisines.\nSolo project`}
                userflows="https://www.figma.com/design/5QLNt9055lFMPqI2HbkZAI/Cook-App-User-Flow-(Community)"
                wireframe="https://www.figma.com/design/eWL6q5WsPfQJrR0VaGbdsL/Cook-Book-Wireframe-(Community)?t=I3lQ7UiEZAorRK1O-0"
                prototype="https://www.figma.com/design/ci7byJGe3m86FuU6Wdrzrr/Chef-App-Prototype-(Community)?node-id=0-1&node-type=canvas&t=ZZrRaQ407NWCbS2u-0"
                label1="User flows"
                label2="Wireframes"
                label3="Prototype"
                photo={cover}
                projectName="ChefMate" />

        </motion.div>
        <motion.div variants={itemVariants}>
            <ProjectCard
                description={`One of my recent projects involved evaluating Trivago's search results page to identify strengths and areas for improvement. Through a detailed examination of user interactions, I pinpointed key pain points, such as information overload in hotel listings and inconsistent layouts. My proposed design strategy emphasizes streamlined layouts, reduced clutter, and improved filter accessibility, aiming to facilitate easier decision-making for travelers.\nSolo project`}
                linkCode="https://www.canva.com/design/DAGJDFi8_T0/8BafTiYZTbm78x8d-wKvNQ/view?utm_content=DAGJDFi8_T0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                prototype="https://www.figma.com/design/pqW38Um6gRmBretGoIUUA0/Redesign-of-Trivago's-search-results-(Community)?node-id=0-1&node-type=canvas&t=dWBwkj99LaiSKLso-0"
                label3="Wireframe"
                label1="Research"
                hidden={true}
                photo={trivago}
                projectName="Redesign of Trivago's Search Results Page" />
        </motion.div>
        <motion.div variants={itemVariants}>
            <ProjectCard
                description={`EventRadar is a user-friendly platform designed to simplify event discovery and booking. It offers personalized event recommendations based on user preferences, covering a wide range of activities, from cultural events to nightlife. With streamlined booking, exclusive discounts, and a rich database of local events, users can efficiently plan and enjoy their free time. The platform also supports local businesses through partnerships and targeted advertising, providing a valuable tool for both event organizers and users.\nTeam project`}
                linkCode="https://www.figma.com/design/RcseplJTjbKkUlueAQVcId/EventRadar-(Community)?node-id=0-1&node-type=canvas&t=v7D7cb0pgn9EqH8S-0"
                label1="Prototype"
                hidden={true}
                hiddenLink={true}
                photo={eventradar}
                projectName="Event Radar" />
        </motion.div>
    </motion.div>
}


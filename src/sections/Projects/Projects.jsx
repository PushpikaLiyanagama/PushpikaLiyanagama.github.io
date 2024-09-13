import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

import projectOne from '../../assets/project1.png';
import projectTwo from '../../assets/project2.png';
import projectThree from '../../assets/project3.png';
import projectFour from '../../assets/project4.png';
import projectFive from '../../assets/project5.png';
import projectSix from '../../assets/project6.png';
import projectSeven from '../../assets/project7.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={projectOne}
          link="https://github.com/PushpikaLiyanagama/comis-blog"
          h3="Comis Blog"
          h2 = "Comis Blog is Web Application for Comics Lovers. They can add and Update their post to web-app."
        />
        <ProjectCard
          src={projectTwo}
          link="https://github.com/PushpikaLiyanagama/weather-app"
          h3="Weather Reporter"
        />
        <ProjectCard
          src={projectThree}
          link="https://github.com/nisal-basura/Aurora"
          h3="Urban AI"
        />
        <ProjectCard
          src={projectFour}
          link="https://github.com/PushpikaLiyanagama/e-commerce-mobile-shop"
          h3="Horizon Mobile E-Commerce"
        />
        <ProjectCard
          src={projectFive}
          link="https://github.com/PushpikaLiyanagama/Smart-MCQ-Assessment-System-"
          h3="Smart MCQ Application"
        />
        <ProjectCard
          src={projectSix}
          link="https://github.com/PushpikaLiyanagama/DertDevil"
          h3="Clean Master Web"
        />
        <ProjectCard
          src={projectSeven}
          link="https://pushpikaliyanagama.github.io/officialWebSite.github.io/"
          h3="NB CodeZone Web App"
        />
      </div>
    </section>
  );
}

export default Projects;

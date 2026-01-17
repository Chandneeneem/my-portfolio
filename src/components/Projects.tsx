import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

// Projects section rendering project cards
// const Projects = () => {
//   return (
//     <section id="projects" className="section bg-light fade-section">
//       <div className="container">
//         <h2 className="section-title text-center">Projects</h2>
//         <p className="text-center text-secondary mb-4">Selected work highlighting my frontend and full-stack skills.</p>
//         <div className="row g-4">
//           {projects.map((project) => (
//             <div key={project.title} className="col-12 col-md-6 col-lg-6">
//               <ProjectCard project={project} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
const Projects = () => {
  return (
    <section id="projects" className="section bg-light fade-section">
      <div className="container">
        <h2 className="section-title text-center">Projects</h2>
        <p className="text-center text-secondary mb-4">
          Selected work highlighting my frontend skills.
        </p>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.title} className="col-12 col-md-6 col-lg-6">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;


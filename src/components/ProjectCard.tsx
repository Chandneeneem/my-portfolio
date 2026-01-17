// import type { FC } from 'react';
// import type { Project } from '../data/projects';
// import { FaExternalLinkAlt } from 'react-icons/fa';

// type ProjectCardProps = {
//   project: Project;
// };

// // Reusable card for individual projects
// const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
//   return (
//     <div className="card project-card card-hover h-100">
//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title mb-2">{project.title}</h5>
//         <p className="card-text text-secondary flex-grow-1">{project.description}</p>
//         <div className="mb-3">
//           {project.tech.map((tech) => (
//             <span key={tech} className="badge text-bg-light text-uppercase me-2 mb-2">
//               {tech}
//             </span>
//           ))}
//         </div>
//         {project.link && (
//           <a
//             href={project.link}
//             className="text-decoration-none d-inline-flex align-items-center gap-2 fw-semibold"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <span>View details</span>
//             <FaExternalLinkAlt size={14} />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import type { FC } from 'react';
import type { Project } from '../data/projects';
import { FaExternalLinkAlt } from 'react-icons/fa';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card project-card card-hover h-100">
      <div className="card-body d-flex flex-column">
        {/* Title */}
        <h5 className="card-title mb-2">{project.title}</h5>

        {/* Description */}
        <p className="card-text text-secondary">
          {project.description}
        </p>

        {/* Key Features */}
        {project.features?.length > 0 && (
          <ul className="small text-secondary mb-3 ps-3">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-1">
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="mb-3 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="badge text-bg-light text-uppercase me-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External Link */}
        {project.link && (
          <a
            href={project.link}
            className="text-decoration-none d-inline-flex align-items-center gap-2 fw-semibold"
            target="_blank"
            rel="noreferrer"
          >
            <span>View project</span>
            <FaExternalLinkAlt size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

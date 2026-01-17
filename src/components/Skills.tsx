import { skills } from '../data/skills';

// Skill grid using react-icons
const Skills = () => {
  return (
    <section id="skills" className="section fade-section">
      <div className="container">
        <h2 className="section-title text-center">Skills</h2>
        <p className="text-center text-secondary mb-4">
          Core technologies I use to build responsive and maintainable experiences.
        </p>
        <div className="row g-3 justify-content-center">
          {skills.map(({ name, icon: Icon }) => (
            <div key={name} className="col-6 col-md-4 col-lg-3">
              <div className="skill-card card-hover d-flex align-items-center gap-3 p-3 border rounded-3 shadow-sm h-100">
                <div className="icon-wrapper d-flex align-items-center justify-content-center rounded-2">
                  <Icon size={22} />
                </div>
                <span className="fw-semibold">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


// About section with bio and experience
const About = () => {
  return (
    <section id="about" className="section bg-light fade-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="section-title text-center">About Me</h2>
            <p className="text-center text-secondary mb-4">
              I am a frontend developer with a passion for crafting clean, accessible, and user-focused interfaces. I
              enjoy collaborating with teams to translate ideas into performant web experiences.
            </p>
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex flex-column flex-md-row align-items-start gap-3">
                <div className="experience-pill text-center px-4 py-3 rounded-3 bg-primary text-white">
                  <div className="fs-2 fw-bold">1+</div>
                  <div className="small text-uppercase">Years in Web Development</div>
                </div>
                {/* <div>
                  <h5 className="fw-semibold mb-2">What I do</h5>
                  <p className="mb-1 text-secondary">
                    - Build responsive and scalable single-page applications using React, Next.js, and TypeScript.
                  </p>
                  <p className="mb-1 text-secondary">
                    - Set up projects with clean folder structures, ESLint rules, and TypeScript configurations for 
                      maintainable codebases.
                  </p>
                  <p className="mb-1 text-secondary">
                    - Develop modular and reusable UI components using Bootstrap 5 and MUI.
                  </p>
                  <p className="mb-1 text-secondary">
                    - Implement dynamic and conditional UI logic based on API responses and user interactions.
                  </p>
                  <p className="mb-1 text-secondary">
                    - Integrate REST APIs using Axios and manage server state with Redux Toolkit Query.
                  </p>
                  <p className="mb-1 text-secondary">
                    - Build complex forms using Formik with Yup for schema-based validation.
                  </p>
                  <p className="mb-1 text-secondary">
                    - Create data-driven tables with MUI, including sorting, filtering, and pagination.
                  </p>
                  <p className="mb-1 text-secondary">
                    - Optimize frontend performance, accessibility, and overall user experience.
                  </p>

                </div> */}
                <div>
  <h5 className="fw-semibold mb-2">What I do</h5>

  <ul className="text-secondary ps-3 mb-0">
    <li className="mb-1">
      Build responsive and scalable single-page applications using React, Next.js, and TypeScript.
    </li>
    <li className="mb-1">
      Set up projects with clean folder structures, ESLint rules, and TypeScript configurations for maintainable codebases.
    </li>
    <li className="mb-1">
      Develop modular and reusable UI components using Bootstrap 5 and MUI.
    </li>
    <li className="mb-1">
      Implement dynamic and conditional UI logic based on API responses and user interactions.
    </li>
    <li className="mb-1">
      Integrate REST APIs using Axios and manage server state with Redux Toolkit Query.
    </li>
    <li className="mb-1">
      Build complex forms using Formik with Yup for schema-based validation.
    </li>
    <li className="mb-1">
      Create data-driven tables with MUI, including sorting, filtering, and pagination.
    </li>
    <li>
      Optimize frontend performance, accessibility, and overall user experience.
    </li>
  </ul>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


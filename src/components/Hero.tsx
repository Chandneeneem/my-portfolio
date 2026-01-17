import { FaArrowRight } from 'react-icons/fa';

// Hero section with quick intro and call-to-action buttons
const Hero = () => {
  return (
    <section id="home" className="hero-section fade-section">
      <div className="container py-5">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <p className="text-uppercase text-info fw-semibold mb-2">Frontend / React Developer</p>
            <h1 className="display-4 fw-bold mb-3">Hi, I&apos;m Chandnee Neem</h1>
            <p className="lead text-light-emphasis mb-4">
              {/* I build responsive, accessible, and performant web experiences. I enjoy transforming ideas into
              delightful interfaces with React, TypeScript, and modern tooling. */}
             I am a Frontend Developer working primarily with React, Next.js, and TypeScript, focused on building 
             responsive, accessible, and visually polished user interfaces. I enjoy transforming UI designs into
              clean, scalable components using modern frontend tools and best practices
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a
                className="btn btn-theme-primary btn-lg d-inline-flex align-items-center gap-2"
                href="#projects"
              >
                View Projects <FaArrowRight size={14} />
              </a>
              <a className="btn btn-theme-outline btn-lg" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="glass-card p-4 rounded-4 shadow-sm">
              <p className="text-secondary mb-2">Currently focusing on</p>
              <ul className="list-unstyled mb-0">

                <li className="d-flex align-items-center gap-2 py-2 border-bottom border-secondary-subtle">
                  <span className="bullet" />
                  <span>
                    {/* Building with Next.js and TypeScript */}
                    Building modern user interfaces with React, Next.js, and TypeScript.
                    </span>
                </li>
                <li className="d-flex align-items-center gap-2 py-2 border-bottom border-secondary-subtle">
                  <span className="bullet" />
                  <span>
                    {/* Scaling component systems with Bootstrap 5 */}
                    Creating responsive and reusable UI components using Bootstrap 5.
                    </span>
                </li>
                <li className="d-flex align-items-center gap-2 py-2">
                  <span className="bullet" />
                  <span>
                    {/* Improving Node.js + SQL backends for portfolio apps */}
                    Improving UI performance, accessibility, and overall user experience.
                    </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


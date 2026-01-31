import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

// Contact section with quick links
const Contact = () => {
  return (
    <section id="contact" className="section fade-section">
      <div className="container">
        <h2 className="section-title text-center">Contact</h2>
        <p className="text-center text-secondary mb-4">
          I&apos;m open to new opportunities and collaborations. Feel free to reach out.
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="list-group shadow-sm">
              <a className="list-group-item list-group-item-action d-flex align-items-center gap-3" href="mailto:chandnee@example.com">
                <span className="contact-icon d-inline-flex align-items-center justify-content-center rounded-circle">
                  <FaEnvelope />
                </span>
                <div className="text-truncate">
                  <div className="fw-semibold">Email</div>
                  <div className="text-secondary small">chandnineem11@gmail.com</div>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action d-flex align-items-center gap-3"
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon d-inline-flex align-items-center justify-content-center rounded-circle">
                  <FaGithub />
                </span>
                <div className="text-truncate">
                  <div className="fw-semibold">GitHub</div>
                  <div className="text-secondary small">https://github.com/Chandneeneem</div>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action d-flex align-items-center gap-3"
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon d-inline-flex align-items-center justify-content-center rounded-circle">
                  <FaLinkedin />
                </span>
                <div className="text-truncate">
                  <div className="fw-semibold">LinkedIn</div>
                  <div className="text-secondary small">https://www.linkedin.com/in/chandni-neem-606591229/</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


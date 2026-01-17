const Footer = () => {
  return (
    <footer className="py-4 footer-theme">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <span>© {new Date().getFullYear()} Chandnee Neem.</span>
        {/* <span className="text-secondary small">
          Built with React, TypeScript, Bootstrap, and Vite.
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;


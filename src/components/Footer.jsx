import img from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-base-200 text-base-content">
        <div className="mx-auto flex max-w-[120rem] flex-col items-center justify-center gap-5 p-8 text-center sm:p-10 md:flex-row md:flex-wrap md:items-start md:gap-x-40 md:gap-y-10">
          <aside className="flex flex-col items-center">
            <img src={img} alt="Dev Stack" />
            <p>
              Open your career dream doors
              <br />
              with the right stack combination.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#github" className="link-hover text-xs font-bold">GitHub</a>
              <a href="#twitter" className="link-hover text-xs font-bold">Twitter</a>
              <a href="#linkedin" className="link-hover text-xs font-bold">LinkedIn</a>
            </div>
          </aside>
          <nav className="flex flex-col items-center gap-1">
            <h6 className="footer-title">Product</h6>
            <a href="#home" className="link link-hover">Home</a>
            <a href="#technologies" className="link link-hover">Technology</a>
            <a href="#projects" className="link link-hover">Projects</a>
          </nav>
          <nav className="flex flex-col items-center gap-1">
            <h6 className="footer-title">Company</h6>
            <a href="#about" className="link link-hover">About us</a>
            <a href="#contact" className="link link-hover">Contact</a>
            <a href="#careers" className="link link-hover">Careers</a>
          </nav>
          <nav className="flex flex-col items-center gap-1">
            <h6 className="footer-title">Legal</h6>
            <a href="#privacy" className="link link-hover">Privacy Policy</a>
            <a href="#terms" className="link link-hover">Terms of Service</a>
          </nav>
        </div>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside className="flex flex-row items-center justify-between gap-80">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Dev Stack.
          </p>
          <div className="flex flex-row gap-4"                                                                           >
            <p>Privacy</p>
          <p>Terms</p>
          </div>
        </aside>
      </footer>
    </>
  );
};

export default Footer;

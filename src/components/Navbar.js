import React from "react";
import "../assets/css/navbar.css";

const Navbar = props => {
  const navOperation = () => {
    const nav = document.getElementById("navbar");
    if (nav && window.scrollY <= 30 && window.screen.width > 991) {
      nav.className = "navbar navbar-expand-lg navbar-light fixed-top nav";
    } else if (nav && window.scrollY > 30 && window.screen.width > 991) {
      nav.className = "navbar navbar-expand-lg navbar-light fixed-top scroll ";
    }
    // if (nav && window.scrollY <= 10 && window.screen.width < 991) {
    //   nav.style.top = "-65px";
    // } else {
    //   nav.style.top = "0px";
    // }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", navOperation);
    return () => {
      window.removeEventListener("scroll", navOperation);
    };
  }, []);

  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
        <a href="#" className="navbar-brand navbar-brand-name ">
          Lead
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-ul ">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

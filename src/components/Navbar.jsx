import React from "react";

const Navbar = (props) => { 
    return (
        <div className="app">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <a className="navbar-brand" href="">
                        <img id="logo" src="https://www.wlu.ca/images/general/desktop_logo.png" alt="Laurier Logo" width="150" height="50" className="d-inline-block align-text-top"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link" onClick={() => props.startQuiz()} href="#">Take Quiz <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="mailto:offcampushousing@wlu.ca">Contact Us</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://students.wlu.ca/student-life/residence-and-off-campus-housing/off-campus-initiatives/off-campus-housing/index.html">Laurier Website</a>
                        </li>
                      </ul>
                    </div>

                  </nav>
        </div>
    )
}
export default Navbar
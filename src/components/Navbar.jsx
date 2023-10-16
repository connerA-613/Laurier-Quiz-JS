import React from "react";

const Navbar = (props) => { 
    return (
        <div class="app">
                <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                    <a class="navbar-brand" href="">
                        <img id="logo" src="https://www.wlu.ca/images/general/desktop_logo.png" alt="Laurier Logo" width="150" height="50" class="d-inline-block align-text-top"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link" onClick={() => props.startQuiz()} href="#">Take Quiz <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="https://www.wlu.ca/">Laurier Website</a>
                        </li>
                      </ul>
                    </div>

                  </nav>
        </div>
    )
}
export default Navbar
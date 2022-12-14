import React from "react";
import { Link } from "react-router-dom";

class navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
          <div className="container-fluid">
            <h1>React class</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-link active text-light" aria-current="page" to="/home">
                    Props
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active text-light" aria-current="page" to="/about">
                    State
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/register"
                  >
                    Register Form
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;

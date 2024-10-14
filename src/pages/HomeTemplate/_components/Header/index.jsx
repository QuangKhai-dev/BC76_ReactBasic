import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `my-active nav-link` : `nav-link`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `my-active nav-link` : `nav-link`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `my-active nav-link` : `nav-link`
                  }
                  to="/list-movie"
                >
                  List Movie
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

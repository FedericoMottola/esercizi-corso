import React from 'react';
import logo from '../assets/netflix_logo.png'
import avatar from '../assets/avatar.png'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" width="90" height="50"/>
              </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link"  href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">TV Shows</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Movies</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Recently Added</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">My list</a>
                  </li>
                
              </ul>
              <div>
              <ul className="d-flex navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                      </svg></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">KIDS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill text-white" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                      </svg></a>
                  </li>
                  <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={avatar} width="30" height="30" alt="avatar"/>
        </a>
    
        <ul className="dropdown-menu dropdown-menu-end bg-dark spostato">
          <li><a className="dropdown-item text-white" href="#">Manage Profiles</a></li>
          <li><a className="dropdown-item text-white" href="../Giorno5/profile.html">Account</a></li>
          <li><a className="dropdown-item text-white" href="#">Help Center</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item text-white" href="#">Signout Netflix</a></li>
        </ul>
    
      </li>
              </ul>
            </div>
            </div>
      </div>
    </nav>
  );
};

export default NavBar;

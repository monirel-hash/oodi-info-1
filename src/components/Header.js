import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Fade } from 'react-reveal';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-collapse">
            <div className="left-section">
              <Link className="navbar-brand" to="/">
                OODI-INFO
              </Link>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/societe">
                    Société
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/references">
                    Références
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/partenaires">
                    Nos Partenaires
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-section">
              <form className="form-inline">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Rechercher" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      Rechercher
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-content container mt-5 d-flex justify-content-between">
        <img
          src="https://www.oodi-info.com/_frame/logo4-toweb.png"
          alt="Logo"
          className="logo-image"
        />
        <div className="carousel-container">
          <Carousel showThumbs={false} width="400px" autoPlay>
            <Fade right>
              <img
                src="https://www.oodi-info.com/_frame/endpoint-protector-2.jpg"
                alt="protector.jpg"
              />
            </Fade>
            <Fade right>
              <img
                src="https://www.oodi-info.com/_frame/kaspersky.png"
                alt="Kaspersky.png"
              />
            </Fade>
            <Fade right>
              <img
                src="https://www.oodi-info.com/_frame/microsoft.png"
                alt="microsoft.png"
              />
            </Fade>
            <Fade right>
              <img
                src="https://www.oodi-info.com/_frame/vmware.jpg.png"
                alt="vmware.png"
              />
            </Fade>
            <Fade right>
              <img
                src="https://www.oodi-info.com/_frame/veeam.jpg"
                alt="veeam.jpg.png"
              />
            </Fade>
            <Fade right>
              <img
                src="https://www.oodi-info.com/_frame/vinchin.png"
                alt="vinchin.png"
              />
            </Fade>
          </Carousel>
        </div>
      </div>
    </header>
  );
};

export default Header;

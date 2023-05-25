import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Fade } from 'react-reveal';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{borderRadius:'0px'}}>
        <div class="container d-flex justify-content-between">
          <Link class="navbar-brand" to="/">
            OODI-INFO
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
            aria-controls="myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Accueil
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/societe">
                  Société
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/references">
                  Références
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/partenaires">
                  Nos Partenaires
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Rechercher.."
              aria-label="Search"
            />
          </form>
        </div>
      </nav>

      <div className="header-content container mt-5 d-flex justify-content-center align-items-center">
        <img
          src="https://www.oodi-info.com/_frame/logo4-toweb.png"
          alt="Logo"
          className="logo-image"
        />
        <div className="carousel-container">
          <Carousel showThumbs={false} autoPlay>
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

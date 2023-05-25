import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Fade } from 'react-reveal';
import '../styles/Header.css'; // Import your custom CSS file for additional styling

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">OODI-INFO</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/societe">Société</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link"  href="/references">
                  Références
                </a>

              </li>
              <li class="nav-item">
                <a class="nav-link" href="/partenaires">Nos Partenaires</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search" />
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Rechercher</button>
            </form>
          </div>
        </div>
      </nav>


      <div className="header-content container mt-5 d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://www.oodi-info.com/_frame/logo4-toweb.png"
          alt="Logo"
          className="logo-image"
        />
        <div className="carousel-container">
          <Carousel showThumbs={false} width="100%" autoPlay>
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

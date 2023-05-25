import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-2">
              Office: Résidence Essabah Immeuble Boujdour CYM, Rabat
            </p>
            <div className='links'>
              <a href="tel: +212 6 68 280 801">
                <i class="fa-solid fa-phone"></i>
                06 68 28 08 01
              </a>
              <a href="https://www.linkedin.com/company/oodi-info/">
                <i class="fa-brands fa-linkedin"></i>
                contact@oodi-info.com
              </a>
              <a href="mailto:contact@oodi-info.com">
                <i class="fa-solid fa-envelope"></i>
                contact@oodi-info.com
              </a>
            </div>
          </div>
          <br />
          <div className="col-md-6">
            <p className="mb-0 text-center text-md-end">
              © SiteName. Tous droits réservés | OODI-INFO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-2">Office: Résidence Essabah Immeuble Boujdour CYM, Rabat</p>
            <p className="mb-2">Phone: +212 6 68 280 801</p>
            <p className="mb-0">Email: contact@oodi-info.com</p>
          </div><br />
          <div className="col-md-6">
            <p className="mb-0 text-center text-md-end">
              Créé avec TOWeb - Le logiciel de création de sites responsive.
              © SiteName. Tous droits réservés | OODI-INFO 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

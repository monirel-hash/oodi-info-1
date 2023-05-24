import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-2">Office: Résidence Essabah Immeuble Boujdour CYM, Rabat</p>
            <p className="mb-2">Phone: +212 6 68 280 801</p>
            <p className="mb-0">Email: contact@oodi-info.com</p>
          </div>
          <div className="col-md-6">
            <p className="mb-0 text-center text-md-end">
              Créé avec TOWeb - Le logiciel de création de sites responsive.
              © SiteName. Tous droits réservés. OODI-INFO offre des prestations flexibles allant du support technique ponctuel à la prestation globale.
              Elle compte parmi ses clients des sociétés de diverses activités et des administrations publiques.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Partners.css'; // Import your custom CSS file for additional styling


const Partners = () => {
  return (
    <div className="container">
      <Fade left>
        <section>
          <h2 className="mb-4">Nos Partenaires</h2>
          <div>
            <p>
              Conçu avec TOWeb, le logiciel de création de sites web. Créez votre site web ou votre boutique en ligne responsive sans code et sans abonnement. Avec la liberté de choisir votre hébergement pour le publier où vous voulez.
              <br />
              <a href="/" target="_blank" rel="noopener noreferrer">En Savoir Plus !</a>
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <h4>Virtualisation</h4>
              <img src="https://www.oodi-info.com/_media/img/small/picd70.tmp.jpg" alt="Virtualisation 1" className="img-fluid mb-2" />
              <img src="https://www.oodi-info.com/_media/img/small/pic2158.tmp.jpg" alt="Virtualisation 2" className="img-fluid mb-2" />
            </div>
            <div className="col-md-3 mb-4">
              <h4>Sauvegarde & Réplication</h4>
              <img src="https://www.oodi-info.com/_media/img/small/picc97a.tmp.jpg" alt="Sauvegarde & Réplication 1" className="img-fluid mb-2" />
              <img src="https://www.oodi-info.com/_media/img/medium/pic78dc.tmp.jpg" alt="Sauvegarde & Réplication 2" className="img-fluid mb-2" />
              <img src="https://www.oodi-info.com/_media/img/small/picf191.tmp.jpg" alt="Sauvegarde & Réplication 3" className="img-fluid mb-2" />
            </div>
            <div className="col-md-3 mb-4">
              <h4>Infrastructure Hyperconvergée</h4>
              <img src="https://www.oodi-info.com/_media/img/small/picf226.tmp.jpg" alt="Infrastructure Hyperconvergée" className="img-fluid mb-2" />
            </div>
            <div className="col-md-3 mb-4">
              <h4>Antivirus</h4>
              <img src="https://www.oodi-info.com/_media/img/small/pic269.tmp.jpg" alt="Antivirus" className="img-fluid mb-2" />
            </div>
            <div className="col-md-3 mb-4">
              <h4>Protection Des Données</h4>
              <img src="https://www.oodi-info.com/_media/img/small/pic3c8c.tmp.jpg" alt="Protection Des Données" className="img-fluid mb-2" />
            </div>
            <div className="col-md-3 mb-4">
              <h4>Messagerie</h4>
              <img src="https://www.oodi-info.com/_media/img/small/pic2549.tmp.jpg" alt="Messagerie" className="img-fluid mb-2" />
            </div>
            <div className="col-md-3 mb-4">
              <h4>Cloud</h4>
              <img src="https://www.oodi-info.com/_media/img/small/pic602c.tmp.jpg" alt="Cloud" className="img-fluid mb-2" />
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Partners;

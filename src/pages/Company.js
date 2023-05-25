import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Company.css'; 

const Company = () => {
  return (
    <div className="container">
      <Fade left>
        <section>
          <h2 className="mb-4 text-bold">A Propos de Nous</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://www.oodi-info.com/_media/img/small/partenaire2023.jpg"
                alt="Expérience"
                className="img-fluid mb-4"
              />
              <p>
                OODI-INFO est spécialisée dans les nouvelles technologies d'informations. Depuis plus de 10 ans, nous nous engageons à offrir des produits/services de qualité supérieure à nos clients.
                Notre équipe est composée de professionnels compétents et passionnés par leur métier.
              </p>
              <p>
                Chez OODI-INFO, nous sommes engagés à offrir à nos clients une expérience exceptionnelle. Nous sommes à l'écoute de leurs besoins et nous nous efforçons de trouver des solutions adaptées à leurs problématiques.
              </p>
              <p>
                Nous espérons avoir l'opportunité de travailler avec vous et de vous montrer ce que notre entreprise peut vous offrir. N'hésitez pas à nous contacter pour en savoir plus.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Expérience</strong>
              </p>
              <p>
                OODI-INFO dispose d'une expérience approfondie dans les domaines de la virtualisation, de la sauvegarde et de la réplication de données, de la protection contre la fuite des données, de la messagerie Office 365, d'Active Directory et de Cloud Azure.
                Nous avons travaillé avec des entreprises de toutes tailles et de tous secteurs d'activité pour les aider à tirer le meilleur parti de ces technologies.
              </p>
              <p>
                Notre expérience dans ces domaines nous permet de proposer des solutions sur mesure pour répondre aux besoins spécifiques de nos clients.
                Nous sommes fiers d'aider nos clients à atteindre leurs objectifs informatiques en leur offrant des solutions innovantes et fiables.
                N'hésitez pas à nous contacter pour en savoir plus sur nos services.
              </p>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Company;

import React from 'react';
import Cards from './Cards';
import { Fade } from 'react-reveal';


const Home = () => {
  return (
    <Fade>
      <h2>Accueil</h2>
      <p>Bienvenue sur notre site</p>
      <p>OODI-INFO est une société de conseils et de services informatiques. Fondée en 2011 et forte de plus d’une dizaine de spécialistes, elle est reconnue pour son expertise dans le consulting et le déploiement des solutions de virtualisation, sauvegarde, protection des données et business intelligence.</p>

      <Cards />
    </Fade>
  );
};

export default Home;

import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../styles/Cards.css'; // Import your custom CSS file for additional styling

const Cards = () => {
  return (
    <Container>
      <div className="cards-container">
        <Card>
          <Card.Img variant="top" src="https://www.oodi-info.com/_media/img/small/picffc6.tmp.jpg" />
          <Card.Body>
            <Card.Title>Infrastructure Système</Card.Title>
            <Card.Text>
              Notre entreprise est spécialisée dans la fourniture de solutions informatiques complètes pour les entreprises de toutes tailles. Nous avons une expertise approfondie dans les domaines de la virtualisation, de la sauvegarde, de l'Active Directory et de la messagerie, et nous travaillons avec les meilleures solutions du marché.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.oodi-info.com/_media/img/small/pic92bc.tmp.jpg" />
          <Card.Body>
            <Card.Title>Protection Des Données</Card.Title>
            <Card.Text>
              Notre solution DLP EndpointProtector aide à prévenir les fuites de données en surveillant les données au niveau des terminaux (ordinateurs portables, ordinateurs de bureau, tablettes et smartphones), des serveurs de fichiers et des applications cloud. Cela permet aux entreprises de détecter les activités suspectes et de bloquer l'accès aux données sensibles, même en dehors du réseau de l'entreprise.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.oodi-info.com/_media/img/small/pic348b.tmp.jpg" />
          <Card.Body>
            <Card.Title>Analyse Des Données</Card.Title>
            <Card.Text>
              Notre entreprise se spécialise dans les solutions d'analyse de données pour aider les entreprises à prendre des décisions éclairées. Nous travaillons avec les technologies de pointe, notamment PowerBI et SQLServer, pour fournir des analyses approfondies et des tableaux de bord dynamiques.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Cards;

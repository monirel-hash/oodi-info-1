import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/References.css'; // Import your custom CSS file for additional styling


const References = () => {
  return (
    <div className="container">
      <Fade left>
        <section>
          <h2 className="mb-4">Nos Références</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Des solutions sur mesure pour des défis informatiques complexes</h4>
              <ul>
                <li><img src="https://www.oodi-info.com/_media/img/small/pice025.tmp.jpg" alt="Solution 1" className="img-fluid mb-4" /></li>
                <li>Solution antivirale Kaspersky Hybrid Cloud</li>
                <li>Solution de virtualisation Vmware</li>
                <li>Solution de sauvegarde & réplication Veeam</li>
                <li>Migration Active Directory</li>
              </ul>
            </div>
            <div className="col-md-6 mb-4">
              <h4>Solution DLP EndPointProtector</h4>
              <ul>
                <li><img src="https://www.oodi-info.com/_media/img/small/pic63ca.tmp.jpg" alt="Solution 2" className="img-fluid mb-4" /></li>
                <li>Solution de sauvegarde & réplication Veeam</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Solution BI avec Microsoft SQL Server</h4>
              <ul>
                <li><img src="https://www.oodi-info.com/_media/img/small/pic9ec1.tmp.jpg" alt="Solution 3" className="img-fluid mb-4" /></li>
                <li>Solution EPM avec SharePoint & Project Server</li>
                <li>Solution de virtualisation Hyper V 2012</li>
              </ul>
            </div>
            <div className="col-md-6 mb-4">
              <h4>Solution antivirale Kaspersky Hybrid Cloud</h4>
              <ul>
                <li>Solution de virtualisation Vmware</li>
                <li>Solution de sauvegarde & réplication Veeam</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-md-6">
              <img src="https://www.oodi-info.com/_media/img/small/pic86e6.tmp.jpg" alt="Nakivo" className="img-fluid mb-4" />
            </div>
            <div className="col-md-6">
              <img src="https://www.oodi-info.com/_media/img/small/pic27ac.tmp.jpg" alt="Veeam" className="img-fluid mb-4" />
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default References;

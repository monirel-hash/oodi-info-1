import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/References.css'; 


const References = () => {
  return (
    <div className="container">
      <Fade left>
        <section>
          <h2 className="mb-4 text-bold">Nos Références</h2>
          <div className="row">
            <p className='ms-2 mb-5'>
              Des solutions sur mesure pour des défis informatiques complexes :
            </p>
            <div className="col-md-6 mb-4">
              <ul>
                <img
                  src="https://www.oodi-info.com/_media/img/small/pice025.tmp.jpg"
                  alt="Solution 1"
                  className="img-fluid mb-4"
                />
                <li>Solution antivirale Kaspersky Hybrid Cloud</li>
                <li>Solution de virtualisation Vmware</li>
                <li>Solution de sauvegarde & réplication Veeam</li>
                <li>Migration Active Directory</li>
              </ul>
            </div>
            <div className="col-md-6 mb-4">
              <ul>
                <img
                  src="https://www.oodi-info.com/_media/img/small/pic63ca.tmp.jpg"
                  alt="Solution 2"
                  className="img-fluid mb-4"
                />
                <li>Solution DLP EndPointProtector</li>
                <li>Solution de sauvegarde & réplication Veeam</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <ul>
                <img
                  src="https://www.oodi-info.com/_media/img/small/pic9ec1.tmp.jpg"
                  alt="Solution 3"
                  className="img-fluid mb-4"
                />
                <li>Solution BI avec Microsoft SQL Server</li>
                <li>Solution EPM avec SharePoint & Project Server</li>
                <li>Solution de virtualisation Hyper V 2012</li>
              </ul>
            </div>
            <div className="col-md-6 mb-4">
              <ul>
                <img
                  src="https://www.oodi-info.com/_media/img/small/pic27ac.tmp.jpg"
                  alt="Veeam"
                  className="img-fluid mb-4"
                />
                <li>Solution antivirale Kaspersky Hybrid Cloud</li>
                <li>Solution de virtualisation Vmware</li>
                <li>Solution de sauvegarde & réplication Veeam</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <img
                  src="https://www.oodi-info.com/_media/img/small/pic86e6.tmp.jpg"
                  alt="Nakivo"
                  className="img-fluid mb-4"
                />
                <li>Solution DLP EndPointProtector</li>
                <li>Solution de virtualisation Vmware</li>
                <li>Solution de sauvegarde & réplication Veeam</li>
              </ul>
            </div>
            <div className="col-md-6"></div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default References;

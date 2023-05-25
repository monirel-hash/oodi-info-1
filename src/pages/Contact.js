import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div>
      <Fade left>
        <section className="contact-section">
          <div className="map-form-container">
            <div className="map-container">
              <h2>Où Nous Trouver ?</h2>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.662874476876!2d-6.855563385253903!3d33.97841322931239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda6f6e77433a56f%3A0xc7fb3a9e6b1e4de7!2sR%C3%A9sidence%20Essabah%20Immeuble%20Boujdour%20CYM%2C%20Rabat!5e0!3m2!1sen!2sma!4v1628048803162!5m2!1sen!2sma"
                width="100%"
                height="450"
                style={{ padding: 10 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Site web</label>
                  <input type="text" className="form-control" id="website" name="website" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input type="text" className="form-control" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="privacy" required />
                  <label className="form-check-label" htmlFor="privacy">
                    En envoyant mes informations, j'accepte votre Politique de confidentialité
                  </label>
                </div>

                <div>
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-details">
              <h2>Coordonnées</h2>
              <p>Appart 9 Imm A Boujdour<br />
                Résidence Assabah CYM<br />
                Maroc</p>
            </div>
            <div className="contact-details">
              <h2>Contact</h2>
              <p>Tél : +212 6 68 280 801<br />
                Email : contact@oodi-info.com</p>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Contact;

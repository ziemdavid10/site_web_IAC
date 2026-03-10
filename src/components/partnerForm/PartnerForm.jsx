import React from 'react';
import './PartnerForm.scss';

const PartnerForm = () => {
  return (
    <section className="partner-section" id="partner">
      <div className="container">
        <div className="partner-info">
          <h2>Devenir Partenaire</h2>
          <p>L'IA Cameroun vise à établir des partenariats stratégiques pour accélérer le développement technologique et renforcer les capacités locales.</p>
          
          <div className="benefits">
            <div className="benefit-item">
              <i className="icon">🚀</i>
              <div>
                <h4>Accès à l'expertise</h4>
                <p>Collaboration avec des chercheurs et experts en IA.</p>
              </div>
            </div>
            <div className="benefit-item">
              <i className="icon">🌐</i>
              <div>
                <h4>Visibilité accrue</h4>
                <p>Mise en avant sur nos plateformes et événements.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-container">
          <form className="iac-form">
            <h3>Formulaire de Partenariat</h3>
            <div className="form-group">
              <label>Nom de l'entreprise / Organisation</label>
              <input type="text" placeholder="Ex: Tech Solutions SA" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Statut Social</label>
                <input type="text" placeholder="SARL, ONG, etc." />
              </div>
              <div className="form-group">
                <label>Localisation</label>
                <input type="text" placeholder="Ville, Quartier" />
              </div>
            </div>

            <div className="comite-box">
              <h4>Comité d'Organisation (Si applicable)</h4>
              <div className="form-row">
                <input type="text" placeholder="PCO / Adjoint" />
                <input type="text" placeholder="Directeur Général" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Secrétaire Général" />
                <input type="text" placeholder="Contacts" />
              </div>
            </div>

            <div className="form-group">
              <label>Lien Site Web / Page Sociale</label>
              <input type="url" placeholder="https://..." />
            </div>

            <button type="submit" className="btn-submit">Envoyer la demande</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;
import { Link } from 'react-router-dom';

// Case de consentement obligatoire (loi n° 2024/017 : consentement explicite)
const ConsentField = ({ name = 'consent', checked, onChange, error, children }) => (
  <div className={`form-consent ${error ? 'has-error' : ''}`}>
    <label>
      <input type="checkbox" name={name} checked={Boolean(checked)} onChange={onChange} aria-invalid={Boolean(error)} />
      <span>
        {children || (
          <>
            J'accepte que l'IAC utilise ces informations pour traiter ma demande, conformément à la{' '}
            <Link to="/confidentialite" target="_blank">politique de confidentialité</Link>.
          </>
        )}
        <span className="form-field__req" aria-hidden> *</span>
      </span>
    </label>
    {error && <p className="form-field__error" role="alert">{error}</p>}
  </div>
);

export default ConsentField;

// Champ invisible pour les humains : s'il est rempli, l'envoi est ignoré (anti-spam)
const Honeypot = () => (
  <div className="form-honeypot" aria-hidden>
    <label>
      Ne pas remplir
      <input type="text" name="website_confirm" tabIndex={-1} autoComplete="off" />
    </label>
  </div>
);

export default Honeypot;

import { LuCircleCheck, LuMail, LuTriangleAlert, LuLoaderCircle, LuSend } from 'react-icons/lu';
import { ORG } from '../../config/site';

// Bouton d'envoi avec état de chargement
export const SubmitButton = ({ status, children = 'Envoyer' }) => (
  <button type="submit" className="form-submit" disabled={status === 'sending'} aria-busy={status === 'sending'}>
    {status === 'sending'
      ? <><LuLoaderCircle className="form-submit__spin" aria-hidden /> Envoi en cours…</>
      : <><LuSend aria-hidden /> {children}</>}
  </button>
);

// Écran de confirmation après envoi
export const FormSuccess = ({ via, title, onReset, resetLabel = 'Envoyer une autre demande' }) => (
  <div className="form-success" role="status">
    <span className="form-success__icon">{via === 'mailto' ? <LuMail aria-hidden /> : <LuCircleCheck aria-hidden />}</span>
    <h3>{via === 'mailto' ? 'Votre messagerie s\'est ouverte' : title}</h3>
    <p>
      {via === 'mailto'
        ? `Vérifiez l'e-mail pré-rempli puis envoyez-le à ${ORG.email}. Si rien ne s'est ouvert, écrivez-nous directement à cette adresse.`
        : 'Nous avons bien reçu votre demande. Notre équipe vous répondra dans les meilleurs délais.'}
    </p>
    {onReset && <button type="button" className="form-link" onClick={onReset}>{resetLabel}</button>}
  </div>
);

// Message d'erreur d'envoi
export const FormError = () => (
  <div className="form-alert" role="alert">
    <LuTriangleAlert aria-hidden />
    <p>
      L'envoi a échoué. Réessayez dans un instant ou écrivez-nous à{' '}
      <a href={`mailto:${ORG.email}`}>{ORG.email}</a>.
    </p>
  </div>
);

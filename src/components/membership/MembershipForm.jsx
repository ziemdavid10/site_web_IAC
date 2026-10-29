import { LuUser, LuMail, LuPhone, LuMapPin, LuBuilding2 } from 'react-icons/lu';
import FormField from '../forms/FormField';
import ChoiceChips from '../forms/ChoiceChips';
import ConsentField from '../forms/ConsentField';
import Honeypot from '../forms/Honeypot';
import { SubmitButton, FormSuccess, FormError } from '../forms/FormFeedback';
import useForm from '../../hooks/useForm';
import { sendForm } from '../../services/formService';
import { required, email, phone, accepted } from '../../utils/validators';
import { ORG } from '../../config/site';
import '../forms/Forms.scss';

const schema = {
  fullName: [required()],
  email: [required(), email()],
  phone: [required(), phone()],
  profile: [required('Choisissez votre profil.')],
  city: [required()],
  consent: [accepted()],
};

const profiles = ['Étudiant(e)', 'Chercheur / Enseignant', 'Professionnel(le)', 'Entrepreneur / Startup', 'Autre'];
const interests = ['Formations', 'Recherche', 'Entrepreneuriat', 'Éthique & régulation', 'Événements (JCIA)', 'Bénévolat'];

const initial = {
  fullName: '', email: '', phone: '', profile: '', organisation: '', city: '',
  interests: [], message: '', consent: false,
};

const MembershipForm = () => {
  const {
    values, status, result, field, setField, handleSubmit, reset,
  } = useForm(initial, schema, (v) => sendForm({
    formName: 'Adhésion',
    subject: `Demande d'adhésion — ${v.fullName}`,
    fromName: v.fullName,
    replyTo: v.email,
    fields: [
      { label: 'Nom complet', value: v.fullName },
      { label: 'E-mail', value: v.email },
      { label: 'Téléphone', value: v.phone },
      { label: 'Profil', value: v.profile },
      { label: 'Organisation / établissement', value: v.organisation },
      { label: 'Ville', value: v.city },
      { label: 'Centres d\'intérêt', value: v.interests },
      { label: 'Message', value: v.message },
    ],
  }));

  if (status === 'success') {
    return <FormSuccess via={result?.via} title="Demande d'adhésion envoyée" onReset={reset} />;
  }

  return (
    <form className="iac-form" onSubmit={handleSubmit} noValidate>
      <Honeypot />
      <p className="iac-form__note">
        Cotisation annuelle : <strong>10 000 FCFA</strong>. Après réception de votre demande, nous vous
        contactons pour les modalités de paiement ; un reçu vous est délivré. Questions : {ORG.phone}.
      </p>
      <div className="iac-form__row">
        <FormField label="Nom complet" icon={LuUser} autoComplete="name" {...field('fullName')} />
        <FormField label="Profil" as="select" options={profiles} {...field('profile')} />
      </div>
      <div className="iac-form__row">
        <FormField label="E-mail" type="email" icon={LuMail} autoComplete="email" {...field('email')} />
        <FormField label="Téléphone" type="tel" icon={LuPhone} autoComplete="tel" placeholder="+237 6XX XX XX XX" {...field('phone')} />
      </div>
      <div className="iac-form__row">
        <FormField label="Organisation / établissement" icon={LuBuilding2} autoComplete="organization" {...field('organisation')} />
        <FormField label="Ville" icon={LuMapPin} autoComplete="address-level2" {...field('city')} />
      </div>
      <ChoiceChips
        legend="Centres d'intérêt"
        name="interests"
        options={interests}
        value={values.interests}
        onChange={setField}
      />
      <FormField label="Message (facultatif)" as="textarea" rows={3} {...field('message')} />
      <ConsentField {...field('consent')} checked={values.consent} />
      {status === 'error' && <FormError />}
      <SubmitButton status={status}>Envoyer ma demande d'adhésion</SubmitButton>
      <p className="iac-form__legend"><span className="form-field__req">*</span> Champs obligatoires</p>
    </form>
  );
};

export default MembershipForm;

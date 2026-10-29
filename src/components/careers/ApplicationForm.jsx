import { useMemo } from 'react';
import { LuUser, LuMail, LuPhone, LuLink } from 'react-icons/lu';
import FormField from '../forms/FormField';
import ConsentField from '../forms/ConsentField';
import Honeypot from '../forms/Honeypot';
import { SubmitButton, FormSuccess, FormError } from '../forms/FormFeedback';
import useForm from '../../hooks/useForm';
import { sendForm } from '../../services/formService';
import { required, email, phone, url, minLength, accepted } from '../../utils/validators';
import '../forms/Forms.scss';

export const SPONTANEOUS = 'Candidature spontanée';

const schema = {
  fullName: [required()],
  email: [required(), email()],
  phone: [required(), phone()],
  offer: [required('Choisissez un poste.')],
  education: [required()],
  cvLink: [required('Indiquez un lien vers votre CV ou profil.'), url()],
  motivation: [required(), minLength(80, 'Présentez votre motivation en 80 caractères minimum.')],
  consent: [accepted()],
};

const educationLevels = ['Baccalauréat', 'BTS / DUT / HND', 'Licence / Bachelor', 'Master / Ingénieur', 'Doctorat', 'Autre'];

const ApplicationForm = ({ offers = [], defaultOffer = '' }) => {
  const initial = useMemo(() => ({
    fullName: '', email: '', phone: '', offer: defaultOffer, education: '',
    cvLink: '', availability: '', motivation: '', consent: false,
  }), [defaultOffer]);

  const {
    values, status, result, field, handleSubmit, reset,
  } = useForm(initial, schema, (v) => sendForm({
    formName: 'Candidature',
    subject: `Candidature — ${v.offer} — ${v.fullName}`,
    fromName: v.fullName,
    replyTo: v.email,
    fields: [
      { label: 'Poste', value: v.offer },
      { label: 'Nom complet', value: v.fullName },
      { label: 'E-mail', value: v.email },
      { label: 'Téléphone', value: v.phone },
      { label: 'Niveau d\'études', value: v.education },
      { label: 'CV / profil', value: v.cvLink },
      { label: 'Disponibilité', value: v.availability },
      { label: 'Motivation', value: v.motivation },
    ],
  }));

  if (status === 'success') {
    return <FormSuccess via={result?.via} title="Candidature envoyée" onReset={reset} resetLabel="Postuler à une autre offre" />;
  }

  return (
    <form className="iac-form" onSubmit={handleSubmit} noValidate>
      <Honeypot />
      <FormField
        label="Poste visé"
        as="select"
        options={[...offers, SPONTANEOUS]}
        {...field('offer')}
      />
      <div className="iac-form__row">
        <FormField label="Nom complet" icon={LuUser} autoComplete="name" {...field('fullName')} />
        <FormField label="Téléphone" type="tel" icon={LuPhone} autoComplete="tel" placeholder="+237 6XX XX XX XX" {...field('phone')} />
      </div>
      <div className="iac-form__row">
        <FormField label="E-mail" type="email" icon={LuMail} autoComplete="email" {...field('email')} />
        <FormField label="Niveau d'études" as="select" options={educationLevels} {...field('education')} />
      </div>
      <FormField
        label="Lien vers votre CV ou profil"
        type="url"
        icon={LuLink}
        placeholder="LinkedIn, Google Drive, portfolio…"
        hint="Partagez un lien accessible (Google Drive, Dropbox, LinkedIn, GitHub…)."
        {...field('cvLink')}
      />
      <FormField label="Disponibilité" placeholder="Ex. immédiate, à partir de janvier 2027…" {...field('availability')} />
      <FormField
        label="Votre motivation"
        as="textarea"
        placeholder="Parlez-nous de votre parcours et de ce que vous souhaitez apporter à l'IAC."
        hint={`${values.motivation.trim().length} / 80 caractères minimum`}
        {...field('motivation')}
      />
      <ConsentField {...field('consent')} checked={values.consent} />
      {status === 'error' && <FormError />}
      <SubmitButton status={status}>Envoyer ma candidature</SubmitButton>
      <p className="iac-form__legend"><span className="form-field__req">*</span> Champs obligatoires</p>
    </form>
  );
};

export default ApplicationForm;

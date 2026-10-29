import { motion } from 'framer-motion';
import {
  LuBuilding2, LuUser, LuMail, LuPhone, LuGlobe, LuMapPin, LuBrain, LuMegaphone, LuUsers,
  LuHandshake,
} from 'react-icons/lu';
import FormField from '../forms/FormField';
import ChoiceChips from '../forms/ChoiceChips';
import ConsentField from '../forms/ConsentField';
import Honeypot from '../forms/Honeypot';
import { SubmitButton, FormSuccess, FormError } from '../forms/FormFeedback';
import useForm from '../../hooks/useForm';
import { sendForm } from '../../services/formService';
import { required, email, phone, url, minLength, accepted } from '../../utils/validators';
import '../forms/Forms.scss';
import './PartnerForm.scss';

const benefits = [
  { icon: LuBrain, title: 'Accès à l\'expertise', text: 'Collaborez avec des chercheurs, ingénieurs et experts en IA.' },
  { icon: LuMegaphone, title: 'Visibilité accrue', text: 'Mise en avant sur nos plateformes, nos médias et aux JCIA.' },
  { icon: LuUsers, title: 'Accès aux talents', text: 'Rencontrez stagiaires, jeunes diplômés et startups IA.' },
];

const orgTypes = ['Entreprise', 'Institution publique', 'ONG / Association', 'Université / École', 'Média', 'Organisation internationale', 'Autre'];
const partnershipTypes = ['Sponsoring des JCIA', 'Formation des équipes', 'Projet IA commun', 'Recrutement de talents', 'Visibilité / Média', 'Recherche'];

const schema = {
  organisation: [required()],
  orgType: [required('Choisissez un type d\'organisation.')],
  location: [required()],
  contactName: [required()],
  email: [required(), email()],
  phone: [required(), phone()],
  website: [url()],
  message: [required(), minLength(30, 'Décrivez votre projet en 30 caractères minimum.')],
  consent: [accepted()],
};

const initial = {
  organisation: '', orgType: '', location: '', contactName: '', role: '', email: '', phone: '',
  website: '', types: [], message: '', consent: false,
};

const PartnerForm = () => {
  const {
    values, status, result, field, setField, handleSubmit, reset,
  } = useForm(initial, schema, (v) => sendForm({
    formName: 'Partenariat',
    subject: `Demande de partenariat — ${v.organisation}`,
    fromName: `${v.contactName} (${v.organisation})`,
    replyTo: v.email,
    fields: [
      { label: 'Organisation', value: v.organisation },
      { label: 'Type', value: v.orgType },
      { label: 'Localisation', value: v.location },
      { label: 'Contact', value: v.contactName },
      { label: 'Fonction', value: v.role },
      { label: 'E-mail', value: v.email },
      { label: 'Téléphone', value: v.phone },
      { label: 'Site web', value: v.website },
      { label: 'Partenariat souhaité', value: v.types },
      { label: 'Message', value: v.message },
    ],
  }));

  return (
    <section className="partner-section" id="partenariat" aria-labelledby="partner-title">
      <div className="partner-section__inner">
        <motion.div
          className="partner-info"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="partner-info__tag"><LuHandshake aria-hidden /> Entreprises & institutions</span>
          <h2 id="partner-title">Devenir partenaire</h2>
          <p>
            L'IAC construit des partenariats stratégiques pour accélérer le développement de l'IA au
            Cameroun et renforcer les capacités locales. Parlez-nous de votre projet.
          </p>
          <ul className="partner-info__benefits">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <span><Icon aria-hidden /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="partner-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {status === 'success' ? (
            <FormSuccess via={result?.via} title="Demande de partenariat envoyée" onReset={reset} />
          ) : (
            <form className="iac-form" onSubmit={handleSubmit} noValidate>
              <Honeypot />
              <h3 className="partner-card__title">Formulaire de partenariat</h3>
              <div className="iac-form__row">
                <FormField label="Organisation" icon={LuBuilding2} autoComplete="organization" placeholder="Ex. Tech Solutions SA" {...field('organisation')} />
                <FormField label="Type d'organisation" as="select" options={orgTypes} {...field('orgType')} />
              </div>
              <div className="iac-form__row">
                <FormField label="Personne à contacter" icon={LuUser} autoComplete="name" {...field('contactName')} />
                <FormField label="Fonction" placeholder="Ex. Directeur général" {...field('role')} />
              </div>
              <div className="iac-form__row">
                <FormField label="E-mail" type="email" icon={LuMail} autoComplete="email" {...field('email')} />
                <FormField label="Téléphone" type="tel" icon={LuPhone} autoComplete="tel" placeholder="+237 6XX XX XX XX" {...field('phone')} />
              </div>
              <div className="iac-form__row">
                <FormField label="Ville / pays" icon={LuMapPin} placeholder="Ex. Douala, Cameroun" {...field('location')} />
                <FormField label="Site web ou page sociale" type="url" icon={LuGlobe} placeholder="https://…" {...field('website')} />
              </div>
              <ChoiceChips
                legend="Type de partenariat souhaité"
                name="types"
                options={partnershipTypes}
                value={values.types}
                onChange={setField}
              />
              <FormField
                label="Votre projet"
                as="textarea"
                placeholder="Objectifs, calendrier, contribution envisagée…"
                {...field('message')}
              />
              <ConsentField {...field('consent')} checked={values.consent} />
              {status === 'error' && <FormError />}
              <SubmitButton status={status}>Envoyer la demande</SubmitButton>
              <p className="iac-form__legend"><span className="form-field__req">*</span> Champs obligatoires</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerForm;

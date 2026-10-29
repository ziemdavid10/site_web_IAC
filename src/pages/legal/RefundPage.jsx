import {
  LuBadgeCheck, LuBrain, LuCalendarDays, LuClipboardList, LuFlame, LuHandshake, LuIdCard, LuLayers, LuListChecks, LuScale, LuWallet, LuZap,
} from 'react-icons/lu';
import LegalLayout from './LegalLayout';
const services = [
  {
    name: 'Adhésion annuelle',
    price: '10 000 FCFA / an',
    icon: LuIdCard,
    refundable: 'Non remboursable après activation',
    delay: '7 jours après paiement (si non activée)',
    color: '#312783',
  },
  {
    name: 'Formation Rapide (1 jour)',
    price: 'Sur devis',
    icon: LuZap,
    refundable: 'Remboursable sous conditions',
    delay: '48h avant la formation',
    color: '#0891b2',
  },
  {
    name: 'Formation Intensive (3 jours)',
    price: 'Sur devis',
    icon: LuFlame,
    refundable: 'Remboursable sous conditions',
    delay: '72h avant la formation',
    color: '#7c3aed',
  },
  {
    name: 'Formation Technique (1 mois)',
    price: 'Sur devis',
    icon: LuBrain,
    refundable: 'Remboursable partiellement',
    delay: '7 jours avant le début',
    color: '#f59e0b',
  },
  {
    name: 'Inscription JCIA',
    price: 'Variable selon édition',
    icon: LuCalendarDays,
    refundable: 'Remboursable sous conditions',
    delay: '14 jours avant l\'événement',
    color: '#10b981',
  },
];

const sections = [
  {
    id: 'engagement',
    icon: LuHandshake,
    title: 'Notre engagement',
    content: (
      <>
        <p>
          L'Intelligence Artificielle Cameroun (IAC) s'engage à offrir des services de qualité
          à ses membres, participants et partenaires. La présente politique de remboursement
          définit les conditions dans lesquelles un remboursement peut être accordé.
        </p>
        <div className="legal-highlight">
          Notre objectif est de traiter chaque demande de remboursement avec équité,
          transparence et dans les meilleurs délais.
        </div>
      </>
    ),
  },
  {
    id: 'services',
    icon: LuLayers,
    title: 'Conditions par type de service',
    content: (
      <div className="refund-services-grid">
        {services.map((s, i) => (
          <div key={i} className="refund-service-card" style={{ '--service-color': s.color }}>
            <div className="refund-service-card__head">
              <s.icon aria-hidden />
              <div>
                <h4>{s.name}</h4>
                <span className="price">{s.price}</span>
              </div>
            </div>
            <div className="refund-service-card__body">
              <p><strong>Remboursement :</strong> {s.refundable}</p>
              <p><strong>Délai limite :</strong> {s.delay}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'conditions',
    icon: LuListChecks,
    title: 'Conditions générales de remboursement',
    content: (
      <>
        <p>Un remboursement peut être accordé dans les cas suivants :</p>
        <ul>
          <li><strong>Annulation par l'IAC :</strong> remboursement intégral dans un délai de 15 jours ouvrables</li>
          <li><strong>Report d'événement :</strong> choix entre report ou remboursement intégral</li>
          <li><strong>Annulation par le participant :</strong> selon les délais définis par type de service</li>
          <li><strong>Force majeure :</strong> remboursement intégral sur présentation de justificatifs</li>
          <li><strong>Erreur de paiement :</strong> remboursement intégral dans les 5 jours ouvrables</li>
        </ul>
        <p>Les remboursements ne sont <strong>pas accordés</strong> dans les cas suivants :</p>
        <ul>
          <li>Demande effectuée après les délais limites définis</li>
          <li>Service déjà consommé ou partiellement utilisé (sauf cas de force majeure)</li>
          <li>Adhésion annuelle après activation des avantages membres</li>
          <li>Absence non justifiée à une formation ou un événement</li>
        </ul>
      </>
    ),
  },
  {
    id: 'procedure',
    icon: LuClipboardList,
    title: 'Procédure de demande',
    content: (
      <>
        <p>Pour soumettre une demande de remboursement :</p>
        <ol>
          <li>Envoyez un email à <strong>contact@iacameroun.com</strong> avec l'objet <em>"Demande de remboursement"</em></li>
          <li>Indiquez votre nom complet, le service concerné et la date de paiement</li>
          <li>Joignez votre reçu de paiement ou preuve de transaction</li>
          <li>Précisez le motif de votre demande</li>
        </ol>
        <div className="legal-highlight">
          Nous accusons réception de votre demande dans les 48 heures et vous communiquons
          notre décision dans un délai de 7 jours ouvrables.
        </div>
      </>
    ),
  },
  {
    id: 'modalites',
    icon: LuWallet,
    title: 'Modalités de remboursement',
    content: (
      <>
        <p>Les remboursements sont effectués selon les modalités suivantes :</p>
        <ul>
          <li><strong>Virement bancaire :</strong> délai de 10 à 15 jours ouvrables</li>
          <li><strong>Mobile Money (MTN/Orange) :</strong> délai de 3 à 5 jours ouvrables</li>
          <li><strong>Avoir valable 12 mois :</strong> proposé en alternative au remboursement</li>
        </ul>
        <p>
          Le remboursement est effectué via le même moyen de paiement utilisé lors de la transaction initiale,
          sauf accord contraire entre les parties.
        </p>
      </>
    ),
  },
  {
    id: 'litiges',
    icon: LuScale,
    title: 'Litiges et recours',
    content: (
      <>
        <p>
          En cas de désaccord sur une décision de remboursement, vous pouvez adresser
          une réclamation écrite à la direction de l'IAC à l'adresse :
        </p>
        <div className="legal-contact-box">
          <h4>Direction IAC — Service Réclamations</h4>
          <p>
            Rue de l'aéroport, Immeuble Lucas Mill, Yaoundé, Cameroun<br />
            Email : <a href="mailto:contact@iacameroun.com">contact@iacameroun.com</a><br />
            Téléphone : <a href="tel:+237699089937">+237 699 089 937</a>
          </p>
        </div>
        <p>
          Nous nous engageons à traiter toute réclamation dans un délai de 15 jours ouvrables.
          En l'absence de résolution amiable, les litiges seront soumis aux juridictions compétentes de Yaoundé.
        </p>
      </>
    ),
  },
];

const RefundPage = () => (
  <LegalLayout
    tag="Politique de remboursement"
    tagIcon={LuWallet}
    title="Conditions de remboursement"
    intro="Transparence et équité dans le traitement de vos demandes de remboursement pour tous les services proposés par l'Intelligence Artificielle Cameroun."
    meta={[{ icon: LuBadgeCheck, text: 'Engagement de transparence IAC' }]}
    sections={sections}
  />
);

export default RefundPage;

import { LuCalendarClock, LuRadio, LuCircleCheck } from 'react-icons/lu';
import useCountdown from '../../hooks/useCountdown';
import { NEXT_JCIA } from '../../config/site';
import './Countdown.scss';

const pad = (n) => String(n).padStart(2, '0');

const Countdown = () => {
  const { phase, days, hours, minutes, seconds } = useCountdown(NEXT_JCIA.start, NEXT_JCIA.end);

  if (phase !== 'upcoming') {
    const live = phase === 'live';
    return (
      <div className={`countdown countdown--${phase}`} role="status">
        <span className="countdown__label">
          {live ? <LuRadio aria-hidden /> : <LuCircleCheck aria-hidden />}
          JCIA {NEXT_JCIA.year}
        </span>
        <strong className="countdown__state">{live ? 'En ce moment !' : 'Édition terminée'}</strong>
      </div>
    );
  }

  const units = [
    { label: 'Jours', value: days },
    { label: 'Heures', value: pad(hours) },
    { label: 'Min', value: pad(minutes) },
    { label: 'Sec', value: pad(seconds) },
  ];

  return (
    <div
      className="countdown"
      role="timer"
      aria-label={`JCIA ${NEXT_JCIA.year} dans ${days} jours et ${hours} heures`}
    >
      <span className="countdown__label">
        <LuCalendarClock aria-hidden />
        JCIA {NEXT_JCIA.year} — {NEXT_JCIA.shortDate}
      </span>
      <div className="countdown__units" aria-hidden>
        {units.map((u) => (
          <div key={u.label} className="countdown__unit">
            <strong>{u.value}</strong>
            <span>{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

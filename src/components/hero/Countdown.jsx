import { useState, useEffect } from 'react';
import './Countdown.scss';

const TARGET = new Date('2027-04-20T08:00:00');

const pad = (n) => String(n).padStart(2, '0');

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = TARGET - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: pad(timeLeft.hours) },
    { label: 'Min', value: pad(timeLeft.minutes) },
    { label: 'Sec', value: pad(timeLeft.seconds) },
  ];

  return (
    <div className="countdown">
      <span className="countdown__label">
        <span className="material-symbols-rounded">event_upcoming</span>
        JCIA 2027 — 20 Avril
      </span>
      <div className="countdown__units">
        {units.map((u, i) => (
          <div key={i} className="countdown__unit">
            <strong>{u.value}</strong>
            <span>{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

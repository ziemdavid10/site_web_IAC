import { useEffect, useState } from 'react';

const compute = (start, end) => {
  const now = Date.now();
  if (now >= end) return { phase: 'ended', days: 0, hours: 0, minutes: 0, seconds: 0 };
  if (now >= start) return { phase: 'live', days: 0, hours: 0, minutes: 0, seconds: 0 };
  const diff = start - now;
  return {
    phase: 'upcoming',
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

// Décompte jusqu'à une date (ISO avec fuseau). Renvoie aussi la phase :
// 'upcoming' (avant), 'live' (pendant l'événement), 'ended' (après).
const useCountdown = (startIso, endIso) => {
  const start = new Date(startIso).getTime();
  const end = new Date(endIso || startIso).getTime();
  const [state, setState] = useState(() => compute(start, end));

  useEffect(() => {
    setState(compute(start, end));
    const timer = setInterval(() => setState(compute(start, end)), 1000);
    return () => clearInterval(timer);
  }, [start, end]);

  return state;
};

export default useCountdown;

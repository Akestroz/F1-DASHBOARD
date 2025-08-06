import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [nextRace, setNextRace] = useState({
    name: "Monza Grand Prix",
    date: new Date("2025-09-15T14:00:00")
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextRace.date.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextRace]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card mb-6"
    >
      <h3 className="text-2xl font-bold text-gradient mb-4">NEXT RACE COUNTDOWN</h3>
      <h4 className="text-xl text-white/80 mb-4">{nextRace.name}</h4>
      
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div 
            key={unit}
            whileHover={{ scale: 1.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-neonRed">{value}</div>
            <div className="text-sm text-white/60 uppercase">{unit}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Countdown;

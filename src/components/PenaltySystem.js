import React from 'react';
import { motion } from 'framer-motion';

const PenaltySystem = () => {
  const penalties = [
    {
      type: "Time Penalty",
      description: "+5s or +10s added to final race time",
      severity: "Minor",
      color: "text-yellow-400",
      icon: "⏱️"
    },
    {
      type: "Drive Through",
      description: "Must drive through pit lane without stopping",
      severity: "Moderate",
      color: "text-orange-400",
      icon: "🚗"
    },
    {
      type: "Stop and Go",
      description: "Must stop in pit lane for 10 seconds then resume",
      severity: "Serious",
      color: "text-red-400",
      icon: "🛑"
    },
    {
      type: "Grid Penalty",
      description: "Drops positions on next race starting grid",
      severity: "Serious",
      color: "text-red-400",
      icon: "📉"
    },
    {
      type: "Disqualification",
      description: "Removed from race results for major infractions",
      severity: "Severe",
      color: "text-red-600",
      icon: "❌"
    },
    {
      type: "License Points",
      description: "12 points in 12 months = 1 race ban",
      severity: "Cumulative",
      color: "text-purple-400",
      icon: "📋"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card mb-6"
    >
      <h3 className="text-2xl font-bold text-gradient mb-4">F1 PENALTY SYSTEM</h3>
      
      <div className="space-y-3">
        {penalties.map((penalty, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 border border-white/10 rounded-lg p-4 hover:border-neonRed/30 transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{penalty.icon}</span>
              <div className="flex-1">
                <h4 className={`font-bold text-lg ${penalty.color}`}>{penalty.type}</h4>
                <p className="text-white/80 text-sm">{penalty.description}</p>
                <span className={`inline-block mt-1 px-2 py-1 rounded text-xs font-bold ${
                  penalty.severity === 'Minor' ? 'bg-yellow-500/20 text-yellow-400' :
                  penalty.severity === 'Moderate' ? 'bg-orange-500/20 text-orange-400' :
                  penalty.severity === 'Serious' ? 'bg-red-500/20 text-red-400' :
                  penalty.severity === 'Severe' ? 'bg-red-600/20 text-red-600' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {penalty.severity}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PenaltySystem;

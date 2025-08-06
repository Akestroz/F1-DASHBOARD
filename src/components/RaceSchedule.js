import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RaceSchedule = () => {
  const [races, setRaces] = useState([
    {
      id: 1,
      name: "Monza Grand Prix",
      track: "Autodromo Nazionale Monza",
      country: "Italy",
      date: "2025-09-15",
      time: "14:00",
      type: "Grand Prix",
      status: "Upcoming"
    },
    {
      id: 2,
      name: "Singapore Grand Prix",
      track: "Marina Bay Street Circuit",
      country: "Singapore",
      date: "2025-09-29",
      time: "20:00",
      type: "Night Race",
      status: "Upcoming"
    },
    {
      id: 3,
      name: "Japanese Grand Prix",
      track: "Suzuka International Racing Course",
      country: "Japan",
      date: "2025-10-06",
      time: "13:00",
      type: "Grand Prix",
      status: "Upcoming"
    }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (race) => {
    setEditingId(race.id);
    setEditForm(race);
  };

  const handleSave = (id) => {
    setRaces(races.map(race => 
      race.id === id ? { ...editForm } : race
    ));
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card mb-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gradient">RACE SCHEDULE</h3>
        <span className="text-sm text-white/60">{races.length} Races</span>
      </div>

      <div className="space-y-4">
        {races.map((race) => (
          <motion.div
            key={race.id}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 border border-white/10 rounded-lg p-4 hover:border-neonRed/50 transition-all"
          >
            {editingId === race.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={editForm.name || ''}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white"
                  placeholder="Race Name"
                />
                <input
                  type="text"
                  name="track"
                  value={editForm.track || ''}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white"
                  placeholder="Track Name"
                />
                <input
                  type="date"
                  name="date"
                  value={editForm.date || ''}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSave(race.id)}
                    className="px-3 py-1 bg-neonGreen text-black rounded text-sm font-bold"
                  >
                    SAVE
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-3 py-1 bg-gray-600 text-white rounded text-sm font-bold"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{race.name}</h4>
                  <p className="text-neonBlue text-sm">{race.track}</p>
                  <p className="text-white/70 text-sm">{race.country}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-neonGreen text-sm font-bold">{race.date}</span>
                    <span className="text-white/60 text-sm">{race.time}</span>
                    <span className="px-2 py-1 bg-neonPurple/30 text-neonPurple text-xs rounded">
                      {race.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-2 py-1 text-xs rounded ${
                    race.status === 'Upcoming' ? 'bg-green-500/30 text-green-400' : 
                    race.status === 'Live' ? 'bg-red-500/30 text-red-400' : 
                    'bg-gray-500/30 text-gray-400'
                  }`}>
                    {race.status}
                  </span>
                  <button
                    onClick={() => handleEdit(race)}
                    className="px-2 py-1 bg-neonRed/30 text-neonRed text-xs rounded hover:bg-neonRed/50"
                  >
                    EDIT
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RaceSchedule;

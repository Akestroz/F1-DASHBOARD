import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PointsTable = () => {
  const [drivers, setDrivers] = useState([
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing", points: 220, wins: 8, podiums: 12 },
    { id: 2, name: "Charles Leclerc", team: "Ferrari", points: 190, wins: 5, podiums: 10 },
    { id: 3, name: "Lewis Hamilton", team: "Mercedes", points: 175, wins: 4, podiums: 9 },
    { id: 4, name: "Sergio Pérez", team: "Red Bull Racing", points: 165, wins: 2, podiums: 8 },
    { id: 5, name: "Carlos Sainz", team: "Ferrari", points: 150, wins: 1, podiums: 7 },
    { id: 6, name: "George Russell", team: "Mercedes", points: 135, wins: 1, podiums: 6 },
    { id: 7, name: "Lando Norris", team: "McLaren", points: 120, wins: 0, podiums: 5 },
    { id: 8, name: "Oscar Piastri", team: "McLaren", points: 105, wins: 0, podiums: 4 },
    { id: 9, name: "Fernando Alonso", team: "Aston Martin", points: 90, wins: 0, podiums: 3 },
    { id: 10, name: "Lance Stroll", team: "Aston Martin", points: 75, wins: 0, podiums: 2 }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (driver) => {
    setEditingId(driver.id);
    setEditForm(driver);
  };

  const handleSave = (id) => {
    setDrivers(drivers.map(driver => 
      driver.id === id ? { ...editForm } : driver
    ));
    setEditingId(null);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card mb-6"
    >
      <h3 className="text-2xl font-bold text-gradient mb-4">DRIVER STANDINGS</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/20">
              <th className="p-3 text-sm font-bold text-white/80">Pos</th>
              <th className="p-3 text-sm font-bold text-white/80">Driver</th>
              <th className="p-3 text-sm font-bold text-white/80">Team</th>
              <th className="p-3 text-sm font-bold text-white/80">Points</th>
              <th className="p-3 text-sm font-bold text-white/80">Wins</th>
              <th className="p-3 text-sm font-bold text-white/80">Podiums</th>
              <th className="p-3 text-sm font-bold text-white/80">Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <motion.tr
                key={driver.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/10 hover:bg-white/5 transition-colors"
              >
                <td className="p-3 text-white font-bold">{index + 1}</td>
                <td className="p-3">
                  {editingId === driver.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editForm.name || ''}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded px-2 py-1 text-white text-sm"
                    />
                  ) : (
                    <span className="font-bold text-white">{driver.name}</span>
                  )}
                </td>
                <td className="p-3">
                  {editingId === driver.id ? (
                    <input
                      type="text"
                      name="team"
                      value={editForm.team || ''}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded px-2 py-1 text-white text-sm"
                    />
                  ) : (
                    <span className="text-white/80 text-sm">{driver.team}</span>
                  )}
                </td>
                <td className="p-3">
                  {editingId === driver.id ? (
                    <input
                      type="number"
                      name="points"
                      value={editForm.points || 0}
                      onChange={handleChange}
                      className="w-20 bg-black/50 border border-white/20 rounded px-2 py-1 text-white text-sm"
                    />
                  ) : (
                    <span className="font-bold text-neonRed">{driver.points}</span>
                  )}
                </td>
                <td className="p-3">
                  {editingId === driver.id ? (
                    <input
                      type="number"
                      name="wins"
                      value={editForm.wins || 0}
                      onChange={handleChange}
                      className="w-16 bg-black/50 border border-white/20 rounded px-2 py-1 text-white text-sm"
                    />
                  ) : (
                    <span className="text-white/80">{driver.wins}</span>
                  )}
                </td>
                <td className="p-3">
                  {editingId === driver.id ? (
                    <input
                      type="number"
                      name="podiums"
                      value={editForm.podiums || 0}
                      onChange={handleChange}
                      className="w-16 bg-black/50 border border-white/20 rounded px-2 py-1 text-white text-sm"
                    />
                  ) : (
                    <span className="text-white/80">{driver.podiums}</span>
                  )}
                </td>
                <td className="p-3">
                  {editingId === driver.id ? (
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleSave(driver.id)}
                        className="px-2 py-1 bg-green-500 text-white rounded text-xs"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-2 py-1 bg-gray-500 text-white rounded text-xs"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEdit(driver)}
                      className="px-2 py-1 bg-neonBlue/30 text-neonBlue rounded text-xs hover:bg-neonBlue/50"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PointsTable;

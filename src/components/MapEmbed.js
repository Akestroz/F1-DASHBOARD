import React from 'react';
import { motion } from 'framer-motion';

const MapEmbed = () => {
  const tracks = [
    {
      name: "Monza Circuit",
      location: "Monza, Italy",
      coordinates: "45.6208,9.2895",
      embedUrl: "https://maps.google.com/maps?q=Monza%20Circuit&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      name: "Singapore Street Circuit",
      location: "Marina Bay, Singapore",
      coordinates: "1.2966,103.8547",
      embedUrl: "https://maps.google.com/maps?q=Singapore%20Street%20Circuit&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      name: "Suzuka Circuit",
      location: "Suzuka, Japan",
      coordinates: "34.8431,136.5406",
      embedUrl: "https://maps.google.com/maps?q=Suzuka%20Circuit&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card mb-6"
    >
      <h3 className="text-2xl font-bold text-gradient mb-4">RACE TRACKS</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tracks.map((track, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 border border-white/10 rounded-lg overflow-hidden"
          >
            <div className="aspect-video">
              <iframe
                src={track.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={track.name}
              ></iframe>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-white">{track.name}</h4>
              <p className="text-sm text-white/60">{track.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MapEmbed;

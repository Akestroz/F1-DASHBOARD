import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    location: "Monza, Italy",
    temperature: 28,
    condition: "Sunny",
    humidity: 65,
    windSpeed: 12,
    icon: "☀️"
  });

  const [loading, setLoading] = useState(false);

  // Simulate weather updates
  useEffect(() => {
    const interval = setInterval(() => {
      const conditions = [
        { condition: "Sunny", icon: "☀️", temp: 28 },
        { condition: "Partly Cloudy", icon: "⛅", temp: 25 },
        { condition: "Cloudy", icon: "☁️", temp: 22 },
        { condition: "Light Rain", icon: "🌦️", temp: 20 }
      ];
      
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      setWeather(prev => ({
        ...prev,
        temperature: randomCondition.temp + Math.floor(Math.random() * 5),
        condition: randomCondition.condition,
        icon: randomCondition.icon,
        humidity: 60 + Math.floor(Math.random() * 20),
        windSpeed: 8 + Math.floor(Math.random() * 10)
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card mb-6"
    >
      <h3 className="text-xl font-bold text-gradient mb-4">RACE WEATHER</h3>
      
      <div className="text-center">
        <div className="text-4xl mb-2">{weather.icon}</div>
        <h4 className="text-lg font-bold text-white">{weather.location}</h4>
        <div className="text-3xl font-bold text-neonBlue my-2">{weather.temperature}°C</div>
        <p className="text-white/80 mb-4">{weather.condition}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-white/60">Humidity</span>
            <div className="text-neonRed font-bold">{weather.humidity}%</div>
          </div>
          <div>
            <span className="text-white/60">Wind</span>
            <div className="text-neonRed font-bold">{weather.windSpeed} km/h</div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-black/20 rounded-lg">
          <p className="text-xs text-white/60">
            Weather updates every 30 seconds
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherWidget;

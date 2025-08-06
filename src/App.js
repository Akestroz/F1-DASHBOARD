import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RaceSchedule from './components/RaceSchedule';
import PointsTable from './components/PointsTable';
import MapEmbed from './components/MapEmbed';
import PenaltySystem from './components/PenaltySystem';
import ThemeSwitcher from './components/ThemeSwitcher';
import Countdown from './components/Countdown';
import WeatherWidget from './components/WeatherWidget';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('f1-theme') || 'dark';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'neon' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('f1-theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === 'neon' ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-red-900' : 'bg-darkBg'}`}>
      <Header theme={theme} />
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Countdown />
            <RaceSchedule />
            <PointsTable />
          </div>
          
          <div className="space-y-6">
            <WeatherWidget />
            <MapEmbed />
            <PenaltySystem />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

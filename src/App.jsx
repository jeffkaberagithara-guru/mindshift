import { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CrisisButton from './components/CrisisButton.jsx';

import Home from './pages/Home.jsx';
import LearnMore from './pages/LearnMore.jsx';
import Resources from './pages/Resources.jsx';
import FindTherapist from './pages/FindTherapist.jsx';
import Crisis from './pages/Crisis.jsx';
import MoodTracker from './components/MoodTracker.jsx';
import AssessmentTool from './components/AssessmentTool.jsx';
import UserSettings from './pages/UserSettings.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.jsx';
import './App.css';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useLocalStorage('theme', 'light');

  return (

    <div className="min-h-dvh flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/find-therapist" element={<FindTherapist />} />
          <Route path="/crisis" element={<Crisis />} />
          <Route path="/tools/mood-tracker" element={<MoodTracker />} />
          <Route path="/tools/assessment" element={<AssessmentTool />} />
          <Route path="/settings" element={<UserSettings />} />
        </Routes>
      </main>
      <Footer />
      <CrisisButton />
    </div>

  );
}

export default App;
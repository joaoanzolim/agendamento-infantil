import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About/AboutSection';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import EventsPreview from './components/EventsPreview';
import Footer from './components/Footer';
import BookingModal from './components/Booking/BookingModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <AboutSection />
        <Benefits />
        <HowItWorks />
        <EventsPreview />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

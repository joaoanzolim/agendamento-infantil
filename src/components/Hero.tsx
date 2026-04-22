import { motion } from 'framer-motion';
import { CalendarHeart, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge" style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--text-dark)' }}>
            <Sparkles size={16} /> Uma casa de brincar!
          </span>
          <h1 className="hero-title">
            A sua casa de brincar com <span className="highlight">afeto</span> em Bauru
          </h1>
          <p className="hero-subtitle">
            Para crianças de <strong>0 a 5 anos</strong>. Um ambiente pensado para a felicidade do seu bebê e a sua tranquilidade. Flexível, seguro e afetuoso.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary btn-large" onClick={onOpenBooking}>
              <CalendarHeart size={20} />
              Agendar agora
            </button>
            <button className="btn-secondary btn-large">
              Ver como funciona
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-illustration">
            <div className="image-frame">
              <img src={`${import.meta.env.BASE_URL}hero.jpg.jpeg`} alt="Crianças brincando juntas no quintal" className="hero-img" />
            </div>
            <div className="floating-card card-1">
              <span>⭐ Ambiente Acolhedor</span>
            </div>
            <div className="floating-card card-2">
              <span>🛡️ Desenvolvimento e Afeto</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

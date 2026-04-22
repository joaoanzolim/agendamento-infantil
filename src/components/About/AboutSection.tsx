import { motion } from 'framer-motion';
import ValuesCards from './ValuesCards';
import Mission from './Mission';
import Vision from './Vision';
import CoreValues from './CoreValues';

export default function AboutSection() {
  return (
    <section id="quem-somos" className="about-section">
      <div className="about-container">
        
        {/* Header (introdução) */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-title">Quem somos</h2>
          <h3 className="about-subtitle">Um espaço criado para celebrar a infância com afeto, segurança e liberdade</h3>
        </motion.div>

        {/* Bloco Institucional */}
        <motion.div 
          className="about-institutional"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Somos um espaço criado para celebrar a infância com afeto.
            Acreditamos que cada criança precisa de liberdade para brincar, respeito ao seu tempo, imaginação e acolhimento para se desenvolver de forma natural e segura.
          </p>
        </motion.div>

        {/* Cards de Valores */}
        <ValuesCards />

        {/* Missão, Visão e Valores Core */}
        <div className="about-bottom-grid">
          <Mission />
          <Vision />
          <CoreValues />
        </div>

      </div>
    </section>
  );
}

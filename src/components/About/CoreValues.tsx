import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const valuesList = [
  "Afeto nas relações",
  "Respeito ao tempo da criança",
  "Brincar livre e significativo",
  "Segurança e cuidado"
];

export default function CoreValues() {
  return (
    <motion.div 
      className="about-block core-values-block"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h4 className="block-title">Nossos valores</h4>
      <ul className="core-values-list">
        {valuesList.map((val, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (idx * 0.1) }}
          >
            <div className="check-icon">
              <Check size={16} strokeWidth={3} />
            </div>
            <span>{val}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

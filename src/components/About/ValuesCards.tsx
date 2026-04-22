import { motion } from 'framer-motion';
import { Palmtree, Hourglass, Lightbulb, HeartHandshake } from 'lucide-react';

const cards = [
  {
    icon: <Palmtree size={32} />,
    title: 'Liberdade para brincar',
    color: 'var(--color-green)'
  },
  {
    icon: <Hourglass size={32} />,
    title: 'Respeito ao tempo da criança',
    color: 'var(--color-blue)'
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Imaginação',
    color: 'var(--color-yellow)'
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Acolhimento',
    color: 'var(--color-pink)'
  }
];

export default function ValuesCards() {
  return (
    <div className="values-cards-container">
      {cards.map((card, index) => (
        <motion.div 
          key={index}
          className="value-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="value-card-icon" style={{ backgroundColor: card.color }}>
            {card.icon}
          </div>
          <h4>{card.title}</h4>
        </motion.div>
      ))}
    </div>
  );
}

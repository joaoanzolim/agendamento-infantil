import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <motion.div 
      className="about-block vision-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h4 className="block-title">Nossa visão</h4>
      <p>
        Ser um espaço referência em brincar com afeto, onde cada criança seja vista em sua individualidade, desenvolvendo suas habilidades de forma natural e segura.
      </p>
    </motion.div>
  );
}

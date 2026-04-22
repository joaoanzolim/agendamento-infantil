import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <motion.div 
      className="about-block mission-block"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="block-title">Nossa missão</h4>
      <p>
        Criar um ambiente seguro e acolhedor onde as crianças possam explorar, imaginar, se expressar e desenvolver habilidades emocionais e sociais.
      </p>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { Sparkles, Heart, Smile } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="loading-icon-wrapper star"
        >
          <Sparkles size={48} />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="loading-icon-wrapper baby"
        >
          <Heart size={48} />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="loading-icon-wrapper brick"
        >
          <Smile size={48} />
        </motion.div>
      </div>
      <h2 className="loading-text">Preparando um espaço mágico...</h2>
    </div>
  );
}

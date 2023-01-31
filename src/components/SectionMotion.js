import { motion } from 'framer-motion';

const SectionMotion = ({ children, className }) => {
  
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionMotion;

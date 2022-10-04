import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HomeContainer, Glitch } from './home.styles';
const Home = () => {
  useEffect(() => {
    document.title = 'Metablvk | Home';
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HomeContainer>
        <Glitch data-title="Hi, I'm Jordan.">Hi, I'm Jordan.</Glitch>
        <p>Creative fullstack developer.</p>
      </HomeContainer>
    </motion.div>
  );
};

export default Home;

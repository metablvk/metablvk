import { motion } from 'framer-motion';
import { HomeContainer } from './home.styles';
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HomeContainer>
        {/* <Glitch data-title="Hi, I'm Jordan.">Hi, I'm Jordan.</Glitch> */}
        <h1>Hi, I'm Jordan.</h1>
        <p>Creative fullstack developer.</p>
        <div className='icons'></div>
      </HomeContainer>
    </motion.div>
  );
};

export default Home;

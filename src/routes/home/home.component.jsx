import { useEffect } from 'react';
import { HomeContainer, Glitch } from './home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <Glitch data-title="Hi, I'm Jordan.">Hi, I'm Jordan.</Glitch>
      <p>Creative fullstack developer.</p>
    </HomeContainer>
  );
};

export default Home;

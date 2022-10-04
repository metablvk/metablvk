import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import {
  AboutContainer,
  SocialIcons,
  MainSkills,
  ContactButton,
} from './about.styles';

const About = () => {
  useEffect(() => {
    document.title = 'Metablvk | About';
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutContainer>
        <section>
          <h1>
            about(<span>metablvk</span>)
          </h1>
          <p>Fullstack developer based in Edmonton who loves to code.</p>
          <SocialIcons>
            <li>
              <a
                href='https://github.com/metablvk'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/metablvk'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </SocialIcons>
        </section>
        <MainSkills>
          <h2>Main Skills</h2>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>react</li>
            <li>firebase</li>
            <li>postgresql</li>
            <li>python</li>
          </ul>
        </MainSkills>
        <section>
          <h2>About me</h2>
          <p>
            hi, I'm Jordan. I'm a web developer based in Edmonton, Alberta who
            enjoys coding, but also likes hanging out with friends or playing
            games to pass time.
          </p>
          <a href='mailto:metablvk@gmail.com?subject=Get%20in%20touch'>
            <ContactButton>Get in Touch</ContactButton>
          </a>
        </section>
      </AboutContainer>
    </motion.div>
  );
};

export default About;

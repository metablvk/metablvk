import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContainer, ProjectGrid, Img } from './works.styles';
import editorImg from './../../assets/img/text-editor.png';

const Works = () => {
  useEffect(() => {
    document.title = 'Metablvk | Works';
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PortfolioContainer>
        <section>
          <h1>
            works(<span>metablvk</span>)
          </h1>
          <p>Some of my latest projects.</p>
        </section>
        <ProjectGrid>
          <div>
            <a
              href='https://metablvk.github.io/simple-editor/'
              target='_blank'
              rel='noreferrer'
            >
              <Img src={editorImg} alt='' />
            </a>
            <ul>
              <li>
                <a
                  href='https://metablvk.github.io/simple-editor/'
                  target='_blank'
                  rel='noreferrer'
                >
                  site
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/metablvk/simple-editor'
                  target='_blank'
                  rel='noreferrer'
                >
                  github
                </a>
              </li>
            </ul>
            <p>a simple text editor built using javascript.</p>
          </div>
        </ProjectGrid>
      </PortfolioContainer>
    </motion.div>
  );
};

export default Works;

import { PortfolioContainer, ProjectGrid } from './works.styles';
import { motion } from 'framer-motion';
const Works = () => {
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
            <p>Project 1</p>
          </div>
          <div>
            <p>Project 2</p>
          </div>
          <div>
            <p>Project 3</p>
          </div>
          <div>
            <p>Project 4</p>
          </div>
          <div>
            <p>Project 5</p>
          </div>
        </ProjectGrid>
      </PortfolioContainer>
    </motion.div>
  );
};

export default Works;

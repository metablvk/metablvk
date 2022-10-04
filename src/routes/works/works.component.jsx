import { PortfolioContainer, ProjectGrid } from './works.styles';
const Works = () => {
  return (
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
  );
};

export default Works;

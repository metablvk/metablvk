import styled from 'styled-components';

import { Container } from '../../components/container/container.component';

export const PortfolioContainer = styled(Container)`
  margin-top: 2.4rem;
  h1 {
    font-size: 4rem;
    font-weight: 600;
    span {
      color: #6428e3;
    }
  }
  p {
    font-size: 1.8rem;
    max-width: 60rem;
    color: #808080;
  }
  section {
    margin-bottom: 2.4rem;
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4.883rem;
    }
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.4rem;
  div {
    width: 100%;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #6428e3;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

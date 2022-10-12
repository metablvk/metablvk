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

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.4rem;
  margin-top: 4rem;
  div {
    width: 100%;
    height: 24rem;
    ul {
      margin-top: 1.2rem;
      font-size: 2rem;
      display: flex;
      justify-content: flex-end;
    }
    li {
      margin-right: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.2rem;
    }
    li:last-of-type {
      margin-right: 0;
    }
    li a {
      color: #808080;
      transition: 0.3s;
    }
    li a:hover {
      color: #6428e3;
    }
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

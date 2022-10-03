import styled from 'styled-components';
import { Container } from '../../components/container/container.component';

export const MainSkills = styled.section`
  h2 {
    margin-bottom: 2.4rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin-right: 1.2rem;
    font-size: 1.8rem;
    background: #6428e3;
    padding: 1.2rem 2rem;
  }
`;

export const ContactButton = styled.button`
  background: none;
  border: 0.1rem solid #6428e3;
  color: #fff;
  font-size: 2rem;
  padding: 0.8rem 2rem;
  margin-top: 2.4rem;
  transition: 0.3s;
  cursor: pointer;
  &&:hover {
    background: #6428e3;
  }
`;

export const AboutContainer = styled(Container)`
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

export const SocialIcons = styled.ul`
  display: flex;
  margin-top: 2.4rem;
  li {
    margin-right: 2rem;
    a {
      font-size: 3.5rem;
      color: #fff;
      transition: 0.3s;
    }
    a:hover {
      color: #6428e3;
    }
  }
`;

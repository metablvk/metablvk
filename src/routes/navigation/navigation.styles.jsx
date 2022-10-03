import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../components/container/container.component';

export const NavigationContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  @media screen and (min-width: 800px) {
    margin: 2.4rem auto;
  }
`;

export const NavLink = styled(Link)``;

export const LogoContainer = styled.div`
  ${NavLink} {
    color: #fff;
    font-size: 1.8rem;
  }
  span {
    font-weight: 600;
    color: #6428e3;
  }
`;

export const NavItem = styled.li`
  padding-right: 2rem;
  margin-top: 2.4rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  position: absolute;
  left: 0;
  max-height: 0;
  overflow: hidden;
  height: calc(100vh - 6.8rem);
  top: 6.3rem;
  background: rgba(14, 18, 18, 0.8);
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 2;
  transition: 0.4s ease-in-out;
  ${({ menuState }) =>
    menuState
      ? `
    max-height: 100vh;
    padding-bottom: 3rem;
  `
      : ''}
  ${({ location }) =>
    location === '/'
      ? `
        ${NavItem}:nth-child(1) {
          ${NavLink} {
            color: #fff;
          }
          ${NavLink}::before, ${NavLink}::after {
            color: #6428e3;
          }
          
        }
      `
      : location === '/about'
      ? `
        ${NavItem}:nth-child(2) {
          ${NavLink} {
            color: #fff;
          }
          ${NavLink}::before, ${NavLink}::after {
            color: #6428e3;
          }
          
        }
      `
      : ''}
  ${NavLink}::before {
    content: '.';
  }
  ${NavLink}::after {
    content: '()';
  }
  ${NavLink} {
    letter-spacing: 0.3rem;
    font-size: 3rem;
    color: #808080;
  }

  @media screen and (min-width: 800px) {
    overflow: visible;
    height: initial;
    max-height: initial;
    flex-direction: row;
    width: initial;
    position: static;

    ${NavItem} {
      padding: 0;
      margin: 0;
      margin-right: 1.2rem;
    }
    ${NavItem}:last-of-type {
      margin-right: 0;
    }
    ${NavLink} {
      font-size: 2rem;
    }
  }
`;

export const Bar = styled.span`
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  margin-bottom: 0.7rem;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Kebab = styled.button`
  background: none;
  border: none;
  display: block;
  cursor: pointer;
  ${({ menuState }) =>
    menuState
      ? `
        ${Bar}:nth-child(2) {
          opacity: 0;
        }
        ${Bar}:nth-child(1) {
          -webkit-transform: translateY(8px) rotate(45deg);
          transform: translateY(11px) rotate(45deg);
        }
        ${Bar}:nth-child(3) {
          -webkit-transform: translateY(-8px) rotate(-45deg);
          transform: translateY(-11px) rotate(-45deg);
        }
      `
      : ''}
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

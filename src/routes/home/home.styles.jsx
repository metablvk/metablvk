import styled from 'styled-components';
import { Container } from '../../components/container/container.component';

export const HomeContainer = styled(Container)`
  margin-top: 6rem;

  text-align: center;

  h1 {
    font-weight: 600;
  }
  p {
    color: #808080;
    margin-top: 2rem;
    font-size: 2rem;
  }
`;

// const random = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const createFrames = () => {
//   console.log('in create frames');
//   let styles = '';
//   for (let i = 0; i < 20; i += 1) {
//     styles += `${5 * i}% { clip: rect(${random(i, 100)}px, 9999px, ${random(
//       i,
//       100
//     )}px, 0) }`;
//   }
//   return styles;
// };
export const Glitch = styled.h1`
  color: #fff;
  position: relative;
  font-size: 4.8rem;

  @media screen and (min-width: 800px) {
    font-size: 8rem;
  }

  &::before,
  &::after {
    content: attr(data-title);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #0e1212;
    color: #fff;
  }
  &::before {
    left: 0.8rem;
    text-shadow: 2px 0 #808080;
    animation: glitch 3s infinite linear;
  }

  &::after {
    left: 0.8rem;
    text-shadow: -2px 0 #6428e3;
    animation: glitch 2s infinite linear;
  }

  @keyframes glitch {
    0% {
      clip: rect(76px, 9999px, 70px, 0);
    }
    5% {
      clip: rect(60px, 9999px, 44px, 0);
    }
    10% {
      clip: rect(25px, 9999px, 37px, 0);
    }
    15% {
      clip: rect(28px, 9999px, 65px, 0);
    }
    20% {
      clip: rect(91px, 9999px, 14px, 0);
    }
    25% {
      clip: rect(12px, 9999px, 64px, 0);
    }
    30% {
      clip: rect(39px, 9999px, 72px, 0);
    }
    35% {
      clip: rect(30px, 9999px, 65px, 0);
    }
    40% {
      clip: rect(20px, 9999px, 77px, 0);
    }
    45% {
      clip: rect(49px, 9999px, 92px, 0);
    }
    50% {
      clip: rect(46px, 9999px, 78px, 0);
    }
    55% {
      clip: rect(58px, 9999px, 45px, 0);
    }
    60% {
      clip: rect(22px, 9999px, 37px, 0);
    }
    65% {
      clip: rect(71px, 9999px, 18px, 0);
    }
    70% {
      clip: rect(48px, 9999px, 57px, 0);
    }
    75% {
      clip: rect(84px, 9999px, 59px, 0);
    }
    80% {
      clip: rect(94px, 9999px, 73px, 0);
    }
    85% {
      clip: rect(53px, 9999px, 89px, 0);
    }
    90% {
      clip: rect(20px, 9999px, 66px, 0);
    }
    95% {
      clip: rect(100px, 9999px, 25px, 0);
    }
  }
`;

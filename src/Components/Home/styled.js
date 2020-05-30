import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations';

const flashAnimation = keyframes`${flash}`;
const StyledHome = styled.div`
  height: 100vh;
  main {
    display: flex;
    flex-direction: ${({ width }) => (width < 1050 ? 'column' : 'row')};
    justify-content: center;
    align-items: center;
    padding-top: ${({ width }) => (width < 1050 ? '100px' : '10px')};
    height: 90%;
    #homeIcon {
      align-self: flex-end;
      animation: 5s ${flashAnimation} alternate infinite;
    }
    #intro {
      width: ${({ width }) => (width < 1050 ? '100%' : '350px')};
      margin-left: ${({ width }) => (width > 1050 ? '50px' : '0')};
      margin-top: ${({ width }) => (width < 1050 ? '50px' : '0')};
      color: var(--text-icon);
      position: relative;
      #knowledge {
        width: 70%;
        margin: 10px 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
      }
      h2 {
        font-size: 1.6em;
        font-weight: 300;
        margin-bottom: 15px;
        color: var(--text-icon-shadow);
      }
      p {
        font-size: 1.1em;
      }
      ::before {
        content: '';
        position: absolute;
        visibility: ${({ width }) => (width < 1050 ? 'hidden' : 'visible')};
        background-image: url('img/Vector-3.svg');
        background-size: contain;
        background-repeat: no-repeat;
        top: -75px;
        left: -160px;
        z-index: -1;
        width: 145%;
        height: 175%;
      }
    }
    #profile {
      position: relative;
      img {
        border-radius: 50%;
        width: 350px;
      }
      a {
        position: absolute;
        left: 13%;
        bottom: 0;
        padding: 15px 100px;
        border-radius: 5px;
        color: var(--text-icon);
        text-decoration: none;
        background-color: var(--highlight-color);
        transition: 0.2s;
        :hover {
          background-color: var(--highlight-shadow-color);
        }
      }
    }
  }
`;

export default StyledHome;

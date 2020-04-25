import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations';

const flashAnimation = keyframes`${flash}`;
const StyledHome = styled.div`
  height: 100vh;
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 90%;
    #homeIcon {
      align-self: flex-end;
      animation: 5s ${flashAnimation} alternate infinite;
    }
    #intro {
      width: 350px;
      margin-left: 50px;
      color: var(--text-icon);
      position: relative;
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
        background-image: url('img/Vector-3.svg');
        background-size: contain;
        background-repeat: no-repeat;
        top: -95px;
        left: -110px;
        z-index: -1;
        width: 175%;
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

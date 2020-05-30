import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  visibility: ${({ width }) => (width < 1050 ? 'hidden' : 'visible')};
  top: 0;
  z-index: 10;
  right: 0;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  a {
    color: var(--text-icon);
    position: relative;
    padding: 15px 50px;
    text-align: center;
    width: 150px;
    display: block;
    background-color: var(--highlight-color);
    text-decoration: none;
    transition: 0.2s;
    :hover {
      background-color: var(--highlight-shadow-color);
    }
    :nth-child(2) {
      width: 100px;
    }
    :nth-child(3) {
      width: 50px;
    }
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background-image: url('/img/Vector.svg');
    background-size: cover;
    width: 120%;
    height: 140%;
  }
`;

export default StyledNav;

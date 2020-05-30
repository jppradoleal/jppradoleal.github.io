import styled from 'styled-components';

const StyledPortfolio = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .Slider {
    width: ${({ width }) => (width > 1050 ? '55%' : '100%')};
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
    .slick-dots {
      li button::before {
        color: var(--highlight-color);
      }
    }
    .slick-arrow {
      ::before {
        color: var(--highlight-color);
      }
    }
  }
`;

export default StyledPortfolio;

import styled from 'styled-components';

const StyledPortfolio = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .Slider {
    width: ${({ width }) => (width > 1050 ? '75%' : '100%')};
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

    .repo {
      .img-container {
        ::after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 100%;
        }
      }
      color: white;
      position: relative;
      .description {
        position: absolute;
        bottom: 16px;
        left: 16px;
        h2 {
          text-transform: capitalize;
          a {
            text-decoration: none;
            color: var(--highlight-color);
          }
        }
        .languages {
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }
`;

export default StyledPortfolio;

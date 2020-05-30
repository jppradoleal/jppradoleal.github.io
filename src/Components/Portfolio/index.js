import React from 'react';
import Slider from 'react-slick';
import useWindowSize from '@react-hook/window-size';
import StyledPortfolio from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import porfolioImageOne from '../../img/portfolio1.png';

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [width] = useWindowSize();
  return (
    <StyledPortfolio id="Portfolio" width={width}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings} className="Slider">
        <div>
          <img alt="" src={porfolioImageOne} width={650} height={365} />
        </div>
        <div>
          <img alt="" src={porfolioImageOne} width={650} height={365} />
        </div>
        <div>
          <img alt="" src={porfolioImageOne} width={650} height={365} />
        </div>
        <div>
          <img alt="" src={porfolioImageOne} width={650} height={365} />
        </div>
        <div>
          <img alt="" src={porfolioImageOne} width={650} height={365} />
        </div>
      </Slider>
    </StyledPortfolio>
  );
};
export default Portfolio;

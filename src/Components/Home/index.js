import React from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import StyledHome from './styled';

const Home = () => (
  <StyledHome>
    <main>
      <div id="profile">
        <img className="profilePicture" alt="" src="img/profile.jpg" />
        <a href="#contact">Hire me!</a>
      </div>
      <TiArrowSortedDown size={32} id="homeIcon" color="white" />
      <div id="intro">
        <h1>João Pedro Prado</h1>
        <h2>Back and front-end developer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          quidem, laboriosam explicabo unde quaerat quasi dicta ipsa vel,
          voluptatum impedit fugiat optio rem quo quisquam! Totam eaque
          doloremque praesentium vel nulla distinctio atque aspernatur nobis
          quibusdam ex incidunt, odit, sint soluta modi repellendus id. Vero
          iste dolorem atque tempore odit!
        </p>
      </div>
    </main>
  </StyledHome>
);

export default Home;

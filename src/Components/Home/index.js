import React from 'react';
import { useWindowSize } from '@react-hook/window-size';
import { TiArrowSortedDown } from 'react-icons/ti';
import { FaHtml5, FaCss3Alt, FaNode, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import StyledHome from './styled';

const Home = () => {
  const [width] = useWindowSize();
  return (
    <StyledHome width={width}>
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
          <div id="knowledge" aria-label="Knowledge">
            <FaHtml5 color="white" size={32} title="HTML5" />
            <FaCss3Alt color="white" size={32} title="CSS3" />
            <IoLogoJavascript color="white" size={32} title="JS" />
            <FaNode color="white" size={32} title="NodeJS" />
            <FaPython color="white" size={32} title="Python" />
            <FaReact color="white" size={32} title="ReactJS" />
          </div>
        </div>
      </main>
    </StyledHome>
  );
};

export default Home;

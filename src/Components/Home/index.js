import React from 'react';
import { useWindowSize } from '@react-hook/window-size';
import { TiArrowSortedDown } from 'react-icons/ti';
import { FaHtml5, FaCss3Alt, FaNode, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import StyledHome from './styled';

const Home = () => {
  const [width] = useWindowSize();
  return (
    <StyledHome width={width} id="Home">
      <main>
        <div id="profile">
          <img className="profilePicture" alt="" src="img/profile.jpg" />
          <a href="#Contact">Hire me!</a>
        </div>
        <TiArrowSortedDown size={32} id="homeIcon" color="white" />
        <div id="intro">
          <h1>João Pedro Prado</h1>
          <h2>Back and front-end developer</h2>
          <p>
          Estou cursando Ciências da Computação na Universade Cruzeiro do Sul. 
          Sou destacado por desenvolver soluções inovadoras para aumentar a produtividade do serviço, 
          oferecendo diversas alternativas às empresas. Me dedico ao Web Design, focando na MERN Stack. 
          Meu github <br /> possui projetos de Design, Game Dev <br />e em outras diversas áreas nas quais<br />me aventuro. 
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

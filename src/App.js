import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import GlobalStyle from './styles/global';

const App = () => (
  <div>
    <GlobalStyle />
    <Navbar />
    <Home />
    <Portfolio />
  </div>
);

export default App;

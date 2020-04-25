import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import GlobalStyle from './styles/global';

const App = () => (
  <div>
    <GlobalStyle />
    <Navbar />
    <Home />
  </div>
);

export default App;

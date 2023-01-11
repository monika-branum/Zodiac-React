import './App.css';
import React from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Main className="main" />
      <Footer className="footer" />
    </div>
  );
}

export default App;

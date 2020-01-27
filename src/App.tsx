import React from 'react';
import './App.css';
import Header from './Header/Header';

import pages from './Pages';
import Footer from './Footer/Footer';
import Content from './Content/Content';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header pages={pages}/>
      <Content pages={pages} />
      <Footer />
    </div>
  );
}

export default App;

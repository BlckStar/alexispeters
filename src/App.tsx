import React from 'react';
import './App.css';
import Header from './Header/Header';

import pages from './Pages';
import Footer from './Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header pages={pages}/>
      <Footer />
    </div>
  );
}

export default App;

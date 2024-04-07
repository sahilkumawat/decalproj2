import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Videos from './Videos';
import Members from './Members';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleClick = (page) => {
    console.log('State updated:', page);
    setCurrentPage(page);
  };
  

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Members':
        return <Members />;
      case 'Videos':
        return <Videos />;
      default:
        return null;
    }
  };

  return (
    <div>
      {currentPage === 'home' && <Home setCurrentPage={handleClick} />}
      {renderPage()}
    </div>
  );
}

export default App;


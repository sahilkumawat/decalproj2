import React from 'react';
import './Home.css'; // Import CSS file for styling
import NoteworthyPNG from './noteworthy.png';

function Home({ setCurrentPage }) {
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <header>
        <img src={NoteworthyPNG} alt="Noteworthy A Cappella Logo" className="logo" />
        <nav>
          <ul>
            <li><button onClick={() => handleClick('About')}>About</button></li>
            <li><button onClick={() => handleClick('Videos')}>Videos</button></li>
            <li><button onClick={() => handleClick('Members')}>Members</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className="group-name">Noteworthy A Cappella</h1>
        {/* Other content */}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default Home;

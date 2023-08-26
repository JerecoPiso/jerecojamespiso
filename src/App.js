import './App.css';
//import components alphabetical
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolios from './components/Portfolios';
import Skills from './components/Skills';
import React, { useEffect, useState } from 'react';
import { Bounce } from "react-awesome-reveal";
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  const [isPageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const handlePageLoad = () => {
      if (document.readyState === 'complete') {
        setPageLoaded(true);
      }
    };
    window.addEventListener('load', handlePageLoad());
    return () => {
      window.removeEventListener('load', handlePageLoad());
    };
  }, []);
  return (
    <main>
      {isPageLoaded ? (
        <div>
          <Home />
          <Aboutme />
          <Skills />
          <Portfolios />
          <Contact />
          <Footer />
        </div>
      ) : (
        <div className='absolute w-screen h-screen bg-gray-800 flex items-center justify-center'>
          
            <Bounce><FontAwesomeIcon icon={solidIcons.faLaptopCode} size="2x" color='#F1F6F9' /></Bounce>

        </div>
      )}

    </main>
  );
}
export default App;

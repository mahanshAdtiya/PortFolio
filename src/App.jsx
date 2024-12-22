import React , {useState,useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';

import {FloatingObjects, Navbar, Hero, About, Experience, Works, Approach, Contact} from './components';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    },3000);
  }, []);

  return (

    <BrowserRouter>
      <FloatingObjects className="z-0" />

      <div className='overflow-scroll'>
        <Navbar /> 
        <Hero />
        <About />
        <Experience />
        <Works/>
        <Approach />
        <Contact />
      </div>

    </BrowserRouter>
  );
}

export default App; 
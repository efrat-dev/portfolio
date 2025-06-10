import { BrowserRouter } from "react-router-dom";

import {Home, About, Contact, Experience, Navbar, Tech,  Works, Achievements, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Home />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Achievements/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

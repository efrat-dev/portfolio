import { BrowserRouter } from "react-router-dom";

import {Home, About, Contact, Experience, Navbar, Tech,  Works, Certifications, StarsCanvas, Footer, OpenSourceWorks, DataScience, Blog} from "./components";

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
        <Blog/>
        <OpenSourceWorks/>
        <DataScience/>
        <Certifications/>
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

import { BrowserRouter,Route,Routes } from "react-router-dom";

import { About, Contact, Experience, Academics, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Social from "./components/Social";
// import Academics from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Academics />
        <Tech />
        <Works />
        <Social />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

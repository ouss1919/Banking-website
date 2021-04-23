import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Hero from './Components/HeroSection/Hero';
import { homeObjOne, homeObjThree, homeObjTwo } from './Components/InfoSection/Data';
import Info from './Components/InfoSection/Info';
import Services from './Components/Services/Services';
import Home from './Pages/Home';
function App() {
  return (
    <Router>
      <Home />
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Services />
      <Info {...homeObjThree}/>
    </Router>
  );
}

export default App;

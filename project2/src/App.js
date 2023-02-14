
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import  Navbar  from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';
import Hero from './components/Hero';

function App() {
  return (
    <>
  <Navbar/>
  <Hero />
  <About/>
  <Services/>
  <Tours/>
  <Footer/>
    </>
  );
}

export default App;

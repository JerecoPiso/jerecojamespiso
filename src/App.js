import './App.css';
//import components alphabetical
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolios from './components/Portfolios';
import Skills from './components/Skills';
function App() {
  return (
    <main>
      <Home/>
      <Aboutme />
      <Skills/>
      <Portfolios/>
      <Contact/>
      <Footer/>
    </main>
  );
}
export default App;

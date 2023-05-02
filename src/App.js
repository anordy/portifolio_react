import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Portifolio from './component/Portifolio';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Portifolio></Portifolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

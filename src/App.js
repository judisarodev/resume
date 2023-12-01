import './App.css';
import { Menu } from './components/menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './views/home/Home';
import { About } from './views/about/About';
import { Work } from './views/work/Work';
import { Contact } from './views/contact/Contact';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

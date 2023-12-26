import './App.css';
import { Menu } from './components/menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './views/home/Home';
import { About } from './views/about/About';
import { Work } from './views/work/Work';
import { Footer } from './components/footer/Footer';
import { GoUpButton } from './components/go_up_button/GoUpButton';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Home />
      <Work />
      <About />
      <Footer />
      <GoUpButton />
    </div>
  );
}

export default App;

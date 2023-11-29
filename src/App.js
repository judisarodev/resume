import './App.css';
import { Menu } from './components/menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './views/home/Home';
import { About } from './views/about/About';

function App() {
  return (
    <div className='App'>
      <h1>Resume</h1>
      <Menu />
      <Home />
      <About />
    </div>
  );
}

export default App;

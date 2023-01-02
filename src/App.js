import Navbar from './components/NavBar';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

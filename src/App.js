import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Navbar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:id" element={<Details />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

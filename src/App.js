import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Prendas from './pages/Prendas';
import Categorias from './pages/Categorias';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prendas" element={<Prendas />} />
          <Route path="/categorias" element={<Categorias />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

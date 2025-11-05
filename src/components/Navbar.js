import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#282c34', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '10px', color: '#fff' }}>Home</Link>
      <Link to="/prendas" style={{ marginRight: '10px', color: '#fff' }}>Prendas</Link>
      <Link to="/categorias" style={{ color: '#fff' }}>Categorías</Link>
    </nav>
  );
}

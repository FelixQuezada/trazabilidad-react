import { useEffect, useState } from 'react';
import { getCategorias } from '../api';

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias().then(data => setCategorias(data));
  }, []);

  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categorias.map((c, index) => (
          <li key={index}>{c.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { getPrendas } from '../api';

export default function Prendas() {
  const [prendas, setPrendas] = useState([]);

  useEffect(() => {
    getPrendas().then(data => setPrendas(data));
  }, []);

  return (
    <div>
      <h2>Lista de Prendas</h2>
      <ul>
        {prendas.map((p, index) => (
          <li key={index}>{p.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

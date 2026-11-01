import { useState, useEffect } from 'react';
import ModuloTarjeta from './componentes/ModuloTarjeta';

const MODULOS_INICIALES = [
  { id: 1, nombre: 'Nucleo de Plasma', estado: 'ESTABLE' },
  { id: 2, nombre: 'Bomba de Refrigeracion', estado: 'ESTABLE' },
];

export default function App() {
  const [modulos, setModulos] = useState(MODULOS_INICIALES);
  const [temperatura, setTemperatura] = useState(307);

  useEffect(() => {
    const timer = setInterval(() => {
      setTemperatura((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const totalCriticos = modulos.filter((m) => m.estado === 'CRITICO').length;

  function cambiarEstado(id) {
    setModulos(
      modulos.map((m) =>
        m.id === id
          ? { ...m, estado: m.estado === 'ESTABLE' ? 'CRITICO' : 'ESTABLE' }
          : m
      )
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>⚛️ Monitor del Reactor</h1>
      <p>Temperatura: {temperatura} K</p>

      {totalCriticos > 0 && (
        <p style={{ color: 'red' }}>Alerta: Hay {totalCriticos} modulo(s) en critico</p>
      )}

      {modulos.map((m) => (
        <ModuloTarjeta
          key={m.id}
          nombre={m.nombre}
          estado={m.estado}
          onCambiar={() => cambiarEstado(m.id)}
        />
      ))}
    </div>
  );
}
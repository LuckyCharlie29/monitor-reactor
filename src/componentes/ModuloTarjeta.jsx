export default function ModuloTarjeta(props) {
  const esCritico = props.estado === 'CRITICO';

  return (
    <div style={{ border: esCritico ? '1px solid red' : '1px solid green', padding: '2px', margin: '2px' }}>
      <p>{props.nombre}</p>
      <p>{props.estado}</p>
      <button onClick={props.onCambiar}>
        Cambiar Estado
      </button>
    </div>
  );
}
import PropTypes from "prop-types";

function ModalDetalle({ ventanaActiva, setVentanaActiva }) {
  if (!ventanaActiva) return null;

  return (
    <div className="ventana" style={{ display: "block" }}>
      <div className="contenido">
        <button
          type="button"
          className="cerrar"
          onClick={() => setVentanaActiva(null)}
        >
          &times;
        </button>

        <div className="info">
          <img src={ventanaActiva.img} alt={ventanaActiva.nombre} />

          <div className="texto">
            <h1>{ventanaActiva.nombre}</h1>
            <p className="descripcion">{ventanaActiva.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalDetalle.propTypes = {
  ventanaActiva: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    img: PropTypes.string,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
  }),
  setVentanaActiva: PropTypes.func.isRequired,
};

ModalDetalle.defaultProps = {
  ventanaActiva: null,
};

export default ModalDetalle;
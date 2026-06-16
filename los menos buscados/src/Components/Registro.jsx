import PropTypes from "prop-types";

function Registro({
    registroCorreo,
    setRegistroCorreo,
    registroUsuario,
    setRegistroUsuario,
    registroContrasena,
    setRegistroContrasena,
    registrarse
}) {
    return (
        <>
        <h1 className="titulo2">REGISTRARSE</h1>
        <input type="email"
        placeholder="Correo" 
        value={registroCorreo} 
        onChange={(e) => setRegistroCorreo(e.target.value)}
         />
         <input type="text"
        placeholder="Usuario"
        value={registroUsuario}
        onChange={(e) => setRegistroUsuario(e.target.value)}
         />
         <input type="password"
        placeholder="Contraseña"
        value={registroContrasena}
        onChange={(e) => setRegistroContrasena(e.target.value)}
         />
         <button className="btn" onClick={registrarse}>Registrarse
            </button>  
        </>
      );
    }

Registro.propTypes = {
  registroCorreo: PropTypes.string,
  setRegistroCorreo: PropTypes.func.isRequired,
  registroUsuario: PropTypes.string,
  setRegistroUsuario: PropTypes.func.isRequired,
  registroContrasena: PropTypes.string,
  setRegistroContrasena: PropTypes.func.isRequired,
  registrarse: PropTypes.func.isRequired,
};

Registro.defaultProps = {
  registroCorreo: "",
  registroUsuario: "",
  registroContrasena: "",
};

export default Registro;

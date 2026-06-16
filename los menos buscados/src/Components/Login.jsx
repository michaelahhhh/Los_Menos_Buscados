import PropTypes from "prop-types";

function Login({
    loginUsuario,
    setLoginUsuario,
    loginContrasena,
    setLoginContrasena,
    iniciarSesion,
}) {
  return (
    <>
      <h1 className="titulo2">INICIAR SESIÓN</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={loginUsuario}
        onChange={(e) => setLoginUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={loginContrasena}
        onChange={(e) => setLoginContrasena(e.target.value)}
      />
      
        <button
         className="btn-login"
         type="button"
         onClick={iniciarSesion}
        >
         Entrar
         </button>
      </>
  );
}

Login.propTypes = {
  loginUsuario : PropTypes.string,
  setLoginUsuario: PropTypes.func.isRequired,
  loginContrasena: PropTypes.string,
  setLoginContrasena: PropTypes.func.isRequired,
  iniciarSesion: PropTypes.func.isRequired,
};

Login.defaultProps = {
  loginUsuario: "",
  loginContrasena : "",
};

export default Login;
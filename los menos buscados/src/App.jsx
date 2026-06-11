import { useState } from "react";
import "./App.css";

function App() {
  const [loginUsuario, setLoginUsuario] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registroCorreo, setRegistroCorreo] = useState("");
  const [registroUsuario, setRegistroUsuario] = useState("");
  const [registroPassword, setRegistroPassword] = useState("");

  const [logueado, setLogueado] = useState(false);
  const [ventanaActiva, setVentanaActiva] = useState(null);

  const registrarse = () => {
    localStorage.setItem("correo", registroCorreo);
    localStorage.setItem("usuario", registroUsuario);
    localStorage.setItem("password", registroPassword);

    alert("Usuario registrado");
  };

  const iniciarSesion = () => {
    const usuarioGuardado = localStorage.getItem("usuario");
    const passwordGuardada = localStorage.getItem("password");

    if (
      loginUsuario === usuarioGuardado &&
      loginPassword === passwordGuardada
    ) {
      alert("Inicio de sesión correcto");
      setLogueado(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const datos = [
  {
    id: 1,
    img: "/imagenes/1.jpg",
    nombre: "ARON ROA",
    descripcion:
      "peligroso Inalador de azucar y azucar morena a este peligroso criminalse le a visto contrabandeando yogu yogus afuera de un instituto con altos niveles de azucar se recompensara con 3 yogu yogus al que pueda capturarlo"
  },

  {
    id: 2,
    img: "/imagenes/2.jpg",
    nombre: "ESTEBAN IBAÑEZ",
    descripcion:
      "peligroso ludopata de zapatos este criminal pasa todo el dia apostando zapatos y acumulando deudas aquel que logre capturarlo recibira todas las deudas que a acumulado con los años pedimos su cooperacion"
  },

  {
    id: 3,
    img: "/imagenes/3.jpg",
    nombre: "BENJAMIN FUENTES",
    descripcion:
      "los policias que vinieron de intercambio desde EEUU Nos han informado de este carterista que a estado robando una gran cantidad de celulares al que logre capturarlo se le entregara los celulares que alla robado"
  },

  {
    id: 4,
    img: "/imagenes/4.jpg",
    nombre: "MIGUEL ESCOBAR",
    descripcion:
      "este peligroso traficante de helados el cual a intentado venderle helado en estado puro a niños del la zona central de chile se el considera unos de los peores criminales del estado al que logre capturarlo se le recompensara con 2 uvas y 1 mandarina que estaba en mi refrigerador"
  },

  {
    id: 5,
    img: "/imagenes/7.png",
    nombre: "HECTOR CAMPOS",
    descripcion:
      "este criminal, acosador, machista, gunter y regetonero se le a visto decirle chancha a cada mujer que este ve ya tiene varias ordenes de restriccion por eso la recompensa por capturarlo es una chancha"
  },

  {
    id: 6,
    img: "/imagenes/8.png",
    nombre: "VÍCTOR VÁSQUEZ",
    descripcion:
      "este peligroso criminal es el lider espiritual del ku klux klan y ademas un profesor en un instituto el cual a llevado hasta la desesperacion mas grandes a sus alumnos con preguntas tan difisiles que ni siquiera el propio Albert Einstein podria responder la recompensa por capturarlo es pasar el curso"
  },

  {
    id: 7,
    img: "/imagenes/5.jpg",
    nombre: "NICOLAS MADURO",
    descripcion:
      "este criminal llamado nicolas maduro es el presidente mas corrupto de la historia de venezuela el cual posee la habilidad de multiplicar los penes ya fue capturado por las fuerzas especiales de EEUU actualmente se encuentra en una prision de maxima seguridad la recompensa por capturarlo fue venezuela"
  },

  {
    id: 8,
    img: "/imagenes/6.jpg",
    nombre: "CHUCK NORRIS",
    descripcion:
      "no se quien a ya sido el estupido que haya puesto a chuck norris en esta lista pero lo unico que puedo decir es que pobre del pendejo que intente ir a capturarlo la recompensa por esa ofensa es la posinilidade de no morir asi sin mas ahora repasemos algunas hasañas de nuestra deidad chuck norris. En una ocasión, la muerte tuvo una experiencia cercana a Chuck Norris, Chuck Norris se pasó todos los Metal Slug con una sola moneda de 1 centavo, Las lágrimas de Chuck Norris curan el cáncer. El problema es que él nunca llora, Chuck Norris ha contado hasta el número infinito. Dos veces"
  }
];

  return (
    <>
      {!logueado && (
        <div className="login-contenedor">
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
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <button className="btn" onClick={iniciarSesion}>
            Ingresar
          </button>

          <h1 className="titulo2">REGISTRO</h1>

          <input
            type="email"
            placeholder="Correo"
            value={registroCorreo}
            onChange={(e) => setRegistroCorreo(e.target.value)}
          />

          <input
            type="text"
            placeholder="Usuario"
            value={registroUsuario}
            onChange={(e) => setRegistroUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={registroPassword}
            onChange={(e) => setRegistroPassword(e.target.value)}
          />

          <button className="btn" onClick={registrarse}>
            Registrarse
          </button>
        </div>
      )}

      {logueado && (
        <div>
          <header>
            <h1 className="titulo2">CARTELES DE SE BUSCA</h1>
          </header>

          <div className="hola">
            {datos.slice(0, 4).map((persona) => (
              <img
                key={persona.id}
                src={persona.img}
                alt={persona.nombre}
                onClick={() => setVentanaActiva(persona)}
              />
            ))}
          </div>

          <div className="hola">
            {datos.slice(4, 8).map((persona) => (
              <img
                key={persona.id}
                src={persona.img}
                alt={persona.nombre}
                onClick={() => setVentanaActiva(persona)}
              />
            ))}
          </div>
        </div>
      )}

      {ventanaActiva && (
        <div
          className="ventana"
          style={{ display: "block" }}
        >
          <div className="contenido">
            <span
              className="cerrar"
              onClick={() => setVentanaActiva(null)}
            >
              &times;
            </span>

            <div className="info">
              <img
                src={ventanaActiva.img}
                alt={ventanaActiva.nombre}
              />

              <div className="texto">
                <h1>{ventanaActiva.nombre}</h1>

                <p className="descripcion">
                  {ventanaActiva.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
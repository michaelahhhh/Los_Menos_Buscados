import { useState } from "react";
import "./App.css";

import Login from "./Components/Login";
import Registro from "./Components/Registro";
import ModalDetalle from "./Components/ventana";

function App() {
  const [loginUsuario, setLoginUsuario] = useState("");
  const [loginContrasena, setLoginContrasena] = useState("");
  const [registroCorreo, setRegistroCorreo] = useState("");
  const [registroUsuario, setRegistroUsuario] = useState("");
  const [registroContrasena, setRegistroContrasena] = useState("");
  const [logueado, setLogueado] = useState(false);
  const [ventanaActiva, setVentanaActiva] = useState(null);

  const registrarse = () => {
    localStorage.setItem("correo", registroCorreo);
    localStorage.setItem("usuario", registroUsuario);
    localStorage.setItem("password", registroContrasena);
    alert("Usuario registrado");
  };

  const iniciarSesion = () => {
    const usuarioGuardado = localStorage.getItem("usuario");
    const passwordGuardada = localStorage.getItem("password");

    if (loginUsuario === usuarioGuardado && loginContrasena === passwordGuardada) {
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
      "Peligroso inhalador de azúcar y azúcar morena. A este peligroso criminal se le ha visto contrabandeando Yogu Yogu afuera de un instituto, con altos niveles de azúcar. Se recompensará con 3 Yogu Yogu al que pueda capturarlo.",
  },
  {
    id: 2,
    img: "/imagenes/2.jpg",
    nombre: "ESTEBAN IBAÑEZ",
    descripcion:
      "Peligroso ludópata de zapatos. Este criminal pasa todo el día apostando zapatos y acumulando deudas. Aquel que logre capturarlo recibirá todas las deudas que ha acumulado con los años. Pedimos su cooperación.",
  },
  {
    id: 3,
    img: "/imagenes/3.jpg",
    nombre: "BENJAMIN FUENTES",
    descripcion:
      "Los policías que vinieron de intercambio desde EE. UU. nos han informado de este carterista, que ha estado robando una gran cantidad de celulares. Al que logre capturarlo se le entregarán los celulares que haya robado.",
  },
  {
    id: 4,
    img: "/imagenes/4.jpg",
    nombre: "MIGUEL ESCOBAR",
    descripcion:
      "Este peligroso traficante de helados ha intentado vender helado en estado puro a niños de la zona central de Chile. Se le considera uno de los peores criminales del Estado. Al que logre capturarlo se le recompensará con 2 uvas y 1 mandarina que estaban en mi refrigerador.",
  },
  {
    id: 5,
    img: "/imagenes/7.png",
    nombre: "HECTOR CAMPOS",
    descripcion:
      "Este criminal, acosador, machista, gunter y reguetonero, ha sido visto diciéndole 'chancha' a cada mujer que ve. Ya tiene varias órdenes de restricción. Por eso, la recompensa por capturarlo es una chancha.",
  },
  {
    id: 6,
    img: "/imagenes/8.png",
    nombre: "VÍCTOR VÁSQUEZ",
    descripcion:
      "Este peligroso criminal es el líder espiritual del Ku Klux Klan y, además, un profesor en un instituto, el cual ha llevado a la desesperación más grande a sus alumnos con preguntas tan difíciles que ni siquiera el propio Albert Einstein podría responder. La recompensa por capturarlo es pasar el curso.",
  },
  {
    id: 7,
    img: "/imagenes/5.jpg",
    nombre: "NICOLAS MADURO",
    descripcion:
      "Este criminal llamado Nicolás Maduro es el presidente más corrupto de la historia de Venezuela, el cual posee la habilidad de multiplicar los penes. Ya fue capturado por las fuerzas especiales de EE. UU. Actualmente se encuentra en una prisión de máxima seguridad. La recompensa por capturarlo fue Venezuela.",
  },
  {
    id: 8,
    img: "/imagenes/6.jpg",
    nombre: "CHUCK NORRIS",
    descripcion:
      "No sé quién ha sido el estúpido que puso a Chuck Norris en esta lista, pero lo único que puedo decir es: pobre del pendejo que intente ir a capturarlo. La recompensa por esa ofensa es la posibilidad de no morir. Así, sin más, ahora repasemos algunas hazañas de nuestra deidad Chuck Norris. En una ocasión, la muerte tuvo una experiencia cercana a Chuck Norris. Chuck Norris se pasó todos los Metal Slug con una sola moneda de 1 centavo. Las lágrimas de Chuck Norris curan el cáncer. El problema es que él nunca llora. Chuck Norris ha contado hasta el infinito. Dos veces.",
  },
];

  return (
    <>
      {!logueado && (
        <div className="login-contenedor">
          <Login
            loginUsuario={loginUsuario}
            setLoginUsuario={setLoginUsuario}
            loginContrasena={loginContrasena}
            setLoginContrasena={setLoginContrasena}
            iniciarSesion={iniciarSesion}
          />

          <Registro
            registroCorreo={registroCorreo}
            setRegistroCorreo={setRegistroCorreo}
            registroUsuario={registroUsuario}
            setRegistroUsuario={setRegistroUsuario}
            registroContrasena={registroContrasena}
            setRegistroContrasena={setRegistroContrasena}
            registrarse={registrarse}
          />
        </div>
      )}

      {logueado && (
        <div>
          <header>
            <h1 className="titulo2">CARTELES DE SE BUSCA</h1>
          </header>

          <div className="hola">
            {datos.slice(0, 4).map((persona) => (
              <button
                key={persona.id}
                type="button"
                className="persona-button"
                onClick={() => setVentanaActiva(persona)}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                <img src={persona.img} alt={persona.nombre} />
              </button>
            ))}
          </div>

          <div className="hola">
            {datos.slice(4, 8).map((persona) => (
              <button
                key={persona.id}
                type="button"
                className="persona-button"
                onClick={() => setVentanaActiva(persona)}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                <img src={persona.img} alt={persona.nombre} />
              </button>
            ))}
          </div>
        </div>
      )}

      <ModalDetalle
        ventanaActiva={ventanaActiva}
        setVentanaActiva={setVentanaActiva}
      />
    </>
  );
}

export default App;

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
  const [pagina, setPagina] = useState(0);

  const registrarse = () => {
      if (!registroCorreo.includes("@") || !registroCorreo.includes(".")) {
      alert("Ingrese un correo válido");
      return;
    }
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
    img: "../src/assets/imagenes/1.jpg",
    nombre: "ARON ROA",
    descripcion:
      "Peligroso inhalador de azúcar y azúcar morena. A este peligroso criminal se le ha visto contrabandeando Yogu Yogu afuera de un instituto, con altos niveles de azúcar. Se recompensará con 3 Yogu Yogu al que pueda capturarlo.",
  },
  {
    id: 2,
    img: "../src/assets/imagenes/2.jpg",
    nombre: "ESTEBAN IBAÑEZ",
    descripcion:
      "Peligroso ludópata de zapatos. Este criminal pasa todo el día apostando zapatos y acumulando deudas. Aquel que logre capturarlo recibirá todas las deudas que ha acumulado con los años. Pedimos su cooperación.",
  },
  {
    id: 3,
    img: "../src/assets/imagenes/3.jpg",
    nombre: "BENJAMIN FUENTES",
    descripcion:
      "Los policías que vinieron de intercambio desde EE. UU. nos han informado de este carterista, que ha estado robando una gran cantidad de celulares. Al que logre capturarlo se le entregarán los celulares que haya robado.",
  },
  {
    id: 4,
    img: "../src/assets/imagenes/4.jpg",
    nombre: "MIGUEL ESCOBAR",
    descripcion:
      "Este peligroso traficante de helados ha intentado vender helado en estado puro a niños de la zona central de Chile. Se le considera uno de los peores criminales del Estado. Al que logre capturarlo se le recompensará con 2 uvas y 1 mandarina que estaban en mi refrigerador.",
  },
  {
    id: 5,
    img: "../src/assets/imagenes/7.jpg",
    nombre: "HECTOR CAMPOS",
    descripcion:
      "se le a visto a este criminal suplicandole a una tal noelle se dise que incluso se le acabo el piso para arrastrarse y a empezado a construir su propio piso cuando se le le acabo a empezado a cavar por ende su recompensa aumenta a una migaja y 1 palo.",
  },
  {
    id: 6,
    img: "../src/assets/imagenes/8.png",
    nombre: "VÍCTOR VÁSQUEZ",
    descripcion:
      "Este peligroso criminal es el líder espiritual del Ku Klux Klan y, además, un profesor en un instituto, el cual ha llevado a la desesperación más grande a sus alumnos con preguntas tan difíciles que ni siquiera el propio Albert Einstein podría responder. La recompensa por capturarlo es pasar el curso.",
  },
  {
    id: 7,
    img: "../src/assets/imagenes/5.jpg",
    nombre: "NICOLAS MADURO",
    descripcion:
      "Este criminal llamado Nicolás Maduro es el presidente más corrupto de la historia de Venezuela, el cual posee la habilidad de multiplicar los penes. Ya fue capturado por las fuerzas especiales de EE. UU. Actualmente se encuentra en una prisión de máxima seguridad. La recompensa por capturarlo fue Venezuela.",
  },
  {
    id: 8,
    img: "../src/assets/imagenes/6.jpg",
    nombre: "CHUCK NORRIS",
    descripcion:
      "No sé quién ha sido el estúpido que puso a Chuck Norris en esta lista, pero lo único que puedo decir es: pobre del pendejo que intente ir a capturarlo. La recompensa por esa ofensa es la posibilidad de no morir. Así, sin más, ahora repasemos algunas hazañas de nuestra deidad Chuck Norris. En una ocasión, la muerte tuvo una experiencia cercana a Chuck Norris. Chuck Norris se pasó todos los Metal Slug con una sola moneda de 1 centavo. Las lágrimas de Chuck Norris curan el cáncer. El problema es que él nunca llora. Chuck Norris ha contado hasta el infinito. Dos veces.",
  },
  {
    id: 9,
    img: "../src/assets/imagenes/9.jpg",
    nombre: "ale",
    descripcion:
      "este peligroso regetonero ha sido visto conquistando a chicas mas jovenes que el gracias a sua apriencia de niño rata, su ultima victima fue una chica de primero medio el saliendo de la media, se le considera un peligro para la sociedad, por eso se le recompensa con una maruchan y 3 pesos para el que logre capturarlo.",
  },
   {
    id: 10,
    img: "../src/assets/imagenes/10.jpg",
    nombre: "ale",
    descripcion:
      "este peligroso regetonero ha sido visto conquistando a chicas mas jovenes que el gracias a sua apriencia de niño rata, su ultima victima fue una chica de primero medio el saliendo de la media, se le considera un peligro para la sociedad, por eso se le recompensa con una maruchan y 3 pesos para el que logre capturarlo.",
  },
   {
    id: 11,
    img: "../src/assets/imagenes/11.jpg",
    nombre: "ale",
    descripcion:
      "este peligroso regetonero ha sido visto conquistando a chicas mas jovenes que el gracias a sua apriencia de niño rata, su ultima victima fue una chica de primero medio el saliendo de la media, se le considera un peligro para la sociedad, por eso se le recompensa con una maruchan y 3 pesos para el que logre capturarlo.",
  },
  //profe luis iluminati 
   {
    id: 12,
    img: "../src/assets/imagenes/12.jpg",
    nombre: "ale",
    descripcion:
      "este peligroso regetonero ha sido visto conquistando a chicas mas jovenes que el gracias a sua apriencia de niño rata, su ultima victima fue una chica de primero medio el saliendo de la media, se le considera un peligro para la sociedad, por eso se le recompensa con una maruchan y 3 pesos para el que logre capturarlo.",
  },
];
  const cartelesPorPagina = 8;
  const cartelesMostrados = datos.slice
    (pagina * cartelesPorPagina, 
    (pagina + 1) * cartelesPorPagina);
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
          {cartelesMostrados.map((persona) => (
            <button
              key={persona.id}
              type="button"
              className="persona-button"
              onClick={() => setVentanaActiva(persona)}
              style={{ 
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer" 
              }}
            >
              <img src={persona.img} alt={persona.nombre} />
            </button>
          ))}
          </div>
          <div className="paginacion">
            <button onClick={() => setPagina(pagina - 1)} 
            disabled={pagina === 0}
            >Anterior</button>
            <button onClick={() => setPagina(pagina + 1)} 
            disabled={(pagina + 1) * cartelesPorPagina >= datos.length}
            >Siguiente</button>

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

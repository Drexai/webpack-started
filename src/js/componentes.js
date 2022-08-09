import "../CSS/components.css";
//import webpackLogo from "../assets/webpack-Logo.png";


export const saludo = (nombre) => {

    console.log ("Creando etiqueta H1");

    const h1 = document.createElement("h1");
    h1.innerText = `Hola, ${nombre} uwu`;
    document.body.append(h1)

    //Logo

      //  console.log(webpackLogo);
      //  const img = document.createElement("img");
      //  img.src = webpackLogo;
      //  document.body.append(img);
};

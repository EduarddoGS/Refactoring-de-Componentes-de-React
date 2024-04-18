import { useState, useEffect } from "react";
import NoteList from "./Notelist";
import NoteForm from "./Noteform";
import Titulo from "./Titulo";




const App = () => {

  const baseUrl = 'http://localhost:3001/api/notes'

  const ContainerStyle = {
    width: "100%",
    height: "100vh",
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #0000D0, #00FFFF)",

  };

  const ContainerStyle2 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fefefe",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)"
  };

  return (
    <div style={ContainerStyle}>
      <div style={ContainerStyle2}>
      <Titulo />
      <NoteList baseUrl={baseUrl} />
      <NoteForm baseUrl={baseUrl} />
      </div>
    </div>
  );
};

export default App;

/*En ambos casos de los componentes NoteList NoteForm se utilizan hooks
para manejar el estado y los efectos de manera eficientes
el codigo s emanejo asi para proporcionar una forma mas facil y limpia
de gestionar el estado y los efectos secundarios, usar hooks
garantiza que sean mas legibles y faciles de entender el estado de la svariables. */
import React, { useState, useEffect } from "react";
import axios from "axios";

const NoteForm = ({ baseUrl }) => {
    //esta variable hook es para manejar el estado del contenido de una nueva nota
    //de esta manera el componente controla el propio estado sin necesidad d euna clase externa
    const [newNote, setNewNote] = useState("");

    const FormStyle = {
        width: "100%",
        display: "flex",
        marginTop: "20px"
        
    };
    const inputStyle = {
        width: "70%",
        height: "45px",
        marginBottom: "10px",
        padding: "5px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
       
      };
    
      const buttonStyle = {
        width: "30%",
        height: "45px",
        backgroundColor: "#a5d1d1",
        color: "#0d4f4f",
        padding: "8px 16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        marginLeft: "10px",
        fontSize: "1.1rem"
    
      };
  
    //funcion para actualizar el estado de la variable newNote 
    //mediante target se actualiza cada que cambia el contenido del input
    //de esta manera se tiene el valor actual del input
    const handleNoteChange = (event) => {
      setNewNote(event.target.value);
    };
  
    //se envia el formulario y se crea un objeto d enota con el contenido ingresado en el input
    //con marca d eimportancia y la fecha actual
    const addNote = (event) => {
      event.preventDefault();
      const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        date: new Date().toISOString(),
      };
      
      //se usa axios para realizar una solicitud POST al servidor con el objeto ya creado
      //ya que se completo la solicitud se limpia el valor del input con una cadena vacia
      axios.post(baseUrl, noteObject).then((response) => {
        console.log(response.data);
        setNewNote("");
      });
    };
  
    return (

      <form style={FormStyle} onSubmit={addNote}>
        <input style={inputStyle} value={newNote} onChange={handleNoteChange} placeholder="Escribe tu nota" />
        <button style={buttonStyle} type="submit">Guardar</button>
      </form>
    );
  };

  export default NoteForm;
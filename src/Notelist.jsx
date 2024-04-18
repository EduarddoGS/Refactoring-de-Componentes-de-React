import React, { useState, useEffect } from "react";
import axios from "axios";

const NoteList = ({ baseUrl }) => {
    //esta variable hook se usa para manejar el estado de la lista de notas
    //se inicializa como una matriz vacia
    const [notes, setNotes] = useState([]);

    const boxStyle = {
        width: "100%",
        minWidth: "500px",
        marginTop: "20px",
        padding: "10px 0"
      };

      const boxStyle2 = {
        maxHeight: "500px",
       
      };

    const listStyle = {
        margin: "0",
        padding: "0",
        listStyleType: "none"
      };
    
      const listItemStyle = {
        marginBottom: "5px",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderRadius: "5px"
      };
  
    //con la funcion useEffect realizamos una solicitud ge tmediante axios
    //cuando el componente se llama obtiene la url por props entonces es cambiable

    useEffect(() => {
      axios.get(baseUrl).then((response) => {
        //cuando recibe la respuesta del servidor se actualiza el estado de la variable notes
        setNotes(response.data);
      });
    }, [baseUrl]);
  
    return (
    <div style={boxStyle}>
    <div style={boxStyle2}>
      <ul style={listStyle}>
        {notes.map((note) => (
          <li style={listItemStyle} key={note.id}>{note.content}</li>
        ))}
      </ul>
      </div>
      </div>
    );
  };

  export default NoteList;
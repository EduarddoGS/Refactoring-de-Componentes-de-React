import React
 from "react";
const Titulo = () => {

    const titleStyle = {
        textAlign: "center",
        color: "#0d4f4f",
        
      };

      const subtitleStyle = {
        textAlign: "center",
        color: "#147a7a",
        textDecoration: "underline"
        
      };
      
      const ContainerStyle = {
        width: "100%",
        backgroundColor: "#a5d1d1",
        borderRadius: "10px",
        padding: "20px",
      };

    return (
      <div style={ContainerStyle}>
        <h1 style={titleStyle}>Notas</h1>
        <p style={subtitleStyle} >Libreta para escribir notas</p>
        
      </div>
    );
  };
  
  export default Titulo;
  
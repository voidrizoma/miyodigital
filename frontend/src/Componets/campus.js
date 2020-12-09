import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Componets/Layout";
export default function App() {
  return (
    <div style={{background:"#ddd4fb"}}>
      <Layout>
        {" "}
        <section
          style={{ maxWidth: "1320px", margin: "0 auto", padding: "60px 80px", display:"flex", flexWrap:"wrap", height:"90vh"}}
        >
          <div style={{padding:"8%", color:"purple", fontSize:"30px", textAlign:"center", fontWeight:"800", width:"50%"}}>
            {" "}
            <Link to="/cce">Centro Cultural de España en México, CDMX</Link>
          </div>
          <div style={{padding:"8%", color:"purple", fontSize:"30px", textAlign:"center", fontWeight:"800", width:"50%"}}>
            <Link to="/cholula">Secretaría de Arte y Cultura, San Andrés Cholula, Puebla</Link>
          </div>
          <div style={{padding:"8%", color:"purple", fontSize:"30px", textAlign:"center", fontWeight:"800", width:"50%"}}>
            <Link to="/colmena">La Colmena. Centro de Tecnologías Creativas: Grace Quintanilla, Tlaxcala</Link>
          </div>
          <div style={{padding:"8%", color:"purple", fontSize:"30px", textAlign:"center", fontWeight:"800", width:"50%"}}>
            <Link to="/casa">Centro de la Artes de San Agustín Etla, Oaxaca</Link>
          </div>
        </section>
      </Layout>
    </div>
  );
}

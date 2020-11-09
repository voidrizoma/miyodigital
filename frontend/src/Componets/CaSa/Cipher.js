import React, { useEffect, useState } from "react";
import axios from "axios";
import { Title, ProjectContainer, Cipher } from "../../styles/styles"
const Campus = "http://localhost:8000/cipher/";


export default function App() {
  const [data, setData] = useState([]);

  const fecthData = () => {
    axios(`${Campus}`)
      .then((response) => {
        let CCE = response.data.filter((datos) => datos.campus === 3);

        setData(CCE);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fecthData();
  }, []);
  return (
    <div style={{backgroundColor:"#f7e8f7", padding:"5%"}}>
      <Title>¿Qué ṕasaría si yo gobernara Internet?</Title>
      {data.map((data, index) => (
        <ProjectContainer>
          <Cipher>{data.decode}</Cipher>
          <Cipher>{data.encode}</Cipher>
        </ProjectContainer>
      ))}
    </div>
  );
}

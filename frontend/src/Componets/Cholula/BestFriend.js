import React, { useEffect, useState } from "react";
import axios from "axios";
import { Letter } from "../../styles/styles"
const Campus = "http://localhost:8000/best/";

export default function App() {
  const [data, setData] = useState([]);

  const fecthData = () => {
    axios(`${Campus}`)
      .then((response) => {
        let CCE = response.data.filter((datos) => datos.campus === 4);

        setData(CCE);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fecthData();
  }, []);
  console.log(data.letter);
  return (
    <div style={{backgroundColor:"#f7e8f7", padding:"5%"}}>
      {data.map((data, index) => (
        <Letter>{data.letter}</Letter>
      ))}
    </div>
  );
}

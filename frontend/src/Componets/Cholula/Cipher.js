import React, { useEffect, useState} from 'react'
import axios from "axios"
const Campus = "http://localhost:8000/cipher/"



export default function App() {
  const [data, setData] = useState([])

  const fecthData = () => {
    axios(`${Campus}`)
      .then((response) => {
          let CCE = response.data.filter(datos => datos.campus === 4)
 
        setData(CCE);

      })
      .catch((error) => {});
  };

  useEffect(() => {
    fecthData();
  }, []);
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

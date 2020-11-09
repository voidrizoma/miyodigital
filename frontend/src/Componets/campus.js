import React, { useEffect, useState} from 'react'
import axios from "axios"
const Campus = "http://localhost:8000/campus/"



export default function App() {
  const [data, setData] = useState([])

  const fecthData = () => {
    axios(`${Campus}`)
      .then((response) => {
         setData(response);

      })
      .catch((error) => {});
  };

  useEffect(() => {
    fecthData();
  }, []);
  console.log(data.data)
  return (
    <div>
      
    </div>
  )
}

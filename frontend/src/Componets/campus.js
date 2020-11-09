import React from "react";
import { Link } from "react-router-dom";

export default function App() {

  return (
    <div>
      <Link to="/cce">CCE</Link>
      <Link to="/cholula">Cholula</Link>
      <Link to="/colmena">La Colmena</Link>
      <Link to="/casa">CaSa</Link>
    </div>
  );
}

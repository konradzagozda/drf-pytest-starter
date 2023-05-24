/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <form>
      <select name={myCar} onChange={handleChange}>
        <option value="Volvo">Volvo</option>
        <option value="Saab">Saab</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}

function App() {
  const cars = ["aksod", "asdoiko", "aksodkao"];
  return (
    <>
      <MyForm />
    </>
  );
}

export default App;

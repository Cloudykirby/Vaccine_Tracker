import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    fetch("/vaccine")
      .then((res) => {
        res.json();
      })
      .then((vaccines) => {
        console.log(vaccines);
        setVaccines(vaccines);
      });
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>Vaccine</h1>
      <ui>
        {/* {vaccines.map((vaccine) => {
          return (
            <>
              <li>{vaccine.siteLocation}</li>
              <li>{vaccine.vaccineType}</li>
            </>
          );
        })} */}
      </ui>
    </div>
  );
}

export default App;

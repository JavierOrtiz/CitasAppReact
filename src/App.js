import Form from "./components/Form";
import Cita from "./components/Cita";
import {useState, useEffect} from 'react';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas')) || [];
  const [citas, addCitas] = useState(citasIniciales);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas || []));
  }, [citas])

  const addCita = (cita) => {
    addCitas([...citas, cita])
  }

  const deleteCita = (id) => {
    const lastCitas = citas.filter(cita => cita.id !== id)

    addCitas(lastCitas);
  }

  return (
    <div className="App">
      <h1>Titulo</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addCita={addCita}/>
          </div>
          <div className="one-half column">
            <h2>Listado de Citas</h2>
            { citas.map(cita => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

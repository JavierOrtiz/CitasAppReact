import {useState} from 'react';
const { v4: uuidv4 } = require('uuid');

const Form = ({addCita}) => {
  const [cita, actualizarCita] = useState({
    petName: '',
    petOwner: '',
    date: '',
    hour: '',
    symptoms: '',
  })

  const [error, setError] = useState(false)

  const updateState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  const submitCita = e => {
    e.preventDefault();

    if (petName.trim() === '' || petOwner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === '') {
      setError(true);
      return;
    }

    setError(false);

    cita.id = uuidv4();

    addCita(cita);

    actualizarCita({
      petName: '',
      petOwner: '',
      date: '',
      hour: '',
      symptoms: ''
    })
  }

  const {petName, petOwner, date, hour, symptoms} = cita;

  return (
    <div>
      { error ? <p className={"alerta-error"}>Todos los campos son obligatorios</p> : null }
      <h2>Crear cita</h2>
      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>
        <input type="text" onChange={updateState} name={"petName"} value={petName} className={"u-full-width"}/>
        <label htmlFor="">Propietario</label>
        <input type="text" onChange={updateState} name={"petOwner"} value={petOwner} className={"u-full-width"}/>
        <label htmlFor="">Fecha</label>
        <input type="date" onChange={updateState} name={"date"} value={date} className={"u-full-width"}/>
        <label htmlFor="">Hora</label>
        <input type="time" onChange={updateState} name={"hour"} value={hour} className={"u-full-width"}/>
        <label htmlFor="">Sintomas</label>
        <textarea name={"symptoms"} value={symptoms} onChange={updateState} className={"u-full-width"}></textarea>
        <button type={"submit"} className={"u-full-width button-primary"}>Crear cita</button>
      </form>
    </div>
  );
}

export default Form;

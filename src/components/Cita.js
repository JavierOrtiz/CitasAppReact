const Cita = ({cita, deleteCita}) => (
  <div className="cita">
    <p>Mascota: <span>{cita.petName}</span></p>
    <p>Propietario: <span>{cita.petOwner}</span></p>
    <p>Fecha: <span>{cita.date}</span></p>
    <p>Hora: <span>{cita.hour}</span></p>
    <p>Sintomas: <span>{cita.symptoms}</span></p>

      <button className="button eliminar u-full-width" onClick={() => {deleteCita(cita.id)}}>
          Eliminar &times;
      </button>
  </div>
)

export default Cita;

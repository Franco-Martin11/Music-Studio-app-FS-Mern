import { DateTime } from "luxon";
import { useState } from "react";

const  DateComponent = () => {
  const [date, setDate] = useState(DateTime.now().toISODate());
  const [time, setTime] = useState(DateTime.now().toISOTime());

  const handleClick = () => {
    console.log(date,time)
    fetch('http://localhost:3000/api/timeslots/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, time })
    })
    .then(response => {
      if (response.ok) {
        console.log('La fecha y hora han sido enviadas a la base de datos');
      } else {
        console.log('Ha habido un error al enviar la fecha y hora a la base de datos');
      }
    })
    .catch(error => {
      console.log('Ha habido un error al enviar la fecha y hora a la base de datos:', error);
    });
  };

  return (
    <div>
      <label>Fecha:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <label>Hora:</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Reservar</button>
    </div>
  );
}

export default DateComponent;

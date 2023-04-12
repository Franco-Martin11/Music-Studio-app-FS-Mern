import { DateTime } from "luxon";
import { useState } from "react";
import "./DateComponent.css";

const DateComponent = () => {
  const [date, setDate] = useState(DateTime.now().toISODate());
  const [hour, setHour] = useState(DateTime.now().hour);

  const handleClick = () => {
    const time = `${hour}:00`;
    console.log(date, time);
    fetch("http://localhost:3000/api/timeslots/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, time }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("La fecha y hora han sido enviadas a la base de datos");
        } else {
          console.log(
            "Ha habido un error al enviar la fecha y hora a la base de datos"
          );
        }
      })
      .catch((error) => {
        console.log(
          "Ha habido un error al enviar la fecha y hora a la base de datos:",
          error
        );
      });
  };

  const renderHours = () => {
    const hours = Array.from(Array(12).keys()).map((hour) => hour + 12);
    return hours.map((hour) => (
      <option key={hour} value={hour}>
        {hour % 12 === 0 ? "12 PM" : `${hour % 12}:00 ${hour < 12 ? "AM" : "PM"}`}
      </option>
    ));
  };

  return (
    <div className="container">
      <div className="dateContainer">
        <label>Fecha:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="dateContainer">
        <label>Hora:</label>
        <select value={hour} onChange={(e) => setHour(parseInt(e.target.value))}>
          {renderHours()}
        </select>
      </div>
      <button onClick={handleClick}>Reservar</button>
    </div>
  );
};

export default DateComponent;

import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import styles from "./AvailableSlots.module.css";

const AvailableSlots = () => {
  const [slots, setSlots] = useState({});
  
  useEffect(() => {
    const startOfWeek = DateTime.now().startOf('day');
    const endOfWeek = startOfWeek.plus({ days: 7 });
    
    const fetchSlots = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/timeslots`);
        if (response.ok) {
          const { availableSlots } = await response.json();
          setSlots(availableSlots);
        } else {
          console.log("Error al obtener los horarios disponibles");
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchSlots();
  }, []);

  const getSlotStatus = (dateISO, time) => {
    const slotsArray = slots[dateISO];
  
    if (!Array.isArray(slotsArray)) {
      return "Cargando...";
    }
  
    const slot = slotsArray.find(slot => slot.time === time);
  
    return slot === undefined ? "Available" : "Not Available";
  };
  

  const times = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          {[...Array(7)].map((_, i) => {
            const date = DateTime.now().startOf('day').plus({ days: i }).toFormat('cccc dd/MM');
            return <th key={date}>{date}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {times.map(time => (
          <tr key={time}>
            <td>{time}</td>
            {[...Array(7)].map((_, i) => {
              const dateISO = DateTime.now().startOf('day').plus({ days: i }).toISODate();
              return (
                <td 
                  key={dateISO}
                  className={`${styles.cell} ${getSlotStatus(dateISO, time) === "Available" ? styles.green : styles.red}`}
                >
                  {getSlotStatus(dateISO, time)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AvailableSlots;





import { getSlotStatus } from "../../../../../utils/getSlotStatus";
import styles from "../AvailableSlots.module.css";

export const generateTableHeaders = (startOfWeek) =>
  [...Array(7)].map((_, i) => {
    const date = startOfWeek.plus({ days: i }).toFormat("cccc dd/MM");
    return <th key={date}>{date}</th>;
  });

export const generateTableBody = (TIMES, slots, startOfWeek) =>
  TIMES.map((time) => {
    return (
      <tr key={time}>
        <td>{time}</td>
        {[...Array(7)].map((_, i) => {
          const dateISO = startOfWeek.plus({ days: i }).toISODate();
          return (
            <td
              key={dateISO}
              className={`${styles.cell} ${
                getSlotStatus(dateISO, time, slots) === "Available"
                  ? styles.green
                  : styles.red
              }`}
            >
              {getSlotStatus(dateISO, time, slots)}
            </td>
          );
        })}
      </tr>
    );
  });

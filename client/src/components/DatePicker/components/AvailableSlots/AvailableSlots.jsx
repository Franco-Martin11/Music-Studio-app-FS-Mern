import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import styles from "./AvailableSlots.module.css";
import { generateTableBody, generateTableHeaders } from "./utils/generateTable";

const TIMES = [
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
];

const AvailableSlots = ({ slots, isLoading, error }) => {
  const [startOfWeek, setStartOfWeek] = useState(DateTime.now().startOf("day"));

  useEffect(() => {
    setStartOfWeek(DateTime.now().startOf("day"));
  }, []);
  const endOfWeek = startOfWeek.plus({ days: 7 });

  if (isLoading) return <p>IsLoading</p>;
  if (error) return <p>error:{error}</p>;
  if (slots)
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {generateTableHeaders(startOfWeek)}
          </tr>
        </thead>
        <tbody>{generateTableBody(TIMES, slots, startOfWeek)}</tbody>
      </table>
    );
};

export default AvailableSlots;

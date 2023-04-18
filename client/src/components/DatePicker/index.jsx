import React, { useMemo } from "react";
import AvailableSlots from "./components/AvailableSlots/AvailableSlots";
import DateComponent from "./components/DateComponent/DateComponent";
import useFetch from "../../hook/useFetch";

const DatePicker = () => {
  const { data: slots, isLoading, error } = useFetch("/timeslots");
  return (
    <>
      <DateComponent />
      <AvailableSlots slots={slots} isLoading={isLoading} error={error} />
    </>
  );
};

export default DatePicker;

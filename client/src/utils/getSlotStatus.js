export const getSlotStatus = (dateISO, time, slots) => {
  const slotsArray = slots[dateISO];

  return slotsArray.some((slot) => slot.time === time)
    ? "Not Available"
    : "Available";
};

export const futureMonth = (val: number) => {
  const today = new Date();

  // Add 4 months to today's date
  const futureDate = new Date();
  futureDate.setMonth(today.getMonth() + val);
  return futureDate;
};

export const dateDiffInDays = (date1: number, date2: number) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffInMilliseconds = date2 - date1;
  return Math.round(diffInMilliseconds / oneDay);
};

export const getCurrentDate = () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  return `${month}-${year}`;
};

export const formatCurrentMonth = (currentMonth) => {
  const [month, year] = currentMont
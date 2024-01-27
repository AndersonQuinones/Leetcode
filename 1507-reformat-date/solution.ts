function reformatDate(date: string): string {
    // Split the date string into components
  const [day, month, year] = date.split(' ');

  // Define a lookup object for months
  const monthLookup: { [key: string]: string } = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
  };

  // Extract the numeric day, month, and year
  const numericDay = day.slice(0, -2).padStart(2, '0');
  const numericMonth = monthLookup[month];
  const numericYear = year;

  // Return the formatted date string
  return `${numericYear}-${numericMonth}-${numericDay}`;
};

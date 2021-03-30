export function calculateAge(year) {
  let age = parseInt(year) + 1 + ' YO';
  if (year === 'unknown') {
    age = 'Uhm... im not sure';
  }

  return age;
}

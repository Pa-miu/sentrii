/*
  Pad a number with leading 0s
*/
export function pad(num, length) {
  return '0'.repeat(length - num.toString().length) + num;
}

/*
  Converts seconds to a 00:00 style string
*/
export function secToMSS(s) {
  const minutes = pad(Math.floor(s / 60), 1);
  const seconds = pad(s - (minutes * 60), 2);

  return (minutes + ':' + seconds);
}

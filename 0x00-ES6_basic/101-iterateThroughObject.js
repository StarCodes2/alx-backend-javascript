export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  for (const name of reportWithIterator) {
    if (names === '') {
      names = name;
    } else {
      names = `${names} | ${name}`;
    }
  }

  return names;
}

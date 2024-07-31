export default function cleanSet(set, startString) {
  let newString = '';

  for (const val of set) {
    if (startString.length > 0 && val.startsWith(startString)) {
      newString = `${newString}-${val.substring(3)}`;
    }
  }

  return newString.replace('-', '');
}

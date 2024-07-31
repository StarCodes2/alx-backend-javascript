export default function cleanSet(set, startString) {
  let newString = '';

  if (startString && typeof startString === 'string' && startString.length > 0) {
    for (const val of set) {
      if (startString.length > 0 && val.startsWith(startString)) {
        newString = `${newString}-${val.substring(3)}`;
      }
    }

    newString = newString.replace('-', '');
  }

  return newString;
}

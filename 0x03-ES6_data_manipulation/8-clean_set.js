export default function cleanSet(set, startString = '') {
  let newString = '';
  const pos = startString.length;

  if (startString && typeof startString === 'string' && pos > 0) {
    for (const val of set) {
      if (pos > 0 && val.startsWith(startString)) {
        if (newString !== '') {
          newString = `${newString}-${val.substring(pos)}`;
        } else {
          newString = val.substring(pos);
        }
      }
    }
  }

  return newString;
}

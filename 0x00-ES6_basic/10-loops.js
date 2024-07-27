export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const array2 = [];

  for (const idx of array) {
    array2[i] = appendString + idx;
    i += 1;
  }

  return array2;
}

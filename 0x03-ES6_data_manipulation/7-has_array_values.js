export default function hasValuesFromArray(setValue, arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr.every((value) => setValue.has(value));
  }
  return false;
}

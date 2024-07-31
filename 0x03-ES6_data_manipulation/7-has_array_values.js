export default function hasValuesFromArray(setValue, arr) {
  return setValue.isSupersetOf(new Set(arr));
}

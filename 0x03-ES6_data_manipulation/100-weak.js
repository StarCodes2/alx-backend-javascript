export const weakMap = new WeakMap();

export function queryAPI(wMap) {
  if (weakMap.has(wMap) && weakMap.get(wMap) > 4) {
    throw new Error('Endpoint load is high');
  }

  if (weakMap.has(wMap)) {
    const num = weakMap.get(wMap);
    weakMap.set(wMap, num + 1);
  } else {
    weakMap.set(wMap, 1);
  }
}

type MapStrinsCallback = (item: string) => string;
export function mapStrigs(
  array: string[],
  callbackfn: MapStrinsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(callbackfn(item)));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrigs(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);

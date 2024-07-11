export function makeGroupsOfThree(array: any) {
  let grupos = [];
  for (let i = 0; i < array.length; i += 3) {
    let grupo = array.slice(i, i + 3);
    grupos.push(grupo);
  }
  return grupos;
}

export default function getCharactersHealth(arr) {
  return arr.sort((a, b) => b.health - a.health);
}

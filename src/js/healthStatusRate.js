export default function healthStatusRate(heroes = []) {
  return heroes.sort((a, b) => {
    if (a.health === b.health) {
      return 0;
    }
    return a.health > b.health ? -1 : 1;
  });
}

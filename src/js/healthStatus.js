export default function healthStatus(hero = {}) {
  let status;
  if (hero.health > 50) {
    status = 'healthy';
  } else if (hero.health <= 50 && hero.health >= 15) {
    status = 'wounded';
  } else if (hero.health < 15) {
    status = 'critical';
  }
  return status;
}

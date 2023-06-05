import healthStatusRate from '../js/healthStatusRate';

test('Sorting heroes for health status', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'бард', health: 10 },
  ];
  const sortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'бард', health: 10 },
  ];

  const result = healthStatusRate(heroes);
  expect(result).toEqual(sortedHeroes);
});

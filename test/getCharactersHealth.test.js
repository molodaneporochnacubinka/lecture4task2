import getCharactersHealth from '../src/js/getCharactersHealth';

test('test getCharactersHealth 3 heroes', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(getCharactersHealth(characters)).toEqual(expected);
});

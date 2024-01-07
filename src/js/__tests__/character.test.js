import Character from '../character';

// test Character
test('Character damage()', () => {
  const character = new Character('Swordsman', 'Swordsman', 40, 10);
  character.damage(10);
  expect(character.health).toBe(91);
});

test('Character damage() Error', () => {
  const character = new Character('Swordsman', 'Swordsman', 40, 10);
  character.health = 0;
  expect(() => character.damage(10)).toThrow(Error);
});

test('Character levelUp()', () => {
  const character = new Character('Bowerman', 'Bowman', 25, 25);
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(30);
  expect(character.health).toBe(100);
});

test('Character levelUp() Error', () => {
  const character = new Character('Bowerman', 'Bowman', 25, 25);
  character.health = 0;
  expect(() => character.levelUp()).toThrow(Error);
});

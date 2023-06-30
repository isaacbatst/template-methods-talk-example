import {describe, expect, it} from 'vitest';

describe('Character', () => {
  it.only('should have strength, dexterity and intelligence', () => {
    const isaac = new Character(5, 6, 7);
    expect(isaac.strength).toBe(5);
    expect(isaac.dexterity).toBe(6);
    expect(isaac.intelligence).toBe(7);
  })

  it('should have 100 life points', () => {
    const isaac = new Character(5, 6, 7);
    expect(isaac.life).toBe(100);
  })

  it('should have 10 base damage', () => {
    const isaac = new Character(5, 6, 7);
    const damage = isaac.getBaseDamage();
    expect(damage).toBe(10);
  })

  it('should attack dealing base damage minus the target\'s dexterity', () => {
    const isaac = new Character(5, 6, 7);
    const goliath = new Character(10, 5, 10);
    isaac.attack(goliath);
    expect(goliath.life).toBe(95);
  })

  it('(elf) should have damage modifier: sum dexterity and intelligence', () => {
    const elf = new Elf(5, 6, 7);
    const damage = elf.getDamageModifier();
    expect(damage).toBe(13);
  })

  it('(orc) should have damage modifier: 2x strength', () => {
    const orc = new Orc(5, 6, 7);
    const damage = orc.getDamageModifier();
    expect(damage).toBe(10);
  })
  
  it('(elf) should attack dealing 10 plus dexterity plus intelligence minus the target\'s dexterity', () => {
    const elf = new Elf(5, 6, 7);
    const goliath = new Character(10, 5, 10);
    elf.attack(goliath);
    expect(goliath.life).toBe(82);
  })

  it('(orc) should attack dealing 10 plus 2x strength minus the target\'s dexterity', () => {
    const orc = new Orc(5, 6, 7);
    const goliath = new Character(10, 5, 10);
    orc.attack(goliath);
    expect(goliath.life).toBe(85);
  })
})
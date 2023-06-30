export class Character {
  public life = 100;

  constructor(
    public strength: number,
    public dexterity: number,
    public intelligence: number,
  ){}

  attack(target: Character){
    const baseDamage = this.getBaseDamage();
    const attackModifier = this.getDamageModifier();
    const damage = baseDamage + attackModifier - target.dexterity;
    target.life -= damage;
  }

  getBaseDamage(){
    return 10;
  }

  getDamageModifier(){
    return 0;
  }
}
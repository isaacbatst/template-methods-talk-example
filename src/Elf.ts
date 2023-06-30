import { Character } from "./Character";

export class Elf extends Character {
  override getDamageModifier() {
    return this.dexterity + this.intelligence;
  }
}
import { Character } from "./Character";

export class Orc extends Character {
  override getDamageModifier() {
    return this.strength * 2;
  }
}
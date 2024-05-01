import { Character } from "../Character/Character.js";
import { type KingStructure } from "../types.js";

export class King extends Character implements KingStructure {
  public yearsReigning: number;
  public sentence: string;

  public constructor(
    name: string,
    surname: string,
    age: number,
    yearsReigning: number,
  ) {
    super(name, surname, age);
    this.yearsReigning = yearsReigning;
    this.sentence = "Vais a morir todos";
  }
}

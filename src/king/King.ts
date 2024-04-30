import { Character } from "../Character/Character.js";

export class King extends Character {
  public yearsReigning: number;

  public constructor(
    name: string,
    surname: string,
    age: number,
    yearsReigning: number,
  ) {
    super(name, surname, age);
    this.yearsReigning = yearsReigning;
  }
}

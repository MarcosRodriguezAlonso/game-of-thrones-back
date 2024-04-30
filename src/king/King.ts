import { Character } from "../character/Character.js";

export class King extends Character {
  public sentence = "Vais a morir todos";
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

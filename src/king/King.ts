import { Character } from "../character/Character.js";

export class King extends Character {
  public sentence: string;
  public yearsReigning: number;

  public constructor(
    name: string,
    surname: string,
    age: number,
    sentence: string,
    yearsReigning: number,
  ) {
    super(name, surname, age);
    this.sentence = sentence;
    this.yearsReigning = yearsReigning;
  }
}

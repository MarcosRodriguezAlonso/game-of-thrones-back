import { CharacterStructure } from "../types.js";

export class Character implements CharacterStructure {
  public name: string;
  public surname: string;
  public age: number;
  public isAlive = true;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  public die() {
    this.isAlive = false;
  }

  public speak() {
    return "";
  }
}

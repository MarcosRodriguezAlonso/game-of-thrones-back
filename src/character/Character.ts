export class Character {
  public name: string;
  public surname: string;
  public age: number;
  public isAlive = true;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  private die() {
    this.isAlive = false;
  }

  private speak() {
    return "";
  }
}

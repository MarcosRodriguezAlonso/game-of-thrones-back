export class Character {
  public isAlive = true;

  constructor(
    public name: string,
    public surname: string,
    public age: number,
  ) {
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

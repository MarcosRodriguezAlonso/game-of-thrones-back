import { Character } from "../Character/Character.js";
import { type Level } from "../types.js";
import { type BasicCharacter } from "../types.js";
import { type FighterStructure } from "../types.js";

export class Fighter extends Character implements FighterStructure {
  public sentence = "Primero pego y luego pregunto";
  public weapon: string;
  public dexterity: Level;

  public constructor(
    character: BasicCharacter,
    weapon: string,
    dexterity: Level,
  ) {
    super(character.name, character.surname, character.age);
    this.weapon = weapon;
    this.dexterity = dexterity;
  }
}

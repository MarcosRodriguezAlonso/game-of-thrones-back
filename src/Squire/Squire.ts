import { Character } from "../Character/Character.js";
import {
  type BasicCharacter,
  type Level,
  type FighterStructure,
  type SquireStructure,
} from "../types.js";

export class Squire extends Character implements SquireStructure {
  public sentence = "Soy un loser";
  public master: FighterStructure;
  public servitude: Level;

  public constructor(
    character: BasicCharacter,
    master: FighterStructure,
    servitude: Level,
  ) {
    super(character.name, character.surname, character.age);
    this.master = master;
    this.servitude = servitude;
  }
}

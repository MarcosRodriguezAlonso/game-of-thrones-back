import { Character } from "../CharacterClass/Character.js";
import { type BasicCharacter, type AdviserStructure } from "../types.js";

export class Adviser extends Character implements AdviserStructure {
  public sentence = "No sé por qué, pero creo que voy a morir pronto";
  public characterWhomAdvises: Character;

  public constructor(
    character: BasicCharacter,
    characterWhomAdvises: Character,
  ) {
    super(character.name, character.surname, character.age);
    this.characterWhomAdvises = characterWhomAdvises;
  }
}

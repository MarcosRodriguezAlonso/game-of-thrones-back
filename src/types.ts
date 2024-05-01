import { type Character } from "./Character/Character";

export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export interface CharacterStructure {
  name: string;
  surname: string;
  age: number;
  isAlive: boolean;
  die: () => void;
  speak: () => string;
}

export interface KingStructure extends CharacterStructure {
  sentence: string;
  yearsReigning: number;
}

export interface FighterStructure extends CharacterStructure {
  sentence: string;
  weapon: string;
  dexterity: Level;
}

export interface SquireStructure extends CharacterStructure {
  master: FighterStructure;
  servitude: Level;
}

export interface AdviserStructure extends CharacterStructure {
  characterWhomAdvises: Character;
  sentence: string;
}

export interface BasicCharacter {
  name: string;
  surname: string;
  age: number;
}

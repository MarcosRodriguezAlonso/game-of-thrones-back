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

export interface BasicCharacter {
  name: string;
  surname: string;
  age: number;
}

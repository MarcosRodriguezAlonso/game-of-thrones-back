export interface CharacterStructure {
  name: string;
  surname: string;
  age: number;
  isAlive: boolean;
  die: () => void;
  speak: () => string;
}

export interface KingInterface extends CharacterStructure {
  sentence: string;
  yearsReigning: number;
}

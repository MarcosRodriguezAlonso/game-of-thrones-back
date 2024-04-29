export interface Character {
  name: string;
  surname: string;
  age: number;
  isAlive: boolean;
  die: () => void;
  speak: () => string;
}

export interface King extends Character {
  sentence: "Vais a morir todos";
  yearsReigning: number;
}

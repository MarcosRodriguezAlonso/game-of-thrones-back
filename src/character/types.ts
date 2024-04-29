export interface Character {
  name: string;
  surname: string;
  age: number;
  isAlive: boolean;
  die: () => void;
  speak: () => string;
}

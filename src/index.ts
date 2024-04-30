import { Fighter } from "./Fighter/Fighter.js";

const jaimeLannister = new Fighter(
  {
    name: "Jaime",
    surname: "Lannister",
    age: 40,
  },
  "Axe",
  9,
);

console.log(jaimeLannister);

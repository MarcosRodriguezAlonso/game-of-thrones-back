import { Adviser } from "./Adviser/Adviser.js";
import { Fighter } from "./Fighter/Fighter.js";
import { King } from "./King/King.js";
import { Squire } from "./Squire/Squire.js";

const joffreyBaratheon = new King("Joffrey", "Baratheon", 14, 2);
const jaimeLannister = new Fighter(
  { name: "Jaime", surname: "Lannister", age: 40 },
  "Sword",
  9,
);
const daenerysTargaryen = new Fighter(
  {
    name: "Daenerys",
    surname: "Targaryen",
    age: 23,
  },
  "Fire",
  2,
);
const tyrionLannister = new Adviser(
  { name: "Tyrion", surname: "Lannister", age: 32 },
  daenerysTargaryen,
);
const bronn = new Squire(
  { name: "Bronn", surname: "", age: 43 },
  jaimeLannister,
  3,
);

const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];

const getCharacters = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(characters);
    }, 3000);
  });

async function callCharacter() {
  try {
    const characters = await getCharacters();
    console.log(characters);
  } catch (error) {
    console.error(error);
  }
}

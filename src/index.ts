import express, { type Response } from "express";
import { Adviser } from "./Adviser/Adviser.js";
import { Fighter } from "./Fighter/Fighter.js";
import { King } from "./KingClass/King.js";
import { Squire } from "./Squire/Squire.js";
import { type Character } from "./CharacterClass/Character.js";
import { type Characters } from "./types.js";
import cors from "cors";

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

const characters: Character[] = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];

const app = express();

app.listen(4000, () => {
  console.log("Server listening on 'https://localhost:4000/'");
});

app.use(cors());

app.get("/characters", (_req, res: Response<Characters>) => {
  res.status(200).json({ characters });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

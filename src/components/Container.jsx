import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("");

  const numberOfCharacters = text.length;
  const instagramCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;

  //number of words
  const wordArray = text.trim().split(" ");

  const filteredWordArray = wordArray.filter((item) => item != "");
  const numberOfWords = filteredWordArray.length;

  const stats = {
    numberOfCharacters,
    instagramCharactersLeft,
    facebookCharactersLeft,
    numberOfWords,
  };

  return (
    <main className="container">
      <TextArea setText={setText} text={text} />
      <Stats stats={stats} />
    </main>
  );
}

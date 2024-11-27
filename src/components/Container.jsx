import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("");

  return (
    <main className="container">
      <TextArea setText={setText} text={text} />
      <Stats numberOfCharacters={text.length} />
    </main>
  );
}

import { useState } from "react";
import Warning from "./Warning";

// const stringsToExclude = [
//   {
//     string: "<script>",
//     warning: "No script tag allowed!",
//   },
//   {
//     string: "@",
//     warning: "No @ symbol allowed!",
//   },
// ];

export default function TextArea({ setText, text }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setMessage("No script tag allowed.");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setMessage("No @ symbol allowed.");
      newText = newText.replace("@", "");
    } else {
      setMessage("");
    }
    setText(newText);
  };

  // const handleChange = (event) => {
  //   let newText = event.target.value;
  //   let warningMessage = "";
  //   let showWarning = "";

  //   stringsToExclude.forEach((input) => {
  //     if (newText.includes(input.string)) {
  //       showWarning = true;
  //       warningMessage = input.warning;
  //       newText = newText.replace(input.string, "");
  //     }
  //   });

  //   if (showWarning) {
  //     setShowWarning(true);
  //     setMessage(warningMessage);
  //   } else {
  //     setShowWarning(false);
  //     setMessage("");
  //   }

  //   setText(newText);
  // };

  return (
    <>
      <textarea
        onChange={handleChange}
        placeholder="Enter your text"
        value={text}
        spellCheck={false}
        rows={12}
        className="textarea"
      />
      <Warning message={message} />
    </>
  );
}

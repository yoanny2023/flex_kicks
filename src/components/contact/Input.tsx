"use-client";
import React, { useState } from "react";

interface InputProps {
  type: string;
  placeHolder: string;
  className?: string;
}

function Input(props: InputProps) {
  const [inputEntry, setInputEntry] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputEntry(e.target.value);
    console.log("estou aqui:", e.target.value);
  }

  return (
    <input
      value={inputEntry}
      type={props.type}
      placeholder={props.placeHolder}
      onChange={handleInputChange}
      className={`px-4 py-2 rounded-md bg-zinc-500/30
    focus:outline-none focus:ring-2 focus:ring-purple-500
    focus:bg-zinc-500/60 
    ${props.className ?? ""}
    `}
    />
  );
}

export default Input;

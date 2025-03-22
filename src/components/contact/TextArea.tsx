"use-client";
import React, { useState } from "react";

interface TextAreaProps {
  className?: string;
}

function TextArea(props: TextAreaProps) {
  const [textMessage, setTextMessage] = useState("");

  function textChangeHandle(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextMessage(e.target.value);
  }

  return (
    <textarea
      className={`px-4 py-2 rounded-md bg-zinc-500/30
   focus:bg-zinc-500/60 focus:outline-none focus:ring-2 focus:ring-purple-600
    ${props.className ?? ""}
   `}
      placeholder="Leave a message"
      rows={5}
      value={textMessage}
      onChange={textChangeHandle}
    ></textarea>
  );
}

export default TextArea;

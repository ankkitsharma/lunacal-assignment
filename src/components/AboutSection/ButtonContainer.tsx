"use client";
import styles from "./AboutSection.module.css";
import { useState } from "react";

export default function ButtonContainer() {
  const [activeBtn, setactiveBtn] = useState("");
  function onClick() {}
  return (
    <div className="w-full min-h-9 h-[20%] bg-[#171717] rounded-[23px] p-2 flex justify-between items-center gap-2">
      <Button body="About Me" id="btn1" />
      <Button body="Experiences" id="btn2" />
      <Button body="Recommended" id="btn3" />
    </div>
  );
}

function Button({ body, id }: { body: string; id: string }) {
  return (
    <button className={`w-1/3 h-full relative rounded-2xl ${styles.btn} z-[1]`}>
      {body}
    </button>
  );
}

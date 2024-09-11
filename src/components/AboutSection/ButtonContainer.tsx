"use client";
import { cn } from "@/lib/utils";
import styles from "./AboutSection.module.css";
import { useState } from "react";

export default function ButtonContainer() {
  const [activeBtn, setactiveBtn] = useState("btn1");
  function handleClick(id: string, e: EventTarget) {
    const el = e;
    const prevEl = document.querySelector(`#${activeBtn}`);
    if (el instanceof HTMLElement) {
      const x =
        prevEl == null
          ? "0%"
          : prevEl.getBoundingClientRect().x -
            el.getBoundingClientRect().x +
            "px";
      el.style.setProperty("--x", x);
    }
    setactiveBtn(id);
  }
  return (
    <div className="w-full min-h-9 h-[20%] bg-[#171717] rounded-[23px] p-2 flex justify-between items-center gap-2 mb-[35px]">
      <Button
        body="About Me"
        id="btn1"
        handleClick={handleClick}
        activeBtn={activeBtn}
      />
      <Button
        body="Experiences"
        id="btn2"
        handleClick={handleClick}
        activeBtn={activeBtn}
      />
      <Button
        body="Recommended"
        id="btn3"
        handleClick={handleClick}
        activeBtn={activeBtn}
      />
    </div>
  );
}

function Button({
  body,
  id,
  handleClick,
  activeBtn,
}: {
  body: string;
  id: string;
  handleClick: (id: string, e: EventTarget) => void;
  activeBtn: string;
}) {
  return (
    <button
      className={cn(
        "w-1/3 h-full relative rounded-2xl z-[1]",
        styles.btn,
        activeBtn === id && styles.active,
        activeBtn !== id && styles.notActive
      )}
      id={id}
      onClick={(e) => {
        handleClick(id, e.target);
      }}
    >
      {body}
    </button>
  );
}

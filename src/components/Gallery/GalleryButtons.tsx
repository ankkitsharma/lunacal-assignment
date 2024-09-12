"use client";
import React, { ChangeEvent, useState, useContext } from "react";
import { Button } from "../ui/button";
import { FileContext } from "@/lib/context/FileProvider";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function GalleryButtons() {
  // const [file, setFile] = useState();
  const { file, setFile } = useContext(FileContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    if (target.files) {
      console.log(target.files[0]);

      setFile(target.files[0]);
    }
  }
  return (
    <div className={cn("self-start flex", poppins.className)}>
      <Button className="text-xl h-[62px] w-[149px] rounded-2xl bg-[#171717] galleryBtnShadow">
        Gallery
      </Button>
      <form action="">
        <label
          htmlFor="file"
          className="rounded-[20px] bg-[#ffffff08] addBtn w-32 h-[2.8rem] text-sm font-extrabold absolute right-[25%] top-[2%] flex items-center justify-center cursor-pointer"
        >
          + ADD IMAGE
        </label>
        <input
          type="file"
          name="inputImage"
          id="file"
          className="hidden"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

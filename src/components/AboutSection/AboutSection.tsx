import React from "react";
import ButtonContainer from "./ButtonContainer";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="h-full flex flex-col">
      <ButtonContainer />
      <AboutBody />
    </div>
  );
}

function AboutBody() {
  return (
    <div>
      <div className="text-xl leading-7 text-[#969696] overflow-auto">
        Hello! I&apos;m Dave, your sales rep here from Salesforce. I&apos;ve
        been working at this awesome company for 3 years now. <br />
        <br />I was born and raised in Albany, NY& have been living in Santa
        Carla for the past 10 years my wife Tiffany and my 4 year old twin
        daughters- Emma and Ella. Both of them are just starting school, so my
        calender is usually blocked between 9-10 AM. This is a...
      </div>
      <Image
        src={"/rectangle.svg"}
        height={64}
        width={8}
        alt="rectangle image"
        className=" absolute top-0 right-0 w-5 h-[19rem]"
      />
    </div>
  );
}

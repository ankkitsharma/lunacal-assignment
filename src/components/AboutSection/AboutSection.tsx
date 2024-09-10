import React from "react";
import ButtonContainer from "./ButtonContainer";

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
    <div className="text-xl leading-7 text-[#969696]">
      Hello! I&apos;m Dave, your sales rep here from Salesforce. I&apos;ve been
      working at this awesome company for 3 years now. I was born and raised in
      Albany, NY& have been living in Santa Carla for the past 10 years my wife
      Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are
      just starting school, so my calender is usually blocked between 9-10 AM.
      This is a...
    </div>
  );
}

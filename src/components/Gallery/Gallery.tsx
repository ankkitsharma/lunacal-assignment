import React from "react";
// import Carousel from "./Carousel";
import GalleryButtons from "./GalleryButtons";
import CustomCarousel from "./CustomCarousel";

export default function Gallery() {
  return (
    <div className="flex flex-col justify-between h-full relative">
      <GalleryButtons />
      <CustomCarousel />
    </div>
  );
}

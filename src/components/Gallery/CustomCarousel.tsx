"use client";
import * as React from "react";
import styles from "./Gallery.module.css";
import { useContext } from "react";
import { FileContext } from "@/lib/context/FileProvider";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselSize() {
  const [ImageGallery, setImageGallery] = React.useState([
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ]);
  const { file } = useContext(FileContext);
  const [fileReader, setFileReader] = React.useState<FileReader | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (fileReader) {
        fileReader.abort();
      }
      setFileReader(new FileReader());
    }
  }, [file]);

  if (fileReader) {
    if (fileReader && fileReader.readyState === FileReader.EMPTY && file) {
      fileReader.readAsDataURL(file);
    }

    let base64String;
    fileReader.onload = () => {
      if (fileReader?.result !== null) {
        base64String = fileReader?.result;
        console.log("base64String ", base64String);
        setImageGallery([...ImageGallery, base64String as string]);
      }
    };
  }

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full static"
    >
      <CarouselContent className="gap-4">
        {ImageGallery.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Image
              src={item}
              height={190}
              width={190}
              className="rounded-3xl itemImg grayscale hover:grayscale-0 hover:saturate-200  h-[190px] w-[190px] object-cover shadow-md transition-transform aspect-square duration-300 hover:shadow-lg hover:shadow-black"
              alt={`carousel image ${index}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-[6%] right-[15%]" />
      <CarouselNext className="absolute top-[6%] right-[5%]" />
    </Carousel>
  );
}

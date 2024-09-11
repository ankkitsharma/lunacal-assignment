"use client";
import React, { useState } from "react";

const Carousel = ({ items }: { items: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 3 ? prev : prev + 1));
  };

  return (
    <div className=" w-full">
      {/* Carousel items */}
      <div className="flex overflow-hidden gap-[5px] justify-center">
        {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div
            key={index}
            className="w-1/3 transition-transform transform duration-300 ease-in-out flex justify-center"
          >
            <div className="bg-gray-200 p-4 text-center h-[192px] w-[179px] rounded-2xl">
              {item}
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={showPrev}
        className="absolute right-[20%] top-3 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        onClick={showNext}
        className="absolute right-[2%] top-3  transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Next
      </button>
    </div>
  );
};

const App = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="container mx-auto">
      <Carousel items={items} />
    </div>
  );
};

export default App;

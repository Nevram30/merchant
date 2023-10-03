"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type CarouselItem = {
  id: string;
  image: string;
  alt: string;
};

const carouselData: CarouselItem[] = [
  { id: "item1", image: "/product-13.jpg", alt: "Shoes 1" },
  { id: "item2", image: "/product-1.jpg", alt: "Shoes 2" },
  { id: "item3", image: "/product-1.jpg", alt: "Shoes 3" },
  { id: "item4", image: "/product-1.jpg", alt: "Shoes 4" },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change 5000 to your desired autoplay interval

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [activeIndex]);

  return (
    <>
      <div className="flex">
        <div className="w-full">
          <div className="carousel carousel-center p-4 space-x-4">
            {carouselData.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item w-full ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <Image
                  alt={item.alt}
                  src={item.image}
                  className="w-full h-96 object-cover"
                  width={600}
                  height={600}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            {carouselData.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`btn btn-xs ${
                  index === activeIndex ? "btn-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.id.substring(4)} {/* Extracting the number from the id */}
              </a>
            ))}
          </div>
        </div>
        {/* Add more carousel sections as needed */}
      </div>
    </>
  );
};

export default Carousel;

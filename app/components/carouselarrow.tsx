"use client";

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

const CarouselArrow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full">
      {carouselData.map((item, index) => (
        <div
          key={item.id}
          id={`slide${index + 1}`}
          className={`carousel-item relative w-full ${
            index === currentIndex ? "visible" : "hidden"
          }`}
        >
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-96 object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? carouselData.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${
                index === carouselData.length - 1 ? 1 : index + 2
              }`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselArrow;

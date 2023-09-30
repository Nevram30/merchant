"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const carousel = (props: Props) => {
  return (
    <>
      <div className="flex">
        <div className="w-[1200px]">
          <div className="carousel carousel-center max-w-lg p-4 space-x-4">
            <div id="item1" className="carousel-item w-full">
              <Image
                alt="shoes"
                src="/product-13.jpg"
                className="w-full h-96 object-cover"
                width={600}
                height={600}
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <Image
                alt="shoes"
                src="/product-1.jpg"
                className="w-full h-96 object-cover"
                width={600}
                height={600}
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <Image
                alt="shoes"
                src="/product-1.jpg"
                className="w-full h-96 object-cover"
                width={600}
                height={600}
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <Image
                alt="shoes"
                src="/product-1.jpg"
                className="w-full h-96 object-cover"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
        <div>
          <div className="carousel carousel-center p-4 space-x-4">
            <div id="item1" className="carousel-item w-full">
              <Image
                alt="shoes"
                src="/product-9.jpg"
                className="w-full h-96 object-cover"
                width={600}
                height={600}
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <Image
                alt="shoes"
                src="/product-1.jpg"
                className="w-full h-96 object-cover"
                width={600}
                height={600}
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <Image
                alt="shoes"
                src="/product-1.jpg"
                className="w-full h-96 object-cover"
                width={600}
                height={600}
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <Image
                alt="shoes"
                src="/product-1.jpg"
                className="w-full h-96 object-cover"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default carousel;

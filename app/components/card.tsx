"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const card = (props: Props) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <Image
          alt="shoes"
          src="/product-1.jpg"
          className="w-full h-60 object-cover"
          width={600}
          height={600}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default card;

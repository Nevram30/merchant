"use client";
import Image from "next/image";
import React from "react";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  width: number;
  height: number;
};

const products: Product[] = [
  {
    id: "1",
    name: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "/product-1.jpg",
    width: 600,
    height: 600,
  },
  // Add more product entries as needed
];

const Card = () => {
  return (
    <div className="w-80 bg-base-100 shadow-xl">
      {products.map((product) => (
        <div key={product.id}>
          <figure>
            <Image
              alt={product.name}
              src={product.image}
              className="w-full h-60 object-cover"
              width={product.width}
              height={product.height}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

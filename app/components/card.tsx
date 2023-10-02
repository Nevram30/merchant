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
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    image: "/product-2.jpg",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    width: 600,
    height: 600,
  },
  {
    id: "1",
    name: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "/product-1.jpg",
    width: 600,
    height: 600,
  },
  // Add more product entries as needed
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    image: "/product-2.jpg",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    width: 600,
    height: 600,
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-5">
      {products.map((product) => (
        <div key={product.id} className="w-full bg-base-100 shadow-xl">
          <figure>
            <Image
              alt={product.name}
              src={product.image}
              className="w-full h-60 object-cover"
              width={product.width}
              height={product.height}
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-bold mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

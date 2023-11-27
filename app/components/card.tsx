"use client";
import Image from "next/image";
import React, { useState } from "react";
import Seemore from "./seemore";

type Product = {
  id: string;
  name: string;
  description: string;
  value: string;
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
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    image: "/product-2.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "1",
    name: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "/product-1.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    image: "/product-2.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "1",
    name: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "/product-1.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    image: "/product-2.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "1",
    name: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "/product-1.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    image: "/product-2.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    image: "/product-3.jpg",
    value: "P100",
    width: 600,
    height: 600,
  },
];

const Card = () => {
  const [visibleProducts, setVisibleProducts] = useState(10); // Number of products to display initially
  const loadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5); // Increase the number of visible products
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mx-5">
        {products.slice(0, visibleProducts).map((product) => (
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
              <h2 className="card-title font-bold text-lg mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p>{product.value}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div>
          <Seemore loadmore={loadMore}/>
        </div>
      )}
    </>
  );
};

export default Card;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import Seemore from "./seemore";
import { products } from "../data/carddata";

const Card = () => {

  const [visibleProducts, setVisibleProducts] = useState(10); 

  const loadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mx-5">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="w-full rounded-lg bg-base-100 shadow-xl">
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

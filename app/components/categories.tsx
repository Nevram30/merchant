import React from "react";
import Image from "next/image";

type Category = {
  id: string;
  name: string;
  icon: string;
  width: number;
  height: number;
};

const categoriesData: Category[] = [
  { id: "coins", name: "Coins", icon: "/coin.png", width: 50, height: 50 },
  {
    id: "merchantMall",
    name: "Merchant Mall",
    icon: "/online-shopping.png",
    width: 50,
    height: 50,
  },
  {
    id: "claimVouchers",
    name: "Claim Vouchers",
    icon: "/united-states.png",
    width: 20,
    height: 20,
  },
  {
    id: "promos",
    name: "Promos",
    icon: "/united-states.png",
    width: 20,
    height: 20,
  },
  {
    id: "freshSales",
    name: "Fresh Sales",
    icon: "/united-states.png",
    width: 20,
    height: 20,
  },
];

const Categories = () => {
  return (
    <div className="box justify-center text-center space-x-9 my-24">
      {categoriesData.map((category) => (
        <button key={category.id} className="btn btn-active h-28">
          <div className="m-0">
            <div className={`px-${category.width === 20 ? 12 : 10}`}>
              <Image
                alt={category.name}
                src={category.icon}
                className="object-cover"
                width={category.width}
                height={category.height}
              />
            </div>
            <p className={`py-${category.height === 20 ? 2 : 5}`}>
              {category.name}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Categories;

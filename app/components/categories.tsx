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
    icon: "/voucher.png",
    width: 50,
    height: 50,
  },
  {
    id: "promos",
    name: "Promos",
    icon: "/promo.png",
    width: 50,
    height: 50,
  },
  {
    id: "freshSales",
    name: "Fresh Sales",
    icon: "/sale-tag.png",
    width: 50,
    height: 50,
  },
];

const Categories = () => {
  return (
    <div className="justify-center text-center space-x-9 my-24">
      {categoriesData.map((category) => (
        <button key={category.id} className="btn btn-active h-28">
          <div>
            <Image
              alt={category.name}
              src={category.icon}
              className="object-cover"
              width={category.width}
              height={category.height}
            />
          </div>
          <p>{category.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Categories;

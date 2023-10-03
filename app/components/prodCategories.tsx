import Image from "next/image";

type prodCategories = {
  id: string;
  name: string;
  icon: string;
  width: number;
  height: number;
};

const prodCategoriesData: prodCategories[] = [
  { id: "coins", name: "Coins", icon: "/coin.png", width: 30, height: 30 },
  {
    id: "merchantMall",
    name: "Merchant Mall",
    icon: "/online-shopping.png",
    width: 30,
    height: 30,
  },
  {
    id: "claimVouchers",
    name: "Claim Vouchers",
    icon: "/voucher.png",
    width: 30,
    height: 30,
  },
  {
    id: "promos",
    name: "Promos",
    icon: "/promo.png",
    width: 30,
    height: 30,
  },
  {
    id: "freshSales",
    name: "Fresh Sales",
    icon: "/sale-tag.png",
    width: 30,
    height: 30,
  },
  {
    id: "freshSales",
    name: "Fresh Sales",
    icon: "/sale-tag.png",
    width: 30,
    height: 30,
  },
  {
    id: "freshSales",
    name: "Fresh Sales",
    icon: "/sale-tag.png",
    width: 30,
    height: 30,
  },
];

const prodCategories = () => {
  return (
    <div className="ml-5 space-x-5 my-10">
      {prodCategoriesData.map((products) => (
        <button key={products.id} className="btn btn-active h-10">
          <div>
            <Image
              alt={products.name}
              src={products.icon}
              className="object-cover"
              width={products.width}
              height={products.height}
            />
          </div>
          <p>{products.name}</p>
        </button>
      ))}
    </div>
  );
};

export default prodCategories;

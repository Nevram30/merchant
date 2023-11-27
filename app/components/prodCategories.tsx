import Image from "next/image";

type prodCategories = {
  id: string;
  name: string;
  icon: string;
  width: number;
  height: number;
};

const prodCategoriesData: prodCategories[] = [
  { id: "coins", name: "Men's shoes", icon: "/coin.png", width: 30, height: 30 },
  {
    id: "merchantMall",
    name: "Women's shoes",
    icon: "/online-shopping.png",
    width: 30,
    height: 30,
  },
  {
    id: "claimVouchers",
    name: "Home & Living",
    icon: "/voucher.png",
    width: 30,
    height: 30,
  },
  {
    id: "promos",
    name: "Men's Apparel",
    icon: "/promo.png",
    width: 30,
    height: 30,
  },
  {
    id: "freshSales",
    name: "Women's Apparel",
    icon: "/sale-tag.png",
    width: 30,
    height: 30,
  },
  {
    id: "freshSales",
    name: "Sports",
    icon: "/sale-tag.png",
    width: 30,
    height: 30,
  },
  {
    id: "freshSales",
    name: "Kids",
    icon: "/sale-tag.png",
    width: 30,
    height: 30,
  },
];

const prodCategories = () => {
  return (
    <>
      <div className="pl-5 pt-10 pb-3">
        <h1>Categories</h1>
      </div>
      <div className="pl-5 space-x-5 pb-10">
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
    </>
  );
};

export default prodCategories;

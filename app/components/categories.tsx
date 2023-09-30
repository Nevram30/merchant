import React from "react";
import Image from "next/image";

type Props = {};

const categories = (props: Props) => {
  return (
    <div className="box justify-center text-center space-x-9 my-24">
      <button className="btn btn-active h-20">
        <div className="m-0">
          <div className="px-8">
            <Image
              alt="shoes"
              src="/united-states.png"
              className="object-cover"
              width={20}
              height={20}
            />
          </div>
          <p className="pt-2">Coins</p>
        </div>
      </button>
      <button className="btn btn-active h-20">
        <div className="m-0">
          <div className="px-10">
            <Image
              alt="shoes"
              src="/united-states.png"
              className="object-cover"
              width={20}
              height={20}
            />
          </div>
          <p className="pt-2">Merchant Mall</p>
        </div>
      </button>
      <button className="btn btn-active h-20">
        <div className="m-0">
          <div className="box px-12">
            <Image
              alt="shoes"
              src="/united-states.png"
              className="object-cover"
              width={20}
              height={20}
            />
          </div>
          <p className="pt-2">Claim Vouchers</p>
        </div>
      </button>
      <button className="btn btn-active h-20">
        <div className="m-0">
          <div className="px-8">
            <Image
              alt="shoes"
              src="/united-states.png"
              className="object-cover"
              width={20}
              height={20}
            />
          </div>
          <p className="pt-2">Promos</p>
        </div>
      </button>
      <button className="btn btn-active h-20">
        <div className="m-0">
          <div className="px-8">
            <Image
              alt="shoes"
              src="/united-states.png"
              className="object-cover"
              width={20}
              height={20}
            />
          </div>
          <p className="pt-2">Fresh Sales</p>
        </div>
      </button>
    </div>
  );
};

export default categories;

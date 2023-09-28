"use client";
import React, { useState } from "react";

import InputSearch from "@/app/components/inputSearch";

import Image from "next/image";

type Props = {};

const navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

  const handleSearchIconClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (query: string) => {
    // Handle the search logic here, for now, let's just log the query
    console.log("Searching for:", query);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Merchant</a>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>
                  <div>
                    <Image
                      alt="shoes"
                      src="/united-states.png"
                      className="object-cover"
                      width={20}
                      height={20}
                    />
                  </div>
                  ENG
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Sell</a>
                  </li>
                  <li>
                    <a>Gift Card</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Account List</summary>
                <ul className="p-2">
                  <li>
                    <a>Sell</a>
                  </li>
                  <li>
                    <a>Gift Card</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Orders</a>
            </li>
          </ul>
        </div>
        <div className="flex">
          {isSearchVisible && <InputSearch onSearch={handleSearch} />}
          <span className="flex" onClick={handleSearchIconClick}>
            <button
              className="btn btn-ghost btn-circle"
              onClick={handleSearchIconClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </span>
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Image
              alt="shoes"
              src="/shopping-cart.png"
              className=""
              width={20}
              height={20}
            />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default navbar;

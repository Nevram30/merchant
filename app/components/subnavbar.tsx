import React from "react";

type Props = {};

const subnavbar = (props: Props) => {
  return (
    <div className="navbar bg-base-100 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              <a className="p-2">All</a>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Todays Deals</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Costumer Service</summary>
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
              <a>Registry</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className="pr-2">
          <a className="btn">Costumized Product</a>
        </div>
        <div>
          <a className="btn">Get free shipping</a>
        </div>
      </div>
    </div>
  );
};

export default subnavbar;

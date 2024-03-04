import React from "react";
import { Link } from "react-router-dom";

const ProductsTitle = (props) => {
    const {title} = props;
  return (
    <div className="col-span-12 py-5">
      <div className="flex">
        <h1 className="basis-1/2 text-xl font-bold">{title}</h1>
        <span className="basis-1/2 text-xl font-bold">
          <Link className="float-right border-b border-black hover:border-blue-500 hover:text-blue-500 pb-2" to="/">
            Explore All
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ProductsTitle;

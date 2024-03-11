import React, { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";
import ProductsTitle from "../Products/ProductsTitle";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product/api/v1/allbrands")
      .then((res) => res.json())
      .then((data) => setBrands(data.data));
  }, []);
  const randomNumber = Math.floor(Math.random() * 7); // Multiply by 7 to get a range of 0-6

  return (
    <div className="grid grid-cols-12 mx-10 my-10">
      {/* you must have to send a title to show it in the top */}
      <ProductsTitle title={"Top Brands"} />
      <div className="col-span-12">
        <div className="flex">
          {brands.slice(randomNumber, randomNumber + 4).map((item, i) => (
            <SingleBrand key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

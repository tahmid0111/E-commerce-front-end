import React from "react";
import { Link } from "react-router-dom";

const SingleBrand = (props) => {
  const { _id, BrandName, BrandImg } = props.item;
  return (
    <div className="basis-1/4 px-5">
      <Link to={`/searchbybrand/${_id}`}>

        <div className="relative border-4 overflow-hidden rounded-lg my-5">
          <div className="flex justify-center">
            <img
              src={BrandImg}
              alt=""
              className="opacity-80 hover:scale-125 duration-200 w-full h-[180px]"
            />

            <h1 className="absolute bottom-0 text-center text-xl text-white font-bold bg-black w-[100px] py-2 rounded-t-xl">
              {BrandName}
            </h1>
          </div>
        </div>

      </Link>
    </div>
  );
};

export default SingleBrand;

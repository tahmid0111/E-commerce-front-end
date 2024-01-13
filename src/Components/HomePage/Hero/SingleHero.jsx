import React from "react";

const SingleHero = (props) => {
  const { image, title, subTitle, des, _id } = props.item;
  const handleClick = async() => {

  }
  return (
    <div className="relative">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-[500px] bottom-0" />
      <div className="absolute top-10 left-20">
        <h1 className="text-4xl text-black font-bold">{title}</h1>
        <h2 className="text-7xl text-red-500 font-bold py-10">{subTitle}</h2>
        <p className="text-xl text-black font-bold w-3/4">{des}</p>
        <button onClick={() => handleClick()} className="btn btn-secondary text-2xl font-bold px-10 mt-16">Shop Now</button>
      </div>
    </div>
  );
};

export default SingleHero;

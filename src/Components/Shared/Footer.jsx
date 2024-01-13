import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaSquareYoutube,
  FaSquareTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 bg-black pt-10">
      <div className="col-span-3">
        <img src="logo.png" alt="" className="w-1/2" />
      </div>
      <div className="col-span-3 text-white">
        <ul>
          <li className="text-xl font-bold py-2 group">
            <Link className="group-hover:border-b border-gray-500" to="/">
              Home
            </Link>
          </li>
          <li className="text-xl font-bold py-2 group">
            <Link className="group-hover:border-b border-gray-500" to="/login">
              Log In
            </Link>
          </li>
          <li className="text-xl font-bold py-2 group">
            <Link
              className="group-hover:border-b border-gray-500"
              to="/registration">
              Create New Account
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-3 text-lg font-bold text-gray-400">
        <p className="pb-4 text-white">Shop Now LTD</p>
        <p>123 Main Street, Suite 400</p>
        <p>Mountain View, CA 94043</p>
        <p>United States of America (USA)</p>
      </div>
      <div className="col-span-3 text-white">
        <ul className="grid grid-cols-12">
          <li className="py-2 col-span-6">
            <FaFacebookF className="text-3xl text-blue-500" />
            Facebook
          </li>
          <li className="py-2 col-span-6">
            <FaSquareYoutube className="text-3xl text-red-500" />
            Youtube
          </li>
          <li className="py-2 col-span-6">
            <FaInstagram className="text-3xl text-pink-500" />
            Instagram
          </li>
          <li className="py-2 col-span-6">
            <FaSquareTwitter className="text-3xl text-blue-500" />
            Twitter
          </li>
        </ul>
      </div>
      <div className="col-span-12 text-center text-white border-t py-5">
        <p>All right reserved by @tahmid emam</p>
      </div>
    </div>
  );
};

export default Footer;

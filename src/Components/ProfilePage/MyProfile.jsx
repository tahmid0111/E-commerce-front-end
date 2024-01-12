import { useState, useEffect } from "react";
import { getToken, logout } from "../../helper/tokenHelper";
import axios from "axios";

const MyProfile = () => {
  let url = `http://localhost:8080/user/api/v1/readuser`;
  let config = {
    headers: {
      token: getToken(),
    },
  };

  const [details, setDetails] = useState({});
  const { _id, FirstName, LastName, Email, Password, Image, Country, City, Address, PostCode, HouseNo, Phone } = details;

  async function fetchData() {
    try {
      const response = await axios.get(url, config);
      const data = response.data.data;
      setDetails(data);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="px-[100px] mx-auto grid grid-cols-12 py-20">
      <div className="col-span-4">
        <div className="w-full h-[300px] overflow-hidden rounded-t-lg">
          <img src={Image} alt="" />
        </div>
        <div className="bg-blue-400 py-5">
          <h1 className="text-3xl font-bold text-center pb-5">{FirstName} {LastName}</h1>
          <h2 className="text-2xl text-center">{Email}</h2>
        </div>
      </div>
      <div className="col-span-8 ml-10 px-10 py-5 bg-gray-300">
        <div className="">
              <div className="border-b border-red-500 py-3">
                <h1 className="text-xl"><span className="font-bold">Country</span> : {Country}</h1>
              </div>
              <div className="border-b border-red-500 py-3">
                <h1 className="text-xl"><span className="font-bold">City</span> : {City}</h1>
              </div>
              <div className="border-b border-red-500 py-3">
                <h1 className="text-xl"><span className="font-bold">Primary Number</span> : {details?.Phone?.Phone1}</h1>
              </div>
              <div className="border-b border-red-500 py-3">
                <h1 className="text-xl"><span className="font-bold">Extra Number</span> : {details?.Phone?.Phone2}</h1>
              </div>
              <div className="border-b border-red-500 py-3">
                <h1 className="text-xl"><span className="font-bold">Full Address</span> : {Address}</h1>
              </div>
              <div className="flex flex-row">
                <div className="basis-1/2 border-b border-red-500 py-3">
                  <h1 className="text-xl"><span className="font-bold">Post Code</span> : {PostCode}</h1>
                </div>
                <div className="basis-1/2 border-b border-red-500 py-3">
                  <h1 className="text-xl"><span className="font-bold">House Number</span> : {HouseNo}</h1>
                </div>
              </div>
              <div className="flex flex-row mt-5">
                <div className="basis-1/2">
                  <button onClick={() => logout()} className="btn btn-primary btn-outline text-lg font-bold">Edit Details</button>
                </div>
                <div className="basis-1/2">
                  <button onClick={() => logout()} className="btn btn-secondary btn-outline text-lg font-bold float-right">Log Out</button>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

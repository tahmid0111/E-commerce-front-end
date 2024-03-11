import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apiRequest/userApi";

function RegistrationPage() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Phone: "",
    Country: "",
    Image: "",
    Address: "",
    PostCode: "",
    HouseNo: "",
  });
  // getting the confirm password
  const [confirmPass, setConfirmPass] = useState("");
  const handleChange2 = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if the password and confirm password matches
    if (formData.Password !== confirmPass) {
      console.log("Passwords do not match");
    }
    console.log(formData)
    try {
      const result = await RegisterUser(formData)
      console.log(result.data)
      // ... handle successful registration
    } catch (error) {
      console.error("Error submitting registration:", error);
      // Display user-friendly error message
    }
  };

  return (
    <div
      className="bg-yellow-500 py-10 px-4 bg-center bg-cover"
      style={{ backgroundImage: 'url("/bg-05.jpg")' }}>
      <form
        className="mx-auto max-w-3xl p-8 bg-white rounded-lg shadow-md grid grid-cols-12"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6 col-span-12">
          Registration
        </h2>

        <div className="mb-4 mx-2 col-span-6">
          <label
            htmlFor="FirstName"
            className="block text-gray-700 font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="first name"
            required
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label
            htmlFor="LastName"
            className="block text-gray-700 font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="last name"
            required
          />
        </div>
        <div className="mb-4 mx-2 col-span-12">
          <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="enter your email"
            required
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label
            htmlFor="Password"
            className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="password"
            required
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label
            htmlFor="ConfirmPassword"
            className="block text-gray-700 font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="ConfirmPassword"
            name="ConfirmPassword"
            value={confirmPass}
            onChange={handleChange2}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="confirm password"
            required
          />
        </div>
        <div className="mb-4 mx-2 col-span-12">
          <label
            htmlFor="Phone1"
            className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="number"
            id="Phone1"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="contact number"
            required
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label
            htmlFor="Country"
            className="block text-gray-700 font-bold mb-2">
            Country
          </label>
          <input
            type="text"
            id="Country"
            name="Country"
            value={formData.Country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="country"
            required
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label htmlFor="City" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            id="City"
            name="Image"
            value={formData.Image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="city | optional"
          />
        </div>
        <div className="mb-4 mx-2 col-span-12">
          <label
            htmlFor="Address"
            className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="full address | optional"
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label
            htmlFor="PostCode"
            className="block text-gray-700 font-bold mb-2">
            Post Code
          </label>
          <input
            type="text"
            id="PostCode"
            name="PostCode"
            value={formData.PostCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="post code | optional"
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label
            htmlFor="HouseNo"
            className="block text-gray-700 font-bold mb-2">
            House No
          </label>
          <input
            type="text"
            id="HouseNo"
            name="HouseNo"
            value={formData.HouseNo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="house no | optional"
          />
        </div>

        {/* ... other form fields ... */}

        <div className="col-span-12 px-[100px]">
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;

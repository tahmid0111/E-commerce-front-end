import axios from "axios";
import React, { useState } from "react";
// import { FormControl, Label, Input, Button, Group } from "daisyui";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Phone: {
      Phone1: "017",
      Phone2: "017",
    },
    Country: "",
    City: "",
    Address: "",
    PostCode: "",
    HouseNo: "",
  });

  // getting the confirm password
  const [confirmPass, setConfirmPass] = useState('')
  const handleChange2 = (event) => {
    setConfirmPass(event.target.value)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    // If the property is nested, handle the nested update
    if (name.includes('Phone.')) {
      const phoneProperty = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        Phone: {
          ...prevData.Phone,
          [phoneProperty]: value,
        },
      }));
    } else {
      // If not nested, update directly
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  };

const handleSubmit = (event) => {
  event.preventDefault();
      // Check if the password and confirm password match
      if (formData.Password !== confirmPass) {
        console.log('Passwords do not match');
      }else{
      // Proceed with your form submission logic if passwords match
      axios.post('http://localhost:8080/user/api/v1/registeruser', formData)
      console.log(formData);
      }
}

  return (
    <div className="bg-yellow-500 py-10 px-4 bg-center bg-cover" style={{backgroundImage: 'url("/bg-05.jpg")'}}>
      <form
        className="mx-auto max-w-3xl p-8 bg-white rounded-lg shadow-md grid grid-cols-12"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6 col-span-12">Registration</h2>

        <div className="mb-4 mx-2 col-span-6">
          <label htmlFor="FirstName" className="block text-gray-700 font-bold mb-2">
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
          <label htmlFor="LastName" className="block text-gray-700 font-bold mb-2">
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
          <label htmlFor="Password" className="block text-gray-700 font-bold mb-2">
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
          <label htmlFor="ConfirmPassword" className="block text-gray-700 font-bold mb-2">
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
        <div className="mb-4 mx-2 col-span-6">
          <label htmlFor="Phone1" className="block text-gray-700 font-bold mb-2">
          Phone 1
          </label>
          <input
            type="number"
            id="Phone1"
            name="Phone.Phone1"
            value={formData.Phone.Phone1}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="phone"
            required
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label htmlFor="Phone2" className="block text-gray-700 font-bold mb-2">
          Phone2
          </label>
          <input
            type="number"
            id="Phone2"
            name="Phone.Phone2"
            value={formData.Phone.Phone2}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="phone"
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label htmlFor="Country" className="block text-gray-700 font-bold mb-2">
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
            name="City"
            value={formData.City}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="city"
          />
        </div>
        <div className="mb-4 mx-2 col-span-12">
          <label htmlFor="Address" className="block text-gray-700 font-bold mb-2">
          Address
          </label>
          <input
            type="text"
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="full address"
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label htmlFor="PostCode" className="block text-gray-700 font-bold mb-2">
          Post Code
          </label>
          <input
            type="text"
            id="PostCode"
            name="PostCode"
            value={formData.PostCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="post code"
          />
        </div>
        <div className="mb-4 mx-2 col-span-6">
          <label htmlFor="HouseNo" className="block text-gray-700 font-bold mb-2">
          House No
          </label>
          <input
            type="text"
            id="HouseNo"
            name="HouseNo"
            value={formData.HouseNo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="house no"
          />
        </div>

        {/* ... other form fields ... */}

        <div className="col-span-6">
        <button
          type="submit"
          className="w-full py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../helper/tokenHelper";

function LoginPage() {
    let url = `http://localhost:8080/user/api/v1/loginuser`
    let navigate = useNavigate()
  const [formData, setFormData] = useState({
    Email: "",
    Password: ""
  });
``
  const handleChange = (event) => {
    const { name, value } = event.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

const handleSubmit = async(event) => {
    event.preventDefault();

    try {
        let res = await axios.post(url, formData);
        let status = res.data.status
        let token = res.data.data

        if (status === "success") {
          setToken(token)
          navigate('/profile')
        console.log('success')
        } else {
          console.log('something went wrong')
        }

    } catch (error) {
        console.log('error')
    }
}

  return (
    <div className="bg-yellow-500 py-10 px-4 bg-center bg-cover h-[700px]" style={{backgroundImage: 'url("/bg-05.jpg")'}}>
      <form
        className="mx-auto max-w-xl p-8 bg-white rounded-lg shadow-md grid grid-cols-12"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6 col-span-12">Log In</h2>

        <div className="mb-4 mx-2 col-span-12">
          <label htmlFor="FirstName" className="block text-gray-700 font-bold mb-2">
          Email
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="first name"
            required
          />
        </div>
        <div className="mb-4 mx-2 col-span-12">
          <label htmlFor="LastName" className="block text-gray-700 font-bold mb-2">
          Password
          </label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="last name"
            required
          />
        </div>

        <div className="col-span-12 text-center">
        <button
          type="submit"
          className="w-full py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          Login
        </button>
        </div>

        <div className="col-span-12 text-center pt-5 pb-2">
        <p className="font-bold">Don't have an account</p>
        </div>

        <div className="col-span-12 text-center">
          <Link to="/registration">
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              Register
            </button>
          </Link>
        </div>
{/* 
        <div className="col-span-6">
        <button
          type="submit"
          className="w-full py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          Register
        </button>
        </div> */}
      </form>
    </div>
  );
}

export default LoginPage;


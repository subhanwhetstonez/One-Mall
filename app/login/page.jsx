"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGoogle, FaFacebook, FaItunes } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("DONE DONE DONE");
        router.push("/fetch");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Login failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-[60%] m-auto overflow-hidden">
      <div className="w-full lg:w-[62.1%]">
        <img
          src="/login.jpg"
          alt="beautiful"
          width="100%"
          className="h-80 object-cover lg:h-full"
        />
      </div>
      <div className="text-center text-4xl bg-[#FF5757] w-full h-[40rem] text-white p-12">
        <h1 className="font-bold">Welcome Back</h1>

        <h3 className="text-base">Join the world's largest community</h3>

        <form
          className="flex-1 mt-6 gap-6 text-xl text-left lg:px-32"
          onSubmit={handleSubmit}
        >
          <div>
            <label>Enter Email :</label>
            <br />
            <input
              type="email"
              placeholder="Username, Email or Phone no."
              className="rounded-lg p-2 w-full text-black"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <br />

          <div>
            <label>Enter Password :</label>

            <br />

            <input
              type="password"
              placeholder="Enter Registered Password"
              className="rounded-lg p-2 w-full text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex justify-center m-auto mt-10 bg-[#F13C3C] p-3 rounded-md shadow-sm shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2 w-2/4 "
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center">
          <hr className="w-1/4" />
          <p className="text-xl p-6">Or Sign In using</p>
          <hr className="w-1/4" />
        </div>
        <div className="flex gap-6 justify-between w-2/4 m-auto mt-2 hover:cursor-pointer">
          <FaGoogle />
          <FaFacebook />
          <FaItunes />
        </div>
        <div>
          <p className="text-lg mt-6">
            Haven't Registered?{" "}
            <a href="/signup" className="text-white font-bold">
              REGISTER HERE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

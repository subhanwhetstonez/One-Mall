"use client";
import Image from "next/image";
import { FaGoogle, FaFacebook, FaItunes, FaSign } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/user/register", {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess("User created successfully!");
        setError("");
        // Optionally, clear the form fields after successful registration
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else if (response.status === 409) {
        setError("User already exists.");
        setSuccess("");
      } else {
        setError("An error occurred. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      setError("Error submitting form: ", error);
      setSuccess("");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-[60%] m-auto overflow-hidden">
      <div className="w-full lg:w-[62.1%]">
        <img
          src="/signup.jpg"
          alt="beautiful"
          className="w-full lg:h-full h-52 object-cover hover:object-left-bottom hover:animate-ping "
        />
      </div>
      <div className="text-center text-4xl bg-[#FF5757] w-full h-[40rem] text-white p-12">
        <h1 className="font-bold">Welcome Back</h1>

        <h3 className="text-base">Join the world's largest community</h3>

        <form
          className="grid grid-cols-4 gap-6 text-xl text-left px-4 mt-10"
          onSubmit={handleSubmit}
        >
          <div className="col-span-2">
            <label>Enter Username :</label>
            <br />
            <input
              type="text"
              placeholder="Username Here"
              className="rounded-lg p-2 w-full text-sm text-black"
              value={username}
              onChange={(x) => setUsername(x.target.value)}
            />
          </div>

          <div className="col-span-2">
            <label>Enter Password :</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              className="rounded-lg p-2 w-full text-sm text-black"
              value={password}
              onChange={(x) => setPassword(x.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label>Confirm Password :</label>
            <br />
            <input
              type="password"
              placeholder="Repeat Password"
              className="rounded-lg p-2 w-full text-sm text-black"
              value={confirmPassword}
              onChange={(x) => setConfirmPassword(x.target.value)}
            />
          </div>

          <div className="col-span-2">
            <label>Enter Email :</label>
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              className="rounded-lg p-2 w-full text-sm text-black"
              value={email}
              onChange={(x) => setEmail(x.target.value)}
            />
          </div>
          <div className="col-span-4 text-center">
            {error && (
              <p className="text-white mt-4">
                <FaSign /> {error}
              </p>
            )}
            {success && <p className="text-green-600 mt-4">{success}</p>}
          </div>
          <div className="col-span-4">
            <button
              className="flex justify-center m-auto mt-10 bg-[#F13C3C] p-3 rounded-md shadow-sm shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2 w-2/4 "
              type="submit"
            >
              SignUp
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center">
          <hr className="w-1/4" />
          <p className="text-xl p-6">Or Sign Up using</p>
          <hr className="w-1/4" />
        </div>
        <div className="flex gap-6 justify-between w-1/4 m-auto mt-2 hover:cursor-pointer">
          <FaGoogle />
          <FaFacebook />
          <FaItunes />
        </div>
        <div>
          <p className="text-lg mt-6">
            Already Registered?{" "}
            <a href="/signup" className="text-white font-bold">
              Sign up HERE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

import React from "react";
import Image from "next/image";
import { FaGoogle, FaFacebook, FaItunes } from "react-icons/fa";
function login() {
  return (
    <div className="flex w-[60%] m-auto overflow-hidden">
      <div className="w-[62.1%]">
        <img src="/login.jpg" alt="beautiful" />
      </div>
      <div className="text-center text-4xl bg-[#FF5757] w-full h-[40rem] text-white p-12">
        <h1 className="font-bold">Welcome Back</h1>

        <h3 className="text-base">Join the world's largest community</h3>

        <form className="flex-1 mt-6 gap-6 text-xl text-left px-32">
          <div>
            <label>Enter Username :</label>
            <br />
            <input
              type="text"
              placeholder="Username, Email or Phone no."
              className="rounded-lg p-2 w-full text-black"
            />
          </div>

          <br />

          <div>
            <label>Enter Password :</label>

            <br />

            <input
              type="text"
              placeholder="Enter Registered Password"
              className="rounded-lg p-2 w-full text-black"
            />
          </div>

          <div>
            <button className="flex justify-center m-auto mt-10 bg-[#F13C3C] p-3 rounded-md shadow-sm shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2 w-2/4 ">
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center">
          <hr className="w-1/4" />
          <p className="text-xl p-6">Or Sign In using</p>
          <hr className="w-1/4" />
        </div>
        <div className="flex gap-6 justify-between w-1/4 m-auto mt-2 hover:cursor-pointer">
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

export default login;

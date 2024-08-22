import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <nav className="bg-[#444444] flex justify-around m-auto items-center text-white">
        <a href="/home">
          <div className="flex items-center gap-2">
            <img src="/logo1.png" alt="One Mall" className="h-28" />
            <span>One Mall</span>
          </div>
        </a>
        <div>
          <ul className="flex gap-8">
            <Link href={"/home"} className="p-2 hover:text-[#F13C3C] ">
              Home
            </Link>
            <Link href={"/products"} className="p-2 hover:text-[#F13C3C] ">
              Products
            </Link>
          </ul>
        </div>
        <div className="flex gap-6">
          <Link
            href={"/login"}
            className="flex justify-center animate-bounce hover:animate-none bg-[#F13C3C] p-3 rounded-md shadow-sm shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2"
          >
            Login
          </Link>
          <Link
            href={"/signup"}
            className="flex justify-center animate-bounce hover:animate-none bg-[#F13C3C] p-3 rounded-md shadow-sm shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

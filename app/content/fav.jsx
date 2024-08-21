"use client";

import { FaHeart, FaHeartbeat } from "react-icons/fa";

import { useState } from "react";

export default function FavouriteBtn() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button
      onClick={setIsFavorite}
      className="flex items-center bg-[#F13C3C] p-3 rounded-md shadow-sm shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2"
    >
      <p className="mr-4">Favourite</p>{" "}
      {isFavorite ? <FaHeartbeat /> : <FaHeart />}
    </button>
  );
}

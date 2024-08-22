"use client";
import React from "react";

async function singleProduct(params) {
  fetch(`https://fakestoreapi.com/products/${params}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

const singleProductHere = () => {
  return (
    <div>
      <button onClick={singleProduct}>See Console</button>
    </div>
  );
};

export default singleProductHere;

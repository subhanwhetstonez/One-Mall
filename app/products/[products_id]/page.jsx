"use client";
import React from "react";

async function fetchData(req, res) {
  const id = req.params;
}
async function singleProduct(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
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

import React from "react";

async function singleProduct(params) {
  fetch(`https://fakestoreapi.com/products/${params}`)
    .then((res) => res.json())
    .then((json) => console.log(json));

  return <div> </div>;
}

export default singleProduct;

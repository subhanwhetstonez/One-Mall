const productlist = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const product = response.json();
  return product;
};

export default productlist;

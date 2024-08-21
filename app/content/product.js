const productlist = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = response.json();
  return product;
};

export default productlist;

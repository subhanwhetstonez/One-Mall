import { useEffect } from "react";
import axios from "axios";

function products() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setMyData(res.data));
  }, []);

  function product() {
    const { id, image, title, price, description } = product;
    myData.map(product);
    return product;
  }
  return product;
}

export default products;

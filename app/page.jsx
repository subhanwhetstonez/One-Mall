import Image from "next/image";
import Link from "next/link";
import pool from "@/utils/postgres";

const fetchDataDromDB = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to Database!");

    const result = await client.query("SELECT * FROM public.user");
    const data = result.rows;
    console.log("Fetched data:", data);

    client.release();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

fetchDataDromDB()
  .then((data) => {
    console.log("Received data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

export default function Home() {
  return (
    <div className="flex-1 items-center text-center my-36">
      <img
        src="../logo1.png"
        alt=""
        className="m-auto w-[17.7%] animate-pulse"
      />
      <h1 className="font-bold text-3xl">Welcome To OneMall</h1>
      <br />
      <Link
        href={"/home"}
        className="p-4 text-white bg-[#444444] hover:bg-[#646464] rounded-xl"
      >
        Home
      </Link>
    </div>
  );
}

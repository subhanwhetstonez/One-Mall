import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 items-center text-center my-36">
      <img src="../logo1.png" alt="" className="m-auto w-[17.7%]" />
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

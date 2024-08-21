import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 w-2/4 m-auto my-44">
      <h1 className="p-6 font-bold text-2xl rounded-2xl bg-[#F13C3C] shadow-[#FF5757] shadow-lg text-red-100 text-center">
        {" "}
        Welcome to One Mall{" "}
      </h1>
      <p className="p-6 rounded-2xl bg-[#F13C3C] shadow-[#FF5757] shadow-lg text-red-100 text-center">
        A Online store with absolute quality products, The variety of Product
        categories
        <br />
        Such as Perfumes, Watches, Bags and many more upcoming. We make sure to
        provide you
        <br />
        with the best of best. So, Don't think just Buy.
      </p>

      <Link
        href={"/products"}
        className="flex justify-center m-auto text-white bg-[#F13C3C] p-3 rounded-md shadow-sm shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2 w-1/4"
      >
        Products
      </Link>
    </div>
  );
};

export default Home;

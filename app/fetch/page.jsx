import React from "react";
import axios from "axios";

export default async function Backend() {
  let data = [];

  try {
    const response = await axios.get("http://localhost:9292/student/1");
    data = Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="h-[40rem]">
      {data.map((student, index) => (
        <div key={index} className="bg-red-500 w-1/2 m-auto text-center h-full">
          <p className="text-white text-lg bg-red-400 w-fit m-auto px-12 py-4 border-r-2 border-l-2 border-black shadow-lg shadow-black">
            {student.first_name}
          </p>
          <p className="text-white text-lg bg-red-400 w-fit m-auto px-12 py-4 border-r-2 border-l-2 border-black shadow-lg shadow-black">
            {student.last_name}
          </p>
          <p className="text-white text-lg bg-red-400 w-fit m-auto px-12 py-4 border-r-2 border-l-2 border-black shadow-lg shadow-black">
            {student.email}
          </p>
          <p className="text-white text-lg bg-red-400 w-fit m-auto px-12 py-4 border-r-2 border-l-2 border-black shadow-lg shadow-black">
            {student.phone_no}
          </p>
          <p className="text-white text-lg bg-red-400 w-fit m-auto px-12 py-4 border-r-2 border-l-2 border-b-2 border-black shadow-lg shadow-black">
            {student.total_marks}
          </p>
          <h1 className=" mt-8 text-white text-3xl font-bold">
            Student Information
          </h1>
        </div>
      ))}
    </div>
  );
}

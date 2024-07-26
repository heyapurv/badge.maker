
import MainPage from "@/components/MainPage";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className=" flex flex-col  md:hidden h-screen items-center justify-center">
        <h1 className="text-2xl py-2 underline">Badge Generator</h1>
       <h1>Oops...</h1>
       <p>This website is not mobile compatible.</p>
       <p>Please view it on Laptop or Desktop.</p>
      </div>
     <div className="md:block hidden">
     <MainPage/>
     </div>

    </div>
  );
}

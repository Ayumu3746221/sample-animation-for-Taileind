import React from "react";
import ListComponent from "./Description";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex justify-center items-center mt-64">
        <Image
          src="/256px-Tailwind_CSS_Logo.svg.png"
          alt="image of tailwind icon"
          width={128}
          height={128}
          className="box-content p-4 m-2 motion-preset-bounce motion-duration-700"
        />
        <div>
          <h2 className="p-4 m-2 text-7xl motion-preset-slide-left hover:motion-preset-expand motion-duration-1000">
            Sample Animation for TailWind
          </h2>
        </div>
      </div>
      <ListComponent />
    </div>
  );
};

export default HomeComponent;

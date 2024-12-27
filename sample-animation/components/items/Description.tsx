import Link from "next/link";
import React from "react";

const ListComponent = () => {
  return (
    <ul className="text-xl list-disc p-4 m-4 motion-preset-fade motion-duration-500">
      <li>
        This site repository :{" "}
        <Link
          href="https://github.com/Ayumu3746221/sample-animation-for-Tailwind.git"
          className="text-blue-300 hover:text-blue-400 hover:motion-preset-expand"
        >
          to repository
        </Link>
      </li>
      <li>
        Tailwind motion :{" "}
        <Link
          href="https://rombo.co/tailwind/"
          className="text-blue-300 hover:text-blue-400 hover:motion-preset-expand"
        >
          https://rombo.co/tailwind
        </Link>
      </li>
    </ul>
  );
};

export default ListComponent;

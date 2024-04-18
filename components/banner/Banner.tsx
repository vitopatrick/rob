import React from "react";

interface IBanner {
  name: string;
}

export default function Banner({ name = "Contact" }: IBanner) {
  return (
    <div className="bg-green-700 text-white">
      <p className="w-11/12 mx-auto p-4 text-xl lg:text-3xl">{name}</p>
    </div>
  );
}

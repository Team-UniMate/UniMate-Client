import React from "react";
import { twobedIMG } from "../../../data/bedimages";
import Image from "next/image";

const Twobed = () => {
  return (
    <div>
      <div className="h-40 bg-red-100 mt-4">
        {twobedIMG.map((el) => (
          <Image src={el.src} width={500} height={200} alt="twobedimg" />
        ))}
      </div>
    </div>
  );
};

export default Twobed;

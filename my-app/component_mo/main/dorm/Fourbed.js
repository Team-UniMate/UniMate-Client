import React from "react";
import { fourbedIMG } from "../../../data/bedimages";
import Image from "next/image";

const Fourbed = () => {
  return (
    <div>
      <div className="h-40 bg-red-100 mt-4">
        {fourbedIMG.map((el) => (
          <Image src={el.src} width={500} height={200} alt="fourbed" />
        ))}
      </div>
    </div>
  );
};

export default Fourbed;

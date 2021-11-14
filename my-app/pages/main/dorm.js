import React, { useState, useEffect, useRef } from "react";

/*component*/
import HeadCont from "../../component_mo/common/HeadCont";
import Twobed from "../../component_mo/main/dorm/Twobed";
import Fourbed from "../../component_mo/main/dorm/Fourbed";
const dorm = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  const [twobed, setTwobed] = useState(true);
  const [fourbed, setFourbed] = useState(false);
  const [color1, setColor1] = useState("#8e8cf4");
  const [color2, setColor2] = useState("white");

  const page1 = () => {
    setTwobed(true);
    setFourbed(false);
    setColor1("#8e8cf4");
    setColor2("white");
  };
  const page2 = () => {
    setFourbed(true);
    setTwobed(false);
    setColor2("#8e8cf4");
    setColor1("white");
  };
  const element = useRef();
  const howmanybed = [
    {
      id: 1,
      tabpage: <Twobed />,
    },
    {
      id: 2,
      tabpage: <Fourbed />,
    },
  ];
  return (
    <div className="items-center relative">
      <HeadCont leftIcon={prevIcon} headerTitle={"기숙사 시설"} />
      <div className="mt-14 w-full flex font-bold">
        <div
          ref={element}
          className=" w-1/2 personal_cont flex justify-center py-2 cursor-pointer"
          style={{ backgroundColor: color1 }}
          onClick={() => {
            page1();
          }}
        >
          2인실
        </div>
        <div
          ref={element}
          className="w-1/2 personal_tab flex justify-center py-2 cursor-pointer"
          style={{ backgroundColor: color2 }}
          onClick={() => {
            page2();
          }}
        >
          4인실
        </div>
      </div>
      {twobed ? howmanybed[0].tabpage : null}
      {fourbed ? howmanybed[1].tabpage : null}
    </div>
  );
};

export default dorm;

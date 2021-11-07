import React,{useState, useEffect,useRef} from 'react';

/*component*/
import HeadCont from '../../component_mo/common/HeadCont';
import Rooms from '../../component_mo/watchlist/Rooms';
import Roommates from '../../component_mo/watchlist/Roommates';

const watchlist = () => {
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
      tabpage: (
        <Rooms/>
      )
    },
    {
      id: 2,
      tabpage: (
        <Roommates/>
      )
    }
  ];
  return (
    <div className="items-center relative">
      <HeadCont headerTitle={"관심목록"}/>
      <div className="mt-14 w-full flex font-bold">
        <div ref={element}
          className=" w-1/2 personal_cont flex justify-center py-2 cursor-pointer"
          style={{ backgroundColor: color1 }}
          onClick={() => {
            page1();
          }}
        >
        방
        </div>
        <div
          ref={element}
          className="w-1/2 personal_tab flex justify-center py-2 cursor-pointer"
          style={{ backgroundColor: color2 }}
          onClick={() => {
            page2();
          }}
        >
          룸메이트
        </div>
      </div>
    {twobed ? howmanybed[0].tabpage : null}
    {fourbed ? howmanybed[1].tabpage : null}
  </div>
   
  )
}

export default watchlist

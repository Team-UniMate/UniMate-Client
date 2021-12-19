import React, { useState, useEffect } from "react";
import axios from "axios";
import common from "../../data/common";
/*component*/
import HeadCont from "../../component_mo/common/HeadCont";
import PostRoommate from "../../component_mo/main/findroommate/postRoommate";
import RoommatePost from "../../component_mo/roommate/RoommatePost";
const roommate = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  const [roommateModal, setRoommateModal] = useState(false);
  const showRoommatePost = () => {
    setRoommateModal(!roommateModal);
  };
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios
        .get(common.baseURL + "post")
        .then((res) => setResults(res.data.results))
        .catch((error) => console.log(error));
    };
    getData();
  }, []);
  return (
    <>
      <div className="items-center h-screen">
        <HeadCont leftIcon={prevIcon} headerTitle={"룸메이트 찾기"} />
        <div className="py-2 mt-20 ">
          <input
            type="text"
            className=" py-1.5 w-full px-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100"
            placeholder="필터기능입니다."
          />
        </div>
        {results.map((el, index) => (
          <RoommatePost result={el} key={index} />
        ))}
        <span
          className="rounded-full cursor-pointer keycolor block filter drop-shadow-xl w-16 h-16 bg-blue-100 fixed bottom-4 right-4 flex justify-center items-center"
          onClick={showRoommatePost}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </span>
      </div>
      {roommateModal ? (
        <PostRoommate
          showRoommatePost={showRoommatePost}
          setResults={setResults}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default roommate;

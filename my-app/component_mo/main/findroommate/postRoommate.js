import React from "react";
import axios from "axios";
import common from "../../../data/common";
const postRoommate = ({ showRoommatePost }) => {
  const onSubmitHandler = () => {
    // axios.post()
  };
  return (
    <div className=" fixed top-0 left-0 w-full h-full z-50">
      <div className="whiteback w-full h-full bg-black bg-opacity-25">
        <div className=" p-4 w-3/4 h-1/3 bg-white fixed rounded relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between">
            <h1 className="pb-8 font-bold text-lg">
              룸메이트를 찾는 글을 작성하세요.
            </h1>
            <svg
              onClick={showRoommatePost}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <form onSubmit={onSubmitHandler}>
            <textarea className=" w-full border h-32 py-2 px-4 text-sm overflow-y-scroll" />
            <button
              type="submit"
              className="rounded keycolor px-6 py-2 absolute bottom-4 right-4  hover:bg-purple-600 transition duration-150 ease-in-out text-white"
            >
              post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default postRoommate;

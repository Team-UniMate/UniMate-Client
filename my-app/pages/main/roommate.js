import React, { useState } from "react";
/*component*/
import HeadCont from "../../component_mo/common/HeadCont";
import PostRoommate from "../../component_mo/main/findroommate/postRoommate";
const roommate = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  const [roommateModal, setRoommateModal] = useState(false);
  const showRoommatePost = () => {
    setRoommateModal(!roommateModal);
  };
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
        <div className="w-full border-black bg-gray-100">
          <div className="h-52 py-4 bg-white ">
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col text-xs">
                <span>홍길동</span>
                <span>컴퓨터공학과</span>
                <span>남성 한국</span>
              </div>
            </div>
            <div className=" w-full border h-1/2 py-2 px-4 text-sm overflow-y-scroll">
              군대 갔다 온 복학생 24살입니다.
              <br />
              게임 좋아하시는 분 구합니다.
              <br />
              2인실 희망하고 있습니다.
              <br />
              군대 갔다 온 복학생 24살입니다.
              <br />
              게임 좋아하시는 분 구합니다.
              <br />
            </div>
            <div className="w-full flex justify-between items-center py-3">
              <div className="flex w-16 justify-between">
                <svg
                  className="cursor-pointer h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg
                  className="cursor-pointer h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>
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
        <PostRoommate showRoommatePost={showRoommatePost} />
      ) : (
        ""
      )}
    </>
  );
};

export default roommate;

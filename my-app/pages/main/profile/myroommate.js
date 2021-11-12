import React from "react";
/*component*/
import HeadCont from "../../../component_mo/common/HeadCont";

const myroommate = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <div className="w-full h-screen  items-center bg-gray-100">
      <HeadCont leftIcon={prevIcon} headerTitle={"내 룸메이트 찾기"} />
      <div className="mt-14">
        <div className="mb-6 bg-white py-2">
          <div className="flex">
            <span className="block w-14 h-14 mr-2 bg-gray-100">image</span>
            <div className="text-sm">
              <span className="block">프렌즈234</span>
              <span className="block">컴퓨터공학과</span>
              <span className="block">남성 한국</span>
            </div>
          </div>
          <div className="py-8">
            4학년 27살입니다. 축구 좋아하고, 담배 안피고 코 안고는 분 좋습니다.
            2인실 희망합니다.
          </div>

          <div className="border-t py-4 relative">
            <div>
              <span className="p-2 bg-gray-100">좋아요</span>
              <span className="p-2 bg-gray-100">message</span>
            </div>
            <span className="p-2 bg-red-100 absolute top-2 right-0">
              좋아요(빈하트)
            </span>
          </div>
        </div>
        <div className="mb-6 bg-white py-2">
          <div className="flex">
            <span className="block w-14 h-14 mr-2 bg-gray-100">image</span>
            <div className="text-sm">
              <span className="block">프렌즈234</span>
              <span className="block">컴퓨터공학과</span>
              <span className="block">남성 한국</span>
            </div>
          </div>
          <div className="py-8">
            4학년 27살입니다. 축구 좋아하고, 담배 안피고 코 안고는 분 좋습니다.
            2인실 희망합니다.
          </div>

          <div className="border-t py-4 relative">
            <div>
              <span className="p-2 bg-gray-100">좋아요</span>
              <span className="p-2 bg-gray-100">message</span>
            </div>
            <span className="p-2 bg-red-100 absolute top-2 right-0">
              좋아요(빈하트)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myroommate;

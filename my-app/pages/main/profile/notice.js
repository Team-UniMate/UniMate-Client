import React from "react";
/*component*/
import HeadCont from "../../../component_mo/common/HeadCont";

const notice = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <div className="w-full h-screen  items-center  ">
      <HeadCont leftIcon={prevIcon} headerTitle={"개인정보 관리"} />
      <div className="mt-14 font-bold">
        [공지] 2021-2학기 기숙사 신청기간
        <span className="text-sm inline-block ml-4">2021.08.29</span>
      </div>
    </div>
  );
};

export default notice;

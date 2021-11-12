import React from "react";
/*component*/
import HeadCont from "../../../component_mo/common/HeadCont";

const myinfo = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <div className="w-full h-screen  items-center  ">
      <HeadCont leftIcon={prevIcon} headerTitle={"개인정보 관리"} />
      <div className="mt-14">
        <h1 className="font-bold pb-2">계정정보</h1>
        <table className="flex flex-col">
          <tr className="pb-2 inline-block">
            <td className="w-20">이메일</td>
            <td>abcd@naver.com</td>
          </tr>
          <tr className="pb-2 inline-block">
            <td className="w-20">이름</td>
            <td>홍길동</td>
          </tr>
          <tr className="pb-2 inline-block">
            <td className="w-20">성별</td>
            <td>남</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default myinfo;

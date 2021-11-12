import React from "react";
/*component*/
import HeadCont from "../../../component_mo/common/HeadCont";
import BasicBTN2 from "../../../component_mo/common/BasicBTN2";
const showprofile = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <div className="w-full h-screen  items-center relative ">
      <HeadCont leftIcon={prevIcon} headerTitle={"프로필 정보"} />

      <div className="mt-14 py-6 flex flex-col items-center ">
        <span className="w-20 h-20 bg-gray-100"></span>
        <span className="block pb-2">프렌즈cvdv</span>
        <div>
          <span className="bg-gray-100 rounded-3xl p-2 mx-1">남성</span>
          <span className="bg-gray-100 rounded-3xl p-2 mx-1">학생</span>
        </div>
      </div>
      <span className="bg-gray-200 h-4 block"></span>
      <div className="bg-white mt-4 ">
        <div className="py-4 px-4">
          <table className="border-b py-4 w-full inline-block">
            <tr>
              <td className="w-24 py-2">성향</td>
              <td>
                <span className=" p-2 span rounded-3xl keyText keyBorder border mr-2">
                  온화한
                </span>
                <span className=" p-2 span rounded-3xl keyText keyBorder border mr-2">
                  적극적
                </span>
                <span className=" p-2 span rounded-3xl keyText keyBorder border mr-2">
                  사교적인
                </span>
              </td>
            </tr>
            <tr>
              <td className="w-24 py-2">관심사</td>
              <td>
                <span className=" p-2 span rounded-3xl keycolor text-white mr-2">
                  커피
                </span>
                <span className=" p-2 span rounded-3xl keycolor text-white mr-2">
                  패션
                </span>
                <span className=" p-2 span rounded-3xl keycolor text-white mr-2">
                  여행
                </span>
              </td>
            </tr>
          </table>
          <table className="py-4 inline-block w-full">
            <tr className="w-full">
              <td className="w-24 py-2">직업</td>
              <td className="w-2/3">컴퓨터공학과</td>
            </tr>
            <tr className="w-full">
              <td className="w-24 py-2">생활패턴</td>
              <td className="w-2/3">아침형</td>
            </tr>
            <tr className="w-full">
              <td className="w-24 py-2">흡연 여부</td>
              <td className="w-2/3">비흡연</td>
            </tr>
            <tr className="w-full">
              <td className="w-24 py-2">반려동물</td>
              <td className="w-2/3">없음</td>
            </tr>
            <tr className="w-full">
              <td className="w-24 py-2">자기소개</td>
              <td className="w-2/3">안녕하세요 반갑습니다.</td>
            </tr>
          </table>
          <BasicBTN2>수정하기</BasicBTN2>
        </div>
      </div>
    </div>
  );
};

export default showprofile;

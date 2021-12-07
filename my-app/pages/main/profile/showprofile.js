import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import common from "../../../data/common";
/*component*/
import HeadCont from "../../../component_mo/common/HeadCont";
import BasicBTN2 from "../../../component_mo/common/BasicBTN2";
const showprofile = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  const userId = useSelector((state) => state.app.applogin.user_idx);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      await axios
        //get /profile 로 변경해야되는데 무한로딩걸림
        .get(common.baseURL + "profile?user_idx=" + userId)
        .then((res) => {
          console.log(res.data.results);
          setUserInfo(res.data.results[0]);
        })
        .catch((error) => console.log(error));
    };
    getUserInfo();
  }, [userId]);

  let personality = String(userInfo.personality_select).split(",");
  let interest = String(userInfo.interest_select).split(",");
  let lifestyle = String(userInfo.life_style_select).split(",");
  return (
    <div className="w-full h-screen  items-center relative ">
      <HeadCont leftIcon={prevIcon} headerTitle={"프로필 정보"} />

      <div className="mt-14 py-6 flex flex-col items-center ">
        <span className="w-20 h-20 bg-gray-100"></span>
        <span className="block pb-2">{userInfo.user_name}</span>
        <div>
          <span className="bg-gray-100 rounded-3xl p-2 mx-1">
            {userInfo.sex}
          </span>
          <span className="bg-gray-100 rounded-3xl p-2 mx-1">
            {userInfo.college_name}
          </span>
        </div>
      </div>
      <span className="bg-gray-200 h-4 block"></span>
      <div className="bg-white mt-4 ">
        <div className="py-4 px-4">
          <table className="border-b py-4 w-full inline-block">
            <tbody>
              <tr>
                <td className="w-24 py-2">성향</td>
                <td>
                  {personality.map((el, index) => (
                    <span
                      key={index}
                      className=" p-2 span rounded-3xl keycolor text-white mr-2"
                    >
                      {el}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <td className="w-24 py-2">관심사</td>
                <td>
                  {interest.map((el, index) => (
                    <span
                      key={index}
                      className=" p-2 span rounded-3xl keycolor text-white mr-2"
                    >
                      {el}
                    </span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="py-4 inline-block w-full">
            <tbody>
              <tr className="w-full">
                <td className="w-24 py-2">직업</td>
                <td className="w-2/3">{userInfo.major_name}</td>
              </tr>
              <tr className="w-full">
                <td className="w-24 py-2">생활패턴</td>
                <td className="w-2/3">{lifestyle[0]}</td>
              </tr>
              <tr className="w-full">
                <td className="w-24 py-2">흡연 여부</td>
                <td className="w-2/3">{lifestyle[1]}</td>
              </tr>
              {/* <tr className="w-full">
                <td className="w-24 py-2">반려동물</td>
                <td className="w-2/3">없음</td>
              </tr> */}
              <tr className="w-full">
                <td className="w-24 py-2">자기소개</td>
                <td className="w-2/3">{userInfo.self_introduce}</td>
              </tr>
            </tbody>
          </table>
          <BasicBTN2>수정하기</BasicBTN2>
        </div>
      </div>
    </div>
  );
};

export default showprofile;

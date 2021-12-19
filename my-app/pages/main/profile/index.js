import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import common from "../../../data/common";
/*component*/
import HeadCont from "../../../component_mo/common/HeadCont";
import MainNav from "../../../component_mo/common/MainNav";

const profile = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  const router = useRouter();
  const user = useSelector((state) => state.app.applogin);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAccessible, setIsAccessible] = useState(false);
  useEffect(() => {
    if (user.length === 0 || user === undefined) {
      router.push("/login/signin");
    } else {
      setIsAccessible(true);
    }
    const getImage = () => {
      axios
        .get(common.baseURL + `profile?user_idx=${user.user_idx}`)
        .then((res) => setImage(res.data.results[0].profile_images[0].img_path))
        .catch((error) => console.log(error.message));
    };
    getImage();
  }, []);
  console.log(user);
  return (
    <>
      {/* {isAccessible ? ( */}
      <div className="items-center h-screen px-4">
        <HeadCont headerTitle={"프로필"} />
        <div className="flex items-center mt-14 py-2">
          <img className="h-14 w-14 mr-4" src={image} alt="image"></img>
          <span className="font-bold">{user.user_id}</span>
          <button
            className="p-2 border rounded ml-28"
            onClick={() => {
              router.push("/main/profile/showprofile");
            }}
          >
            프로필 보기
          </button>
        </div>
        <div>
          <ul className="py-2">
            <li className="bg-white py-4 border-b border-t">
              <span
                className="w-full block cursor-pointer"
                onClick={() => {
                  router.push("/main/profile/myinfo");
                }}
              >
                계정정보
              </span>
            </li>
            <li className="bg-white py-4 border-b w-full">
              <span
                className="w-full block cursor-pointer"
                onClick={() => {
                  router.push("/main/profile/myroommate");
                }}
              >
                내 룸메이트 찾기 글
              </span>
            </li>
            <li className="bg-white py-4 border-b">
              <span
                className="w-full block cursor-pointer"
                onClick={() => {
                  router.push("/main/profile/notice");
                }}
              >
                공지사항
              </span>
            </li>
            <li
              className="bg-white py-4 border-b cursor-pointer"
              onClick={() => {
                alert("logout");
                router.push("/login/signin");
              }}
            >
              로그아웃
            </li>
          </ul>
          <MainNav />
        </div>
      </div>
      {/* ) : (
        ""
      )} */}
    </>
  );
};

export default profile;

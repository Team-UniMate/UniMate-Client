import router from "next/router";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
/*component*/
import HeadCont from "../../component_mo/common/HeadCont";
import BasicBTN2 from "../../component_mo/common/BasicBTN2";
const visit = () => {
  const router = useRouter();
  const user = useSelector((state) => state.app.applogin);
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center  ">
      <HeadCont leftIcon={prevIcon} headerTitle={"프로필 정보"} />
      <div className="mt-14 flex items-center flex-col">
        <span className="w-20 h-20 bg-gray-100 block flex justify-center items-center">
          no image
        </span>
        <h1>{user.user_id}님</h1>
        <div className="py-12 text-center">
          <p>아직 프로필을 작성하지 않으셨네요!</p>
          <p>프로필을 먼저 작성하면 메시지를 보낼수 있어요!</p>
        </div>
      </div>
      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
          onClick={() => {
            router.push("/visit/1");
          }}
        >
          프로필등록하기
        </button>
      </div>
    </div>
  );
};

export default visit;

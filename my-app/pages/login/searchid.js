import React, { useState } from "react";
import axios from "axios";
import common from "../../data/common";
/*component*/
import HeadCont from "../../component_mo/common/HeadCont";

const searchid = () => {
  const [findId, setFindId] = useState({
    name: "",
    email: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFindId({ ...findId, [name]: value });
  };
  console.log(findId);
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <div className="px-4 items-center relative">
      <HeadCont leftIcon={prevIcon} headerTitle={"아이디 찾기"} />
      <div className="mt-32 w-full">
        <h2 className="font-bold">등록했던 이메일로 ID를 보내드립니다.</h2>
        <form className="mt-8">
          <div className="w-full h-14 border rounded-3xl tracking-wide ">
            <label htmlFor="ID" className="w-1/5 text-sm inline-block px-4">
              NAME
            </label>
            <input
              id="NAME"
              className="w-4/5 h-full rounded-3xl px-4"
              name="name"
              value={findId.name}
              onChange={handleInput}
            />
          </div>
          <div className="w-full h-14 border rounded-3xl tracking-wide mt-6 ">
            <label htmlFor="ID" className="w-1/5 text-sm inline-block px-4">
              EMAIL
            </label>
            <input
              id="ID"
              className="w-4/5 h-full rounded-3xl px-4"
              name="email"
              value={findId.email}
              onChange={handleInput}
            />
          </div>
          <button className="w-full py-4 keycolor text-white rounded-3xl font-bold tracking-wide text-center mt-8 hover:bg-purple-600 transition duration-150 ease-in-out">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default searchid;

import React, { useState } from "react";
import axios from "axios";
import common from "../../data/common";
/*component*/
import HeadCont from "../../component_mo/common/HeadCont";

const searchpass = () => {
  const [findPass, setFindPass] = useState({
    user_id: "",
    user_mail: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFindPass({ ...findPass, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post(common.baseURL + "mail/forgot-password", findPass)
      .then((res) => console.log(res))
      .catch((error) => console.log(errorMessage));
  };

  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <div className="px-4 items-center relative">
      <HeadCont leftIcon={prevIcon} headerTitle={"비밀번호 찾기"} />
      <div className="mt-32 w-full">
        <h2 className="mt-14 font-bold">
          등록하신 아이디와 이메일 주소를 입력해주세요.
        </h2>
        <form className="mt-8" onSubmit={submitData}>
          <div className="w-full h-14 border rounded-3xl tracking-wide ">
            <label htmlFor="ID" className="w-1/5 text-sm inline-block px-4">
              ID
            </label>
            <input
              id="ID"
              className="h-full w-4/5 rounded-3xl px-4"
              name="user_id"
              value={findPass.user_id}
              onChange={handleInput}
            />
          </div>
          <div className="w-full h-14 border rounded-3xl tracking-wide mt-6">
            <label htmlFor="MAIL" className="w-1/5 text-sm inline-block px-4">
              Mail
            </label>
            <input
              id="MAIL"
              className=" h-full w-4/5 rounded-3xl px-4"
              name="user_mail"
              value={findPass.user_mail}
              onChange={handleInput}
            />
          </div>
          <button
            tyle="submit"
            className="w-full py-4 keycolor text-white rounded-3xl font-bold tracking-wide text-center mt-8 hover:bg-purple-600 transition duration-150 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default searchpass;

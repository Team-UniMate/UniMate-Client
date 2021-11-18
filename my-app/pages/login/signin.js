import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import common from "../../data/common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginApp } from "../../redux/actions/LoginAppAction";
/*component*/
import HeadCont from "../../component_mo/common/HeadCont";

const signin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [signinInput, setSigninInput] = useState({
    userId: "",
    pass: "",
  });
  const handleId = (e) => {
    const { name, value } = e.target;
    setSigninInput({ ...signinInput, [name]: value });
  };
  const handlePass = (e) => {
    const { name, value } = e.target;
    setSigninInput({ ...signinInput, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    Login();
  };

  const Login = () => {
    const body = {
      user_id: signinInput.userId,
      user_pwd: signinInput.pass,
      // user_id: "son7",
      // user_pwd: "1234",
    };

    axios
      .post(common.baseURL + "users/signin", body)
      .then((res) => {
        console.log(res.data.result);
        dispatch(loginApp(res.data.result));
        router.push("/main");
      })
      .catch((error) => {
        console.log(error);
        toast.error(`아이디와 패스워드를 확인해주세요`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  console.log(signinInput);
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <>
      <div className="px-4 items-center relative">
        <HeadCont leftIcon={prevIcon} headerTitle={"로그인"} />
        <div className="mt-32 w-full">
          <form onSubmit={onSubmitHandler}>
            <div className="w-full h-14 border rounded-3xl tracking-wide ">
              <label htmlFor="ID" className="w-1/5 text-sm inline-block px-4">
                ID
              </label>
              <input
                type="text"
                id="ID"
                className="w-4/5 h-full rounded-3xl px-4"
                name="userId"
                value={signinInput.userId}
                onChange={handleId}
              />
            </div>
            <div className="w-full h-14 border rounded-3xl tracking-wide mt-12">
              <label htmlFor="PASS" className="w-1/4 text-sm inline-block px-4">
                Password
              </label>
              <input
                type="password"
                id="PASS"
                className="w-3/4 h-full rounded-3xl px-4"
                name="pass"
                value={signinInput.pass}
                onChange={handlePass}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 keycolor text-white rounded-3xl font-bold tracking-wide text-center mt-14 hover:bg-purple-600 transition duration-150 ease-in-out"
            >
              Login
            </button>
          </form>
          <div className="w-full flex justify-between mt-16">
            <span
              onClick={() => {
                router.push("/login/searchid");
              }}
              className="  border-b border-black cursor-pointer"
            >
              Forgot Your ID?
            </span>
            <span
              onClick={() => {
                router.push("/login/searchpass");
              }}
              className="  border-b border-black cursor-pointer"
            >
              Forgot Your password?
            </span>
          </div>
          <div className="w-full flex justify-center mt-16">
            <p className="pb-1">
              Don't have account yet?
              <strong
                onClick={() => {
                  router.push("/login/signup");
                }}
                className="ml-2 keyText border-b border-black cursor-pointer"
              >
                Sign up
              </strong>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default signin;

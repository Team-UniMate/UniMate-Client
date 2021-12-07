import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
/*component*/
import HeadCont from "../../component_mo/common/HeadCont";
import axios from "axios";
import common from "../../data/common";
const signup = () => {
  const router = useRouter();
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    userId: "",
    pass: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupInput({ ...signupInput, [name]: value });
  };
  console.log(signupInput);
  const postInfo = (e) => {
    e.preventDefault();
    const body = {
      user_name: signupInput.name,
      user_mail: signupInput.email,
      user_id: signupInput.userId,
      user_pwd: signupInput.pass,
    };
    axios
      .post(common.baseURL + "users/signup", body)
      .then((res) => {
        console.log(res);
        if (res.data.result) {
          alert("회원가입되었습니다.");
        } else {
          alert(error.message);
        }
      })
      .catch((error) => console.log(error.message));
  };
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <div className="px-4 items-center relative">
      <HeadCont leftIcon={prevIcon} headerTitle={"회원가입"} />
      <div className="mt-24 w-full">
        <form onSubmit={postInfo}>
          <div className="w-full h-14 border rounded-3xl tracking-wide mt-4">
            <label htmlFor="NAME" className="w-1/3 text-sm inline-block px-4">
              Name
            </label>
            <input
              id="NAME"
              className="w-2/3 rounded-3xl h-full px-4"
              name="name"
              value={signupInput.name}
              onChange={handleInput}
            />
          </div>
          <div className="w-full h-14 border rounded-3xl tracking-wide mt-4">
            <label htmlFor="MAIL" className="w-1/4 text-sm inline-block px-4">
              Mail
            </label>
            <input
              id="MAIL"
              className="w-3/4 rounded-3xl h-full px-4"
              name="email"
              value={signupInput.email}
              onChange={handleInput}
            />
          </div>
          <div className="w-full h-14 border rounded-3xl tracking-wide mt-4">
            <label htmlFor="ID" className="w-1/4 text-sm inline-block px-4">
              ID
            </label>
            <input
              id="ID"
              className="w-3/4 rounded-3xl h-full px-4"
              name="userId"
              value={signupInput.userId}
              onChange={handleInput}
            />
          </div>
          <div className="w-full h-14 border rounded-3xl tracking-wide mt-4">
            <label htmlFor="PASS" className="w-1/4 text-sm inline-block px-4">
              Password
            </label>
            <input
              id="PASS"
              className="w-3/4 rounded-3xl h-full px-4"
              name="pass"
              value={signupInput.pass}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 keycolor text-white rounded-3xl font-bold tracking-wide text-center mt-6"
          >
            Sign up
          </button>
          <div className="w-full flex justify-center mt-16">
            <p>
              Already have an account?
              <strong
                onClick={() => {
                  router.push("/login/signin");
                }}
                className="ml-2 keyText border-b border-black cursor-pointer"
              >
                Sign In
              </strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;

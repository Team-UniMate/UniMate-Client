import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
/*component*/
import HeadCont from '../../component_mo/common/HeadCont';

const signin = () => {
  const router = useRouter();
  // const onClickLogin = () => {
  //   router.push("/signin/signup");
  // }
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  return (
    <div className="px-4 items-center relative">
      <HeadCont leftIcon={prevIcon} />
      <div className="mt-14 w-full">
        <h1 className="text-2xl font-bold">로그인</h1>
        <form className="mt-14">
          <div className="w-full py-4 border rounded-3xl tracking-wide ">
            <label htmlFor="ID" className="w-1/5 text-sm inline-block px-4">ID</label>
            <input id="ID" className="w-4/5 rounded-3xl"/>
          </div>
          <div className="w-full py-4 border rounded-3xl tracking-wide mt-12">
            <label htmlFor="PASS" className="w-1/4 text-sm inline-block px-4">Password</label>
            <input id="PASS" className="w-3/4 rounded-3xl"/>
          </div>
          <button
            type="submit"
            className="w-full py-4 keycolor text-white rounded-3xl font-bold tracking-wide text-center mt-14"
     
          >
            Login
          </button>
          <div className="w-full flex justify-between mt-16">
            <Link href="/login/searchid">
              <a className="  border-b border-black ">Forgot Your ID?</a>
            </Link>
            <Link href="/login/searchpass">
            <a className="  border-b border-black ">Forgot Your password?</a>
            </Link>
          </div>
          <div className="w-full flex justify-center mt-16">
            <Link href="/login/signup">
              <a className="pb-1">Don't have account yet?<strong className="ml-2 keyText border-b border-black">Sign up</strong></a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default signin

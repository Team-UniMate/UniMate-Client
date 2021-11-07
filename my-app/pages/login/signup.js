import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link"
/*component*/
import HeadCont from '../../component_mo/common/HeadCont'

const signup = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  return (
    <div className="px-4 items-center relative">
      <HeadCont leftIcon={prevIcon} />
      <div className="mt-14 w-full">
        <h1 className="text-2xl font-bold">회원가입</h1>
        <form className="mt-16">
          <div className="w-full py-2 border rounded-3xl tracking-wide ">
            <label htmlFor="FIRST" className="w-1/3 text-sm inline-block px-4">First Name</label>
            <input id="FIRST" className="w-2/3 rounded-3xl"/>
          </div>
          <div className="w-full py-2 border rounded-3xl tracking-wide mt-4">
            <label htmlFor="LAST" className="w-1/3 text-sm inline-block px-4">Last Name</label>
            <input id="LAST" className="w-2/3 rounded-3xl"/>
          </div>
          <div className="w-full py-2 border rounded-3xl tracking-wide mt-4">
            <label htmlFor="MAIL" className="w-1/4 text-sm inline-block px-4">Mail</label>
            <input id="MAIL"className="w-3/4 rounded-3xl"/>
          </div>
          <div className="w-full py-2 border rounded-3xl tracking-wide mt-4">
            <label htmlFor="ID" className="w-1/4 text-sm inline-block px-4">ID</label>
            <input id="ID"className="w-3/4 rounded-3xl"/>
          </div>
          <div className="w-full py-2 border rounded-3xl tracking-wide mt-4">
            <label htmlFor="PASS" className="w-1/4 text-sm inline-block px-4">Password</label>
            <input id="PASS"className="w-3/4 rounded-3xl"/>
          </div>
          <button className="w-full py-4 keycolor text-white rounded-3xl font-bold tracking-wide text-center mt-6">
            Sign up
          </button>
          <div className="w-full flex justify-between mt-16">
            <div>
              <Link href="login/searchid">
              <a className=" border-b border-black ">Forgot Your ID?</a>
              </Link>
            </div>
            <div>
              <Link href="login/searchpass">
              <a className="  border-b border-black ">Forgot Your password?</a>
              </Link>
            </div>           
          </div>
          <div className="w-full flex justify-center mt-16">
            <Link href="login/signin">
              <a>Don't have account yet?<strong className="ml-2 keyText border-b border-black">Sign up</strong></a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default signup


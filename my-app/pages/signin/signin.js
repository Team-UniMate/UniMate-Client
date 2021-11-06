import React from 'react'
import HeadCont from '../../component_mo/common/HeadCont'

const signin = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  return (
    <div className="w-full h-screen flex flex-col items-center relative">
      <HeadCont leftIcon={prevIcon} />
      <div className="mt-14 w-full">
        <h1 className="text-2xl font-bold">로그인</h1>
        <form className="mt-20">
          <div className="w-full py-4 border rounded-3xl tracking-wide ">
            <label htmlFor="ID" className="w-1/5 text-sm inline-block px-4">ID</label>
            <input id="ID" className="w-4/5"/>
          </div>
          <div className="w-full py-4 border rounded-3xl tracking-wide mt-12">
            <label htmlFor="PASS" className="w-1/5 text-sm inline-block px-4">Password</label>
            <input id="PASS" className="w-4/5"/>
          </div>
          <button className="w-full py-4 keycolor text-white rounded-3xl font-bold tracking-wide text-center mt-14">
            Login
          </button>
          <div className="w-full flex justify-between mt-16">
            <div>
              <span className="px-1">Forgot Your ID?</span>
              <input type="radio" />
            </div>
            <div>
              <span className="px-1">Forgot Your password?</span>
              <input type="radio" />
            </div>           
          </div>
          <div className="w-full flex justify-center mt-16">
            <div>
              <span className="px-1">Don't have account yet?<strong className="pl-2 keyText">Sign up</strong></span>
              <input type="radio" />
            </div>    
          </div>
        </form>
      </div>
    </div>
  )
}

export default signin

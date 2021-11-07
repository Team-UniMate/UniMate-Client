import React from 'react';
import Link from "next/link"

const signin = () => {
  return (
    <div className="px-4 items-center h-screen">
      <div className="pagination w-full h-1/2 border justify-center items-center">
pagination 작업
      </div>
      <h1 className="font-bold text-3xl mt-14">A roomate for everyone</h1>
      <div className="w-full flex flex-col items-center mt-14">
        <Link href="/login/signin"
          >
          <a className="w-full py-4 keycolor rounded-3xl font-bold text-white tracking-wide text-center ">
          로그인 페이지
          </a>
        </Link>
        <Link href="/login/signup"
        >
          <a className="w-full py-4 border rounded-3xl font-bold tracking-wide text-center mt-4">
          계정 생성
        </a>
        </Link>
      </div>
    </div>
  )
}

export default signin